import PostCard from "./PostCard";
import StoriesContainer from "./StoriesContainer"


function PostContainer() {
    const dummyPosts = [
        {
          id: 1,
          title: "Mastering React",
          description: "Learn the fundamentals of React and how to build scalable applications.",
          tags: ["React", "Frontend", "JavaScript"],
          image: "https://static.vecteezy.com/system/resources/previews/000/550/045/original/digital-technology-abstract-background-concept-vector-illustration.jpg",
          profileImage: "https://w7.pngwing.com/pngs/129/292/png-transparent-female-avatar-girl-face-woman-user-flat-classy-users-icon.png",
          author: "John Doe",
          likes: 120,
          comments: 35,
          shares: 18,
        },
        {
          id: 2,
          title: "Tailwind CSS Tips",
          description: "Discover the power of Tailwind CSS to style your web apps effortlessly.",
          tags: ["Tailwind", "CSS", "Design"],
          image: "",
          profileImage: "",
          author: "Jane Smith",
          likes: 85,
          comments: 20,
          shares: 10,
        },
        {
          id: 3,
          title: "Node.js for Backend",
          description: "A beginner-friendly guide to building REST APIs using Node.js and Express.",
          tags: ["Node.js", "Backend", "API"],
          image : "https://cdn.prod.website-files.com/6344c9cef89d6f2270a38908/63862e5c039ba1e93da0d66c_b1.webp" ,
          profileImage: "",
          author: "Alice Brown",
          likes: 200,
          comments: 50,
          shares: 30,
        },
      ];

      
      

      
  return (
    <div className=" ">
         <div className="w-full  h-[90vh] bg-accent  rounded-lg  overflow-y-auto scrollbar-thin scrollbar-thumb-[#B95B45] scrollbar-track-[#F7F5EB]">
        <StoriesContainer/>
        <div className=" w-full flex flex-col items-center gap-2 mt-2">

        {
            dummyPosts.map((item)=>(
                <PostCard key={item.id} title={item.title} description={item.description} image={item.image} tags={item.tags} profileImage={item.profileImage} author={item.author} likes={item.likes} comments={item.comments} shares={item.shares} />
            ))

        }
        </div>
     
    </div>
      
    </div>
  )
}

export default PostContainer
