
import { createBrowserRouter, RouterProvider, } from 'react-router-dom'
import './App.css'
import HomePage from './pages/homePage/HomePage'
import About from './pages/About';
import Contact from './pages/Contact';
// import LendingPage from './pages/homePage/LendingPage'

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/about", element: <About /> },
  { path: "/contact", element: <Contact /> },
]);

function App() {
  return <RouterProvider router={router} />;
}


export default App
