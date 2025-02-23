// import { useEffect } from "react"
import Sidebar from "../../components/SideBar"
// import useUserStore from "../../store/authStore"
// import {  useNavigate } from "react-router-dom"


function Home() {

  // const {userData , isLogin} = useUserStore()
  // const navigation = useNavigate()

  // useEffect(() => {
  //   if (!isLogin) {
  //     navigation("/")
  //   }
  // }, [])
  

  return (
    <div>
      <Sidebar/>
      <h1></h1>
    </div>
  )
}

export default Home
