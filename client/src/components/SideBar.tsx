// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
import homeIcon from "../assets/Home.png";
import chatIcon from "../assets/Earth Globe.png";
import thoughtIcon from "../assets/Thinking Male.png";
import sthoughtIcon from "../assets/Spy.png";
import { Link, useLocation } from "react-router-dom";
import { motion } from "motion/react";


const Sidebar = () => {
    
    const location = useLocation()
  return (
   <>




   {/* //Mobile */}

  
    <span className="  w-14 h-14 left-28  rounded-full fixed bg-primary mb-14 "></span>
   <ul className="menu menu-horizontal px-5  gap-5 shadow-2xl bg-base-200 rounded-box ">
  <li className={`rounded-full `}>
    <Link to={"/home"}>
      <motion.img animate={{scale : location.pathname == "/home" ? 1.5 : 1}} src={homeIcon} className=" w-8" alt="" />
    </Link>
  </li>
  <li className={`rounded-full ${location.pathname == "/home/wypespace" ? "bg-accent" : ""}`}>
    <Link to={"/home/wypespace"}>
    <img src={chatIcon} className=" w-7" alt="" />
    </Link>
  </li>
  <li className={`rounded-full ${location.pathname == "/home/announcement" ? "bg-accent" : ""}`}>
    <Link to={"/home/announcement"}>
    <img src={thoughtIcon} className=" w-7" alt="" />
    </Link>
  </li>

  <li className={`rounded-full ${location.pathname == "/home/secretthoughts" ? "bg-accent" : ""}`}>
    <Link to={"/home/secretthoughts"}>
    <img src={sthoughtIcon} className=" w-7" alt="" />

    </Link>
  </li>
</ul>

 

   </>
  );
};

export default Sidebar;

