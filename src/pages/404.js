import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

import { Container } from "react-bootstrap";

import Style from "../assets/Style/Error.module.scss";
import { Link } from "gatsby";

const NotFoundPage = () => (
   <Layout>
      <SEO title="404: Not found" />
      {/* <h1>404: Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p> */}
      <Container>
         <div className={Style.errorSection}>
            <h1>404</h1>
            <h2>page not found</h2>
            <Link to="/" class="btn btn-primary">
               back to home
            </Link>
         </div>
      </Container>
   </Layout>
);

export default NotFoundPage;
