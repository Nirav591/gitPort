import { Link } from "gatsby";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import Style from "../../assets/Style/Footer.module.scss";

import LogoImg from "../../Elements/Logo"

const Footer = ({ siteTitle }) => {
   return (
      <>
         <div className={Style.FooterArea}>
            <Container>
               <Row>
                  <Col lg={3} md={6}>
                     <div className={`${Style.copyRight} ${`mb-30`}`}>
                        <div className={Style.FooterLogo}>
                           <Link href="/"> <LogoImg /></Link>
                        </div>
                        <p>
                           © 2020
                           <Link
                              to="/"
                              rel="noopener noreferrer"
                              target="_blank"
                           >
                              Kerala Lottery
                           </Link>
                           .<br /> All Rights Reserved
                        </p>
                     </div>
                  </Col>
                  <Col lg={2} md={6}>
                     <div
                        className={`${
                           Style.footerWidget
                        } ${`mb-30`} ${`ml-30`}`}
                     >
                        <div className={Style.footerTitle}>
                           <h3>ABOUT US</h3>
                        </div>
                        <div className={Style.footerList}>
                           <ul>
                              <li>
                                 <Link to="/">About us</Link>
                              </li>
                              <li>
                                 <Link to="/">Store location</Link>
                              </li>
                              <li>
                                 <Link to="/">Contact</Link>
                              </li>
                           </ul>
                        </div>
                     </div>
                  </Col>
                  <Col lg={2} md={6}>
                     <div
                        className={`${
                           Style.footerWidget
                        } ${`mb-30`} ${`ml-30`}`}
                     >
                        <div className={Style.footerTitle}>
                           <h3>USEFUL LINKS</h3>
                        </div>
                        <div className={Style.footerList}>
                           <ul>
                              <li>
                                 <Link to="/">Support Policy</Link>
                              </li>
                              <li>
                                 <Link to="/">FAQs</Link>
                              </li>
                           </ul>
                        </div>
                     </div>
                  </Col>
                  <Col lg={2} md={6}>
                     <div
                        className={`${
                           Style.footerWidget
                        } ${`mb-30`} ${`ml-30`}`}
                     >
                        <div className={Style.footerTitle}>
                           <h3>FOLLOW US</h3>
                        </div>
                        <div className={Style.footerList}>
                           <ul>
                              <li>
                                 <Link to="/">Facebook</Link>
                              </li>
                              <li>
                                 <Link to="/">Twitter</Link>
                              </li>
                              <li>
                                 <Link to="/">Instagram</Link>
                              </li>
                              <li>
                                 <Link to="/">Youtube</Link>
                              </li>
                           </ul>
                        </div>
                     </div>
                  </Col>
                  <Col lg={3}>
                     <div
                        className={`${
                           Style.footerWidget
                        } ${`mb-30`} ${`ml-30`}`}
                     >
                        <div className={Style.footerTitle}>
                           <h3>SUBSCRIBE</h3>
                        </div>
                        <div className={Style.subscribeStyle}>
                           <p>
                              Get E-mail updates about our latest shop and
                              special offers.
                           </p>
                           <div>
                              <div className={Style.subscribeForm}>
                                 <form>
                                    <div className={Style.McForm}>
                                       <div>
                                          <input
                                             id="mc-form-email"
                                             className={Style.email}
                                             type="email"
                                             placeholder="Enter your email address..."
                                          />
                                       </div>
                                       <div className={Style.Clear}>
                                          <button className={Style.Button}>
                                             SUBSCRIBE
                                          </button>
                                       </div>
                                    </div>
                                 </form>
                              </div>
                           </div>
                        </div>
                     </div>
                  </Col>
               </Row>
               <div className={Style.bottomLine}>
                  <h1>
                     We clearly declare that this is not an Online Lottery Play
                     prohibited legally but a service to the Physical (Paper)
                     Lottery Lovers in India.
                  </h1>
               </div>
            </Container>
         </div>
      </>
   );
};

export default Footer;
