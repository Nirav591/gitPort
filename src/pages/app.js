import React from "react"
import { Router } from "@reach/router"
import Layout from "../components/layout"
import PrivateRoute from "../components/privateRoute"
import Profile from "../components/profile"
import Order from "../components/order"
import Header from "../components/header"

const App = () => (
    <Layout>
        <Router>
            <PrivateRoute path="/app/profile" component={Profile} />
            <PrivateRoute path="/app/orders" component={Order} />
            <PrivateRoute path="/app/orders/:orderId" component={Order} />
        </Router>
    </Layout>
)

export default App