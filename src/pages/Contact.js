import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Style from "../assets/Style/Contact.module.scss";

import { FaPhoneSquareAlt, FaMapMarkerAlt, FaFax } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = () => {
   return (
      <>
         <Layout>
            <div className={Style.breadcrumb}>
               <Container>
                  <Row className="align-items-center">
                     <Col md={6}>
                        <div className={Style.PageTitle}>
                           <h2>CONTACT</h2>
                        </div>
                     </Col>
                     <Col md={6}>
                        <nav
                           aria-label="breadcrumb"
                           className={Style.themeBreadcrumb}
                        >
                           <ol
                              className={`${
                                 Style.breadcrumb
                              } ${`breadcrumb m-0`}`}
                           >
                              <li className={Style.breadcrumbitem}>
                                 <Link to="/">Home</Link>
                              </li>
                              <li
                                 className={`${Style.active} ${Style.addItem}`}
                              >
                                 CONTACT
                              </li>
                           </ol>
                        </nav>
                     </Col>
                  </Row>
               </Container>
            </div>
            <div className={Style.ContactUs}>
               <Container>
                  <Row>
                     <Col lg={7}>
                        <div className={Style.Map}>
                           <iframe
                              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.552248776!2d77.49085479367393!3d12.954294594448116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1610809320918!5m2!1sen!2sin"
                              width={600}
                              height={450}
                              frameBorder={0}
                              style={{ border: 0 }}
                              allowFullScreen
                              aria-hidden="false"
                              tabIndex={0}
                           />
                        </div>
                     </Col>
                     <Col lg={5}>
                        <div className={Style.contactRight}>
                           <ul>
                              <li>
                                 <div className={Style.contactIcon}>
                                    <FaPhoneSquareAlt />
                                    <h6>Contact Us</h6>
                                 </div>
                                 <div className="media-body">
                                    <p>+91 123 - 456 - 7890</p>
                                    <p>+86 163 - 451 - 7894</p>
                                 </div>
                              </li>
                              <li>
                                 <div className={Style.contactIcon}>
                                    <FaMapMarkerAlt />
                                    <h6>Address</h6>
                                 </div>
                                 <div className="media-body">
                                    <p>ABC Complex,Near xyz, Banglore</p>
                                    <p>India 123456</p>
                                 </div>
                              </li>
                              <li>
                                 <div className={Style.contactIcon}>
                                    <MdEmail />
                                    <h6>Address</h6>
                                 </div>
                                 <div className="media-body">
                                    <p>Support@lottery.com</p>
                                    <p>info@lottery.com</p>
                                 </div>
                              </li>
                              <li>
                                 <div className={Style.contactIcon}>
                                    <FaFax />
                                    <h6>Fax</h6>
                                 </div>
                                 <div className="media-body">
                                    <p>Support@lottery.com</p>
                                    <p>info@lottery.com</p>
                                 </div>
                              </li>
                           </ul>
                        </div>
                     </Col>
                  </Row>
                  <div>
                     <Row>
                        <Col sm={12}>
                           <form className={Style.themeForm}>
                              <Row className={Style.formRow}>
                                 <Col md={6}>
                                    <label htmlFor="name">First Name</label>
                                    <input
                                       type="text"
                                       className="form-control"
                                       id="name"
                                       placeholder="Enter Your name"
                                       required
                                    />
                                 </Col >
                                 <Col md={6}>
                                    <label htmlFor="email">Last Name</label>
                                    <input
                                       type="text"
                                       className="form-control"
                                       id="last-name"
                                       placeholder="Email"
                                       required
                                    />
                                 </Col>
                                 <Col md={6}>
                                    <label htmlFor="review">Phone number</label>
                                    <input
                                       type="text"
                                       className="form-control"
                                       id="review"
                                       placeholder="Enter your number"
                                       required
                                    />
                                 </Col>
                                 <Col md={6}>
                                    <label htmlFor="email">Email</label>
                                    <input
                                       type="text"
                                       className="form-control"
                                       id="email"
                                       placeholder="Email"
                                       required
                                    />
                                 </Col>
                                 <Col md={12}>
                                    <label htmlFor="review">
                                       Write Your Message
                                    </label>
                                    <textarea
                                       className="form-control"
                                       placeholder="Write Your Message"
                                       id="exampleFormControlTextarea1"
                                       rows={6}
                                       defaultValue={""}
                                    />
                                 </Col>
                                 <Col md={12}>
                                    <button
                                       className="btn btn-primary mt-2"
                                       type="submit"
                                    >
                                       Send Your Message
                                    </button>
                                 </Col>
                              </Row>
                           </form>
                        </Col>
                     </Row>
                  </div>
               </Container>
            </div>
         </Layout>
      </>
   );
};

export default Contact;
