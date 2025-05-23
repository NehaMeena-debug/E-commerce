import { Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from "./Component/Header"
import Home from "./Component/Home"
import Productui from "./Component/Productui"
import Contact from "./Component/Contact"
import Addtocard from "./Component/Addtocard"
import Liked from "./Component/Liked"
import Profile from "./Component/Profile"
import Footer from "./Component/Footer"



const App = () => {
  return (
    <>

      <div className="h-screen w-full">
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/product" element={<Productui />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/card" element={<Addtocard />}></Route>
          <Route path="/liked" element={<Liked />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
        </Routes>
        <Footer />

      </div>
    <ToastContainer />
    </>


  )
}

export default App;   