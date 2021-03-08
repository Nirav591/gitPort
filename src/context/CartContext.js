import React, { createContext, useState } from 'react'

import { getCart, saveCart } from '../utils/cart'

export const CartContext = createContext(null)

export default ({ children }) => {
    const [cart, setCart] = useState(getCart())

    const updateCart = (updatedCart) => {
        setCart(updatedCart)
        saveCart(updatedCart)
    }

    const addToCart = (product) => {
        const checkIfExisting = cart.find(c => c.id == product.id);
        if (checkIfExisting) {
            return;
        }
        const copy = [...cart]
        //Push the product
        copy.push(product)
        updateCart(copy)
    }

    const deleteFromCart = (productId) => {
        const filteredCart = cart.filter(c => c.id !== productId);
        updateCart(filteredCart)
    }

    const clearCart = () => {
        const updatedCart = []
        updateCart(updatedCart)
    }

    return (
        <CartContext.Provider value={{ cart, addToCart, clearCart, deleteFromCart }}>
            {children}
        </CartContext.Provider>
    )

}