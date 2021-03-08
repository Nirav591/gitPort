import React, { useEffect, useContext } from "react"
import { navigate } from "gatsby"
import fetch from 'node-fetch';
import Layout from "../../components/layout"
import { UserContext } from '../../context/UserContext'

const AuthCallbackPage = () => {
    const { addAuthDetails } = useContext(UserContext)

    const makeRequest = async () => {
        try {
            const url = `https://salty-castle-20033.herokuapp.com/auth/google/callback${window.location.search}`;
            const res = await fetch(url);
            const data = await res.json();
            addAuthDetails({
                jwt: data.jwt,
                user: data.user
            });
            navigate('/');
        } catch (e) {
            console.log(e);
            navigate('/signin');
        }


    };

    useEffect(() => {
        makeRequest();
    }, [])
    return (
        < Layout >
            <h1>Login Success</h1>

        </Layout >
    )

}

export default AuthCallbackPage
