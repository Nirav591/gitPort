import React, { useState, useCallback, useContext } from "react";
import fetch from "node-fetch";
import { Helmet } from "react-helmet";
import { navigate } from "gatsby";
// const Razorpay = require("razorpay");
import { CartContext } from "../context/CartContext";
import { Box, Table, Thead, Tbody, Tr, Th, Td, Button } from "@chakra-ui/react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { UserContext } from "../context/UserContext";

// Style
import Style from "../assets/Style/Cart.module.scss";

import { Container, Row, Col } from "react-bootstrap";
import { Link } from "gatsby";

const CartPage = () => {
   const { cart, deleteFromCart } = useContext(CartContext);
   const { authInfo } = useContext(UserContext);
   const createOrder = async () => {
      try {
         const url = `https://salty-castle-20033.herokuapp.com/orders`;
         const sub_total = cart.length * 30;
         const transaction_charge = sub_total * 0.03;
         const convenience_fee =
            sub_total <= 50 ? 5 : sub_total > 50 && sub_total <= 100 ? 10 : 30;
         const total_amount = sub_total + transaction_charge + convenience_fee;
         const requestBody = {
            tickets: cart.map((t) => t.id),
            sub_total: cart.length * 30,
            transaction_charge,
            convenience_fee,
            total_amount,
         };

         const res = await fetch(url, {
            method: "post",
            body: JSON.stringify(requestBody),
            headers: {
               "Content-Type": "application/json",
               Authorization: `Bearer ${authInfo.jwt}`,
            },
         });
         const data = await res.json();
         console.log(data);
         if (window && window.Razorpay) {
            const razorPayInstance = new window.Razorpay({
               key: "rzp_test_Z2eoxHTbEa180j",
               name: "Kerala Lotteries",
               description: "Buy Lottery",
               order_id: data.order.id,
               handler: async (paymentResponse) => {
                  console.log(paymentResponse);
                  const captureRequest = {
                     orderId: data.entity.id,
                     amount: total_amount * 100,
                     payId: paymentResponse.razorpay_payment_id,
                  };

                  const captureUrl = `https://salty-castle-20033.herokuapp.com/payment/capture`;
                  const captureResponse = await fetch(captureUrl, {
                     method: "post",
                     body: JSON.stringify(captureRequest),
                     headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${authInfo.jwt}`,
                     },
                  });
                  navigate(`/order-success`);
               },
            });

            razorPayInstance.on("payment.failed", function (response) {
               console.log(response.error);
            });
            razorPayInstance.open();
         }
      } catch (e) {
         console.log(e);
      }
   };

   return (
      <Layout>
         <SEO title="Cart" />
         {/* <h2>Cart</h2> */}
         <div className={Style.breadcrumb}>
            <Container>
               <Row className="align-items-center">
                  <Col md={6}>
                     <div className={Style.PageTitle}>
                        <h2>cart</h2>
                     </div>
                  </Col>
                  <Col md={6}>
                     <nav
                        aria-label="breadcrumb"
                        className={Style.themeBreadcrumb}
                     >
                        <ol
                           className={`${Style.breadcrumb} ${`breadcrumb m-0`}`}
                        >
                           <li className={Style.breadcrumbitem}>
                              <Link to="/">Home</Link>
                           </li>
                           <li className={`${Style.active} ${Style.addItem}`}>
                              cart
                           </li>
                        </ol>
                     </nav>
                  </Col>
               </Row>
            </Container>
         </div>
         <Helmet>
            <script src="https://checkout.razorpay.com/v1/checkout.js"></script>
         </Helmet>
         {/* <Box>
            <Table variant="striped" colorScheme="teal" size="sm">
               <Thead>
                  <Tr>
                     <Th>Series</Th>
                     <Th>Number</Th>
                     <Th></Th>
                  </Tr>
               </Thead>
               <Tbody>
                  {cart.map((ticket) => (
                     <Tr key={ticket.id}>
                        <Td>{ticket.series}</Td>
                        <Td>{ticket.number}</Td>
                        <Td>
                           <Button>Remove</Button>
                        </Td>
                     </Tr>
                  ))}
               </Tbody>
            </Table>
         </Box> */}
         <section className={Style.CartSection}>
            <Container>
               <Row>
                  <Col sm={12}>
                     <table
                        className={`${
                           Style.CartTable
                           } ${`table table-responsive-xs`}`}
                     >
                        <thead>
                           <th>Series</th>
                           <th>Number</th>
                           <th>Action</th>
                        </thead>
                        <tbody>
                           {cart.map((ticket) => (
                              <tr key={ticket.id}>
                                 <td>{ticket.series}</td>
                                 <td>{ticket.number}</td>
                                 <td>
                                    <button
                                       type="button"
                                       class="btn btn-primary"
                                       onClick={() => deleteFromCart(ticket.id)}
                                    >
                                       Remove
                                    </button>
                                 </td>
                              </tr>
                           ))}
                        </tbody>
                     </table>
                  </Col>
               </Row>
               <div className={Style.Buynow}>
                  <button
                     disabled={cart.length == 0}
                     type="button"
                     class="btn btn-primary"
                     onClick={createOrder}
                  >
                     Buy Now
                  </button>
               </div>
            </Container>
         </section>
      </Layout>
   );
};

export default CartPage;
