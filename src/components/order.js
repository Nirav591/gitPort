import React, { useState, useContext, useEffect } from "react";
import { Link } from "gatsby";
import { useParams } from "@reach/router";
import { Container, Row, Col } from "react-bootstrap";
import { UserContext } from "../context/UserContext";

import { RiShoppingCartFill } from "react-icons/ri";

import Style from "../assets/Style/Order.module.scss";

const showOrderDetails = (order) => {
   return (
      <>
         <div className={Style.breadcrumb}>
            <Container>
               <Row className="align-items-center">
                  <Col md={6}>
                     <div className={`${Style.PageTitle} `}>
                        <h2 className="d-flex">
                           Your Order <RiShoppingCartFill />
                        </h2>
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
                              Order Details
                           </li>
                        </ol>
                     </nav>
                  </Col>
               </Row>
            </Container>
         </div>
         <div className={Style.orderPage}>
            <Container>
               {/* <div>
                  <h1>Order Details</h1>
                  <h2>{order.id}</h2>
                  <h3>Tickets:</h3>
                  <p>
                     {order.tickets.map((t) => (
                        <div>
                           <span>{t.series}</span>
                           <span>{t.number}</span>
                        </div>
                     ))}
                  </p>
                  <p>Sub Total: {order.sub_total}</p>
                  <p>Created At: {order.created_at}</p>
                  <p>Convenience Fee: {order.convenience_fee}</p>
                  <p>Transaction Fee: {order.transaction_charge}</p>
                  <p>Total: {order.total_amount}</p>
               </div> */}
               <div className={Style.ProductOrder}>
                  <h3>your order details</h3>
                  <Row className={Style.productOrderdetail}>
                     <Col lg={6}>
                        <Row>
                           <div className={`${Style.order_detail} ${"col-3"}`}>
                              <div>
                                 <h4>Order Id</h4>
                                 <h5>{order.id}</h5>
                              </div>
                           </div>
                           <div className={`${Style.order_detail} ${"col-3"}`}>
                              <div>
                                 <h4>Order Id</h4>
                                 <h5>{order.id}</h5>
                              </div>
                           </div>
                           <div className={`${Style.order_detail} ${"col-3"}`}>
                              <div>
                                 <h4>Tickets</h4>
                                 <h5>
                                    {order.tickets.map((t) => (
                                       <div>
                                          <span>{t.series}</span>
                                          <span>{t.number}</span>
                                       </div>
                                    ))}
                                 </h5>
                              </div>
                           </div>
                           <div className={`${Style.order_detail} ${"col-3"}`}>
                              <div>
                                 <h4>Sub Total</h4>
                                 <h5>{order.sub_total}</h5>
                              </div>
                           </div>
                        </Row>
                        <div className={Style.totalSec}>
                           <ul>
                              <li>
                                 subtotal <span>{order.sub_total}</span>
                              </li>
                              <li>
                                 Convenience Fee:
                                 <span>{order.convenience_fee}</span>
                              </li>
                              <li>
                                 Transaction Fee:
                                 <span>{order.transaction_charge}</span>
                              </li>
                           </ul>
                        </div>
                        <div className={Style.Total}>
                           <h3>
                              total <span>{order.total_amount}</span>
                           </h3>
                        </div>
                     </Col>
                     <Col lg={6}>
                        <div className={Style.paymentMode}>
                           <h4>payment method</h4>
                           <p>
                              Pay on Delivery (Cash/Card). Cash on delivery
                              (COD) available. Card/Net banking acceptance
                              subject to device availability.
                           </p>
                        </div>
                        <div className={Style.deliverySec}>
                           <h3>Created At</h3>
                           <h2>{order.created_at}</h2>
                        </div>
                     </Col>
                  </Row>
               </div>
            </Container>
         </div>
      </>
   );
};

const Order = () => {
   const params = useParams();
   const [orders, setOrders] = useState([]);
   const { authInfo } = useContext(UserContext);
   console.log(params);

   useEffect(() => {
      getOrders(params.orderId);
   }, []);

   const getOrders = async (orderId) => {
      let url = `https://salty-castle-20033.herokuapp.com/orders`;
      if (orderId) {
         url += `/${orderId}`;
      }
      const res = await fetch(url, {
         method: "get",
         // body: JSON.stringify(requestBody),
         headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${authInfo.jwt}`,
         },
      });
      const data = await res.json();
      console.log(data);
      setOrders(data);
   };
   return Array.isArray(orders) ? (
      <>
         <div className={Style.breadcrumb}>
            <Container>
               <Row className="align-items-center">
                  <Col md={6}>
                     <div className={`${Style.PageTitle} `}>
                        <h2 className="d-flex">
                           Your Order <RiShoppingCartFill />
                        </h2>
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
                              Order
                           </li>
                        </ol>
                     </nav>
                  </Col>
               </Row>
            </Container>
         </div>
         <Container>
            <Row>
               <Col sm={12}>
                  <div class="table-responsive">
                     <table class="table">
                        <thead>
                           <th>Tickets</th>
                           <th>Total</th>
                           <th>Date</th>
                           <th>Action</th>
                        </thead>
                        <tbody>
                           {orders.map((order) => (
                              <tr key={order.id}>
                                 <td>
                                    {order.tickets.map((t) => (
                                       <div>
                                          <span>{t.series}</span>
                                          <span>{t.number}</span>
                                       </div>
                                    ))}
                                 </td>
                                 <td>{order.sub_total}</td>
                                 <td>{order.created_at}</td>
                                 <td>
                                    <Link
                                       to={`/app/orders/${order.id}`}
                                       className="btn btn-primary"
                                    >
                                       View Details
                                    </Link>
                                 </td>
                              </tr>
                           ))}
                        </tbody>
                     </table>
                  </div>
               </Col>
            </Row>
         </Container>
      </>
   ) : (
      showOrderDetails(orders)
   );
};

export default Order;
