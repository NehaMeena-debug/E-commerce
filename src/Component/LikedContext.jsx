
import React, { createContext, useState } from "react";
import { ToastContainer } from "react-toastify";
import { showToast } from "../Utils/toastUtils";

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
     showToast("Item 🛒 added to cart!", "addToCart");
  };

  const removeFromCart = (productId) => {
    setCart(prev => prev.filter(p => p.id !== productId));
    showToast("Item removed to cart! 🛒", "removedFromCart");
  };

  return (
    <LikedContext.Provider
      value={{ likedProducts, toggleLike, cart, addToCart, removeFromCart }}
    >
      {children}
    </LikedContext.Provider>
  );
};
