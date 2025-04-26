
import React, { useState } from 'react';
const Productcard = ({ img, name, like, price, atc, buy }) => {

  const [liked,setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  }; 

  return (
    <div className="bg-white rounded-2xl p-4 m-4 shadow-lg flex flex-col gap-4 items-center max-w-xs">
   
      <img className="h-64 w-64  rounded-xl" src={img} alt={name} />

    
      <div className="flex justify-between items-center w-full px-2">
        <h2 className="font-bold text-lg text-gray-800">{name}</h2>
        <button onClick={toggleLike} className="flex items-center gap-1">
          <i className={liked ? "ri-heart-3-fill text-xl":"ri-heart-3-line text-xl"}></i> 
          
          {like}
        </button>
      </div>
      

      <div className="flex justify-between items-center w-full px-2">
        <p className="text-gray-700 font-semibold text-md">₹ {price}</p>
        <button className="flex items-center gap-1  text-gray-600 hover:text-blue-700 transitio ">
          <i className="ri-shopping-cart-2-fill text-xl"></i> {atc}
        </button>
      </div>

      
      <button className="bg-rose-gold text-white rounded-lg px-6 py-2 hover:bg-pink-300  hover:text-black transition">
        {buy}
      </button>
    </div>
  );
};

export default Productcard;   

