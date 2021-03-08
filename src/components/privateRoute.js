import React, { useContext } from "react"
import { navigate } from "gatsby"
import { UserContext } from '../context/UserContext'

const PrivateRoute = ({ component: Component, location, ...rest }) => {
    const { authInfo } = useContext(UserContext)
    if (!authInfo && location.pathname !== `/signin` && location.pathname !== `/`) {
        navigate("/signin")
        return null
    }

    return <Component {...rest} />
}

export default PrivateRoute