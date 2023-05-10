import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from './pages/Login';
import Home from './pages/Home'
import Signup from './pages/Signup'
import Review from './pages/Review'
import Single from './pages/Single'
import About from './pages/About'
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";

const Layout = () => {
  return (
    <div className="bg-gradient-to-b from-maincolor to-darkshade h-screen">
      <div className="bg-gradient-to-b from-maincolor to-darkshade min-h-full">
    
        <Navbar/>
        <Outlet/>
        <Footer/>
      </div>
    </div>
  )

}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path:'/',
        element: <Home/>
      },
      {
        path:"/post/:id",
        element:<Single/>
      },
      {
        path:"/review",
        element:<Review/>
      },
    ]
  },
  {
    path: "/signup",
    element: <Signup/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/about",
    element: <About/>
  }
]);

function App() {
  return (
    <div>
      <RouterProvider router ={router}/>
    </div>
    
    
  );
}



export default App;
