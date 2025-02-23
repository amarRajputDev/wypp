
import { createBrowserRouter, RouterProvider, useNavigate, useNavigation, } from 'react-router-dom'
import './App.css'
import HomePage from './pages/homePage/HomePage'
import About from './pages/About';
import Contact from './pages/Contact';
import Signup from './pages/Auth/Signup';
import Home from './pages/Home/Home';
import Login from './pages/Auth/Login';
import { ToastContainer, Zoom } from 'react-toastify';
import { useEffect } from 'react';
import axios from 'axios';
import useUserStore from './store/authStore';
// import LendingPage from './pages/homePage/LendingPage'

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/about", element: <About /> },
  { path: "/contact", element: <Contact /> },
  { path: "/signup", element: <Signup /> },
  { path: "/login", element: <Login /> },
  { path: "/home", element: <Home /> },
  { path: "/home/wypespace", element: <Home /> },
  { path: "/home/announcement", element: <Home /> },
  { path: "/home/secretthoughts", element: <Home /> },
]);

function App() {

  const {setUser } = useUserStore()
  
  const apiUrl = import.meta.env.VITE_API_URL
  const fetchUser = async () => {
    try {
      const res = await axios.get(`${apiUrl}/user/getuser`, { withCredentials: true });
      console.log(res.data);
      setUser(res.data.userData)
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  };
  
  useEffect(() => {
    fetchUser();
  },[])


  
  return (
    <>
    <ToastContainer
    position="top-center"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="light"
    transition={Zoom}
    />
    <RouterProvider router={router} />;
    </>
  )
 
}


export default App
