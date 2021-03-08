/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */
import React from 'react'
import CartContextProvider from './src/context/CartContext'
import UserContextProvider from './src/context/UserContext'

export const wrapRootElement = ({ element }) => (
    <UserContextProvider>
        <CartContextProvider>
            {element}
        </CartContextProvider>
    </UserContextProvider>
)