import React, { useState, useContext, useEffect } from "react";

import { graphql } from "gatsby";
import Img from "gatsby-image";

import Countdown from "react-countdown";
import ReactMarkdown from "react-markdown";

import { CartContext } from "../context/CartContext";

import Layout from "../components/layout";

import { formatPrice } from "../utils/format";
import { countdownRenderer } from "../utils/products";

// bootstrap
import { Container, Row, Col } from "react-bootstrap";

// Style

import Style from "../assets/Style/Product.module.scss";

const ProductTemplate = ({ data: { strapiLottery, strapiDraw } }) => {
   const { addToCart, cart } = useContext(CartContext);
   const [search, setSearch] = useState("");

   const onSearch = (e) => {
      setSearch(e.currentTarget.value);
   };

   const isDisabled = (id) => {
      return !!cart.find((ticket) => ticket.id === id);
   };

   console.log("strapiDraw", strapiDraw);
   console.log("strapiLottery", strapiLottery);
   if (strapiLottery) {
      return (
         <Layout>
            <Container>
               <div className={Style.ProductPage}>
                  <Row>
                     <Col lg={6}>
                        <div className={Style.productImage}>
                           <Img
                              fixed={strapiLottery.image.childImageSharp.fixed}
                              className="img-fluid"
                           />
                        </div>
                     </Col>
                     <Col lg={6}>
                        <div className={Style.ProductContent}>
                           <div className={Style.ProductName}>
                              <h4>{strapiLottery.name}</h4>
                           </div>
                           <div className={Style.Price}>
                              <div className={Style.InnerTitle}>Price:</div>
                              <div>
                                 <h4>{formatPrice(strapiLottery.cost)}</h4>
                              </div>
                           </div>
                           <div className={Style.ProductDescription}>
                              <div className={Style.InnerTitle}>
                                 lottery description:
                              </div>
                              <ReactMarkdown>
                                 {strapiLottery.description}
                              </ReactMarkdown>
                           </div>
                           <div className={Style.Countdown}>
                              {strapiDraw && (
                                 <div className={Style.Timer}>
                                    <div className={Style.CountdownMain}>
                                       <Countdown
                                          date={strapiDraw.date_of_draw}
                                          renderer={countdownRenderer}
                                       />
                                    </div>
                                    <input
                                       variant="outline"
                                       onChange={onSearch}
                                       placeholder="Search for series or number"
                                       className={`${"form-control"} ${
                                          Style.InputInn
                                       }`}
                                    />
                                    <table className="table">
                                       <caption>
                                          Imperial to metric conversion factors
                                       </caption>
                                       <thead>
                                          <tr>
                                             <th>Series</th>
                                             <th>Number</th>
                                             <th></th>
                                          </tr>
                                       </thead>
                                       <tbody>
                                          {strapiDraw.tickets
                                             .filter(
                                                (ticket) =>
                                                   ticket.series.includes(
                                                      search
                                                   ) ||
                                                   ticket.number.includes(
                                                      search
                                                   )
                                             )
                                             .map((ticket) => (
                                                <tr key={ticket.id}>
                                                   <td>{ticket.series}</td>
                                                   <td>{ticket.number}</td>
                                                   <td>
                                                      <button
                                                         isDisabled={isDisabled(
                                                            ticket.id
                                                         )}
                                                         onClick={() =>
                                                            addToCart(ticket)
                                                         }
                                                         class="btn btn-primary"
                                                      >
                                                         Add To Cart{" "}
                                                      </button>
                                                   </td>
                                                </tr>
                                             ))}
                                       </tbody>
                                    </table>
                                 </div>
                              )}
                           </div>
                           <div className={Style.NoTickets}>
                              {!strapiDraw && <h1>No Tickets available</h1>}
                           </div>
                        </div>
                     </Col>
                  </Row>
               </div>
            </Container>
         </Layout>
      );
   }
   return (
      <Layout>
         <h1>No Tickets available</h1>
      </Layout>
   );
};

export default ProductTemplate;

export const query = graphql`
   query ProductTemplateQuery($id: String!, $slug: String!) {
      strapiDraw(lottery: { slug: { eq: $slug } }, isFuture: { eq: true }) {
         id
         draw_number
         date_of_draw
         tickets {
            id
            series
            number
         }
      }
      strapiLottery(id: { eq: $id }) {
         strapiId
         name
         cost
         description
         image {
            childImageSharp {
               fixed(width: 640) {
                  ...GatsbyImageSharpFixed
               }
            }
         }
      }
   }
`;
