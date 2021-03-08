/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
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