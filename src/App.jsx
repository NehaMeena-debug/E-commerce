import Header from "./Component/Header"
import { Routes, Route } from "react-router-dom";
import Home from "./Component/Home"
import Productui from "./Component/Productui"
import Contact from "./Component/Contact"
import Addtocard from "./Component/Addtocard"
import Liked from "./Component/Liked" 
import Profile from "./Component/Profile"
import Footer from "./Component/Footer"

import { useState } from 'react';

const App = () =>{

  // const [likedItems, setLikedItems] = useState([]); 
 

  return(
    <>
    <div className="h-screen w-full">
    <Header/>
          
  <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/home" element={<Home/>}></Route>
    
    {/* <Route path="/liked" element={<Liked likedProducts={likedItems} />}></Route> */}

    <Route path="/product" element={<Productui/>}></Route>
    {/* <Route path="/product" element={<Productui likedProducts={likedItems} setLikedProducts={setLikedItems} />} /> */}

    <Route path="/contact" element={<Contact/>}></Route>
    <Route path="/card" element={<Addtocard/>}></Route>
    <Route path="/liked" element={<Liked/>}></Route>
    <Route path="/profile" element={<Profile/>}></Route>
  </Routes>
  
   <Footer/>
    
   </div>  
    </>   
    
           
  )  
}  

export default App;   