import React, { createContext, useContext, useState, useEffect } from "react";
import { toast } from 'react-hot-toast';

const Context = createContext();

export const StateContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState();
  const [totalQuantities, setTotalQuantities] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1)
  }

  const decrementQuantity = () => {
    setQuantity((prevQuantity) => {
      if (prevQuantity - 1 < 1) return 1

      return prevQuantity - 1
    })
  }

  const onAddProduct = (product, quantity) => {
    const checkProductInCart = cartItems.find((item) => cartItems._id === product._id);

    setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price * quantity)
    setTotalQuantities((prevTotalQuantity) => prevTotalQuantity + quantity)

    if (checkProductInCart) {
      const updatedCartItems = cartItems.map((cartProduct) => {
        if (cartProduct._id === product._id) return {
          ...cartProduct,
          quantity: cartProduct.quantity + quantity
        }
      })

      setCartItems(updatedCartItems);
    } else {
      product.quantity = quantity;
      setCartItems([...cartItems, { ...product }])
    }

    toast.success(`${quantity} ${product.name} added to the cart.`)
  }


  return (
    <Context.Provider
      value={{
        showCart,
        setShowCart,
        cartItems,
        totalPrice,
        totalQuantities,
        quantity,
        incrementQuantity,
        decrementQuantity,
        onAddProduct
      }}
    >
      {children}
    </Context.Provider>
  )
}

export const useStateContext = () => useContext(Context)
