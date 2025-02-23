import User from '../models/UserModer.js';
import bcrypt from "bcryptjs"
import jwt from 'jsonwebtoken';

// fullName: "",
//     username: "",
//     gender: "",
//     address: "",
//     age: "",
//     collegeName: "",
//     courseName: "",
//     courseDuration: "",
//     yearOfStudy: "",
//     personality: "",
//     interests: "",
//     email: "",
//     password: "",
//     confirmPassword: "",

export const signupController = async (req, res) => {
    const {fullName,username,gender,address,age,collegeName,courseName,courseDuration,yearOfStudy,personality,interests,email,password} = req.body
  try {
    console.log("start")
    if (!fullName || !username || !collegeName || !email || !password) {
    return res.status(400).json({ message: 'Please fill in all the required fields' });     
    }


    const existingUser = await User.findOne({ username});
    if (existingUser) {
      return res.status(400).json({ message: 'Username already exists' });
    }
    
    
    const isEmailExist = await User.findOne({ email});
    if (isEmailExist) {
      return res.status(400).json({ message: 'Email already exists' });
      
    }
  
    
    const hashedPassword = await bcrypt.hash(password, 10);
    
    const malePic = `https://avatar.iran.liara.run/public/boy?username=${username}`
    const femalePic = `https://avatar.iran.liara.run/public/girl?username=${username}`
    
    const user = new User({
      fullName,
      username,
      gender,
      address,
      age,
      collegeName,
      Course : {
        duration :courseDuration,
        currentYear:yearOfStudy,
        courseName
      },
      personality,
      intrests:interests,
      email,
      password :hashedPassword,
      profilePic : gender == "male" ? malePic : femalePic
      
    })
    
    

    await user.save()

    
    const userData = user.toObject();
    delete userData.password;
    
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
    res.cookie('token', token, { httpOnly: true, secure: true, sameSite: 'strict' });

    res.status(201).json({ message: 'User created successfully', userData });
   
  } catch (error) {
    res.status(500).json({ message: 'Error creating user' });
  }
};

export const login = async (req , res) =>{
  const {username , password} = req.body;

  try {

    const isUserExist = await User.findOne({username})
    // console.log(isUserExist)

    if (!isUserExist) {
      return res.status(401).json({message:"user not exist"})
    }

    console.log("1")
    const isPassMatched = await bcrypt.compare(password , isUserExist.password)
    console.log("2")

    if (!isPassMatched) {
      return res.status(401).json({message:"Wrong Password"})
    }

    const userData = isUserExist.toObject();
    delete userData.password;

    const token = jwt.sign({ id: isUserExist._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
    res.cookie('token', token, { httpOnly: true, secure: true, sameSite: 'strict' , maxAge: 7 * 24 * 60 * 60 * 1000,});

    res.status(201).json({message:"SUccessfull Logged In" , userData})
    

  } catch (error) {
    return res.status(500).json({message:"Server Error" , error})
    
  }
}


export const getUser = async(req , res) => {

  try {
    const userId = req.user.id
    console.log("userid ="+userId)

    const userData = await User.findById(userId).select("-password")

    res.status(200).json({message:"Data Fetch Successfully" , userData})


    
  } catch (error) {
    return res.status(500).json({message:"Something Went Wrong" , error})
  }
  
}

