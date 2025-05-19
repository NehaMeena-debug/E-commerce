// import { useContext } from "react";
// import Productcard from "./Productcard"; 
//  import { LikedContext } from './LikedContext';

// const Addtocard = () => {
//   const { cart } = useContext(LikedContext);
//   return (
//     <div className="flex flex-col items-center">
//       <h1 className="font-monoton text-center m-12 text-3xl">Added to Cart Products</h1>

//       {cart.length === 0 ? (
//         <p>No items in cart.</p>
//       ) : (
//         <div className="flex flex-wrap justify-center gap-6">
//           {cart.map((item) => (
//             <Productcard
//               key={item.id}
//               id={item.id}
//               img={item.img}
//               name={item.name}
//               price={item.price}
//               isCartPage={true} 
//             />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Addtocard;


import React, { useContext } from 'react';
import { LikedContext } from './LikedContext';
import Productcard from './Productcard';

const Addtocard = () => {
  const { cart, removeFromCart } = useContext(LikedContext);

  return (
    <div className="p-4">
      <h1 className="font-monoton text-center m-12 text-3xl">Your Beauty Basket 🧴✨</h1>
      
      {cart.length === 0 ? (
        <p className="text-center text-gray-500 animate-bounce h-48 text-[100px] w-full">🛒
        </p>
      ) : (
        <div className="flex flex-wrap justify-center gap-4">
          {cart.map((product) => (
            <Productcard
              key={product.id}
              {...product}
              isCartPage={true}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Addtocard;
