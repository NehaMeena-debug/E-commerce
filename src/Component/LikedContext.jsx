//  import React, { createContext, useState } from "react";

// export const LikedContext = createContext();

// export const LikedProvider = ({ children }) => {
//   const [likedProducts, setLikedProducts] = useState([]);
//   const [card, setCard] = useState([]);

//   const toggleLike = (product) => {
//     const isAlreadyLiked = likedProducts.some(p => p.id === product.id);

//     if (isAlreadyLiked) {
//       setLikedProducts(prev => prev.filter(p => p.id !== product.id));
//     } else {
//       setLikedProducts(prev => [...prev, product]);
//     }
//   };

//   const addToCart = (product) =>{
//     const isAlreadyInCart = card.some(p => p.id === product.id);
//     if (!isAlreadyInCart) {
//       card(prev => [...prev, product]);
//     }
//   }

//   const removeFromCard = (productId)=>{
//   setCartProducts(prev => prev.filter(p => p.id !== productId));
//   }

//   return (
//     <LikedContext.Provider value={{likedProducts, toggleLike ,cartProducts, addToCart, removeFromCard}}>
//       {children}
//     </LikedContext.Provider>  
//   );  
// };



import React, { createContext, useState } from "react";

export const LikedContext = createContext();

export const LikedProvider = ({ children }) => {
  const [likedProducts, setLikedProducts] = useState([]);
  const [cart, setCart] = useState([]); 

  const toggleLike = (product) => {
    const isAlreadyLiked = likedProducts.some(p => p.id === product.id);
    if (isAlreadyLiked) {
      setLikedProducts(prev => prev.filter(p => p.id !== product.id));
    } else {
      setLikedProducts(prev => [...prev, product]);
    }
  };

  const addToCart = (product) => {
    const isAlreadyInCart = cart.some(p => p.id === product.id);
    if (!isAlreadyInCart) {
      setCart(prev => [...prev, product]);
    }
  };

  const removeFromCart = (productId) => {
    setCart(prev => prev.filter(p => p.id !== productId));
  };

  return (
    <LikedContext.Provider
      value={{ likedProducts, toggleLike, cart, addToCart, removeFromCart }}
    >
      {children}
    </LikedContext.Provider>
  );
};
