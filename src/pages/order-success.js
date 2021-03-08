import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";

import { Container, Row, Col } from "react-bootstrap";
import Style from "../assets/Style/OrderSucc.module.scss";

import { FaCheckCircle } from "react-icons/fa";

const OrderSuccessPage = () => (
   <Layout>
      <SEO title="Login" />
      {/* <h1>Order Created Successfully</h1>
        <Link to="/app/orders">View My Orders</Link> */}

      <div className={Style.orderSucc}>
         <Container>
            <Row>
               <Col md={12}>
                  <div className={Style.successText}>
                     <div className={Style.Icon}>
                        <FaCheckCircle />
                        <h2>thank you</h2>
                        <p>
                           Payment is successfully processsed and your order is
                           on the way
                        </p>
                        <p>Transaction ID:267676GHERT105467</p>
                     </div>
                  </div>
               </Col>
            </Row>
         </Container>
      </div>
   </Layout>
);

export default OrderSuccessPage;
