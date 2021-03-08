import React from "react";
import { Accordion, Card, Button, Container, Row, Col } from "react-bootstrap";
import Layout from "../components/layout";
import { Link } from "gatsby";

import { IoIosArrowDropdownCircle } from "react-icons/io";

import Style from "../assets/Style/Faq.module.scss";

const Faq = () => {
   return (
      <>
         <Layout>
            <div className={Style.breadcrumb}>
               <Container>
                  <Row className="align-items-center">
                     <Col md={6}>
                        <div className={Style.PageTitle}>
                           <h2>Faq</h2>
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
                                 Faq
                              </li>
                           </ol>
                        </nav>
                     </Col>
                  </Row>
               </Container>
            </div>
            <Container>
               <div className={Style.fqSection}>
                  <Accordion defaultActiveKey="0">
                     <Card>
                        <Card.Header>
                           <Accordion.Toggle
                              as={Button}
                              variant="link"
                              eventKey="0"
                           >
                              <div className={Style.Content}>
                                 Lorem Ipsum is simply dummy text of the
                                 printing and typesetting industry.
                              </div>
                              <div className={Style.Icon}>
                                 <IoIosArrowDropdownCircle />
                              </div>
                           </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                           <Card.Body>
                              <p>
                                 it look like readable English. Many desktop
                                 publishing packages and web page editors now
                                 use Lorem Ipsum as their default model text,
                                 and a search for 'lorem ipsum' will uncover
                                 many web sites still in their infancy. Various
                                 versions have evolved over the years,All the
                                 Lorem Ipsum generators on the Internet tend to
                                 repeat predefined chunks as necessary, making
                                 this the first true generator on the Internet.
                                 It uses a dictionary of over 200 Latin words,
                                 combined with a handful of model sentence
                                 structures
                              </p>
                           </Card.Body>
                        </Accordion.Collapse>
                     </Card>
                  </Accordion>
                  <Accordion defaultActiveKey="0">
                     <Card>
                        <Card.Header>
                           <Accordion.Toggle
                              as={Button}
                              variant="link"
                              eventKey="0"
                           >
                              <div className={Style.Content}>
                                 How can I downgrade to an earlier version of
                                 Dummy Content?
                              </div>
                              <div className={Style.Icon}>
                                 <IoIosArrowDropdownCircle />
                              </div>
                           </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                           <Card.Body>
                              <p>
                                 it look like readable English. Many desktop
                                 publishing packages and web page editors now
                                 use Lorem Ipsum as their default model text,
                                 and a search for 'lorem ipsum' will uncover
                                 many web sites still in their infancy. Various
                                 versions have evolved over the years,All the
                                 Lorem Ipsum generators on the Internet tend to
                                 repeat predefined chunks as necessary, making
                                 this the first true generator on the Internet.
                                 It uses a dictionary of over 200 Latin words,
                                 combined with a handful of model sentence
                                 structures
                              </p>
                           </Card.Body>
                        </Accordion.Collapse>
                     </Card>
                  </Accordion>
                  <Accordion defaultActiveKey="0">
                     <Card>
                        <Card.Header>
                           <Accordion.Toggle
                              as={Button}
                              variant="link"
                              eventKey="0"
                           >
                              <div className={Style.Content}>
                                 Lorem Ipsum is simply dummy text of the
                                 printing and typesetting industry.
                              </div>
                              <div className={Style.Icon}>
                                 <IoIosArrowDropdownCircle />
                              </div>
                           </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                           <Card.Body>
                              <p>
                                 it look like readable English. Many desktop
                                 publishing packages and web page editors now
                                 use Lorem Ipsum as their default model text,
                                 and a search for 'lorem ipsum' will uncover
                                 many web sites still in their infancy. Various
                                 versions have evolved over the years,All the
                                 Lorem Ipsum generators on the Internet tend to
                                 repeat predefined chunks as necessary, making
                                 this the first true generator on the Internet.
                                 It uses a dictionary of over 200 Latin words,
                                 combined with a handful of model sentence
                                 structures
                              </p>
                           </Card.Body>
                        </Accordion.Collapse>
                     </Card>
                  </Accordion>
                  <Accordion defaultActiveKey="0">
                     <Card>
                        <Card.Header>
                           <Accordion.Toggle
                              as={Button}
                              variant="link"
                              eventKey="0"
                           >
                              <div className={Style.Content}>
                                 Lorem Ipsum is simply dummy text of the
                                 printing and typesetting industry.
                              </div>
                              <div className={Style.Icon}>
                                 <IoIosArrowDropdownCircle />
                              </div>
                           </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                           <Card.Body>
                              <p>
                                 it look like readable English. Many desktop
                                 publishing packages and web page editors now
                                 use Lorem Ipsum as their default model text,
                                 and a search for 'lorem ipsum' will uncover
                                 many web sites still in their infancy. Various
                                 versions have evolved over the years,All the
                                 Lorem Ipsum generators on the Internet tend to
                                 repeat predefined chunks as necessary, making
                                 this the first true generator on the Internet.
                                 It uses a dictionary of over 200 Latin words,
                                 combined with a handful of model sentence
                                 structures
                              </p>
                           </Card.Body>
                        </Accordion.Collapse>
                     </Card>
                  </Accordion>
                  <Accordion defaultActiveKey="0">
                     <Card>
                        <Card.Header>
                           <Accordion.Toggle
                              as={Button}
                              variant="link"
                              eventKey="0"
                           >
                              <div className={Style.Content}>
                                 Lorem Ipsum is simply dummy text of the
                                 printing and typesetting industry.
                              </div>
                              <div className={Style.Icon}>
                                 <IoIosArrowDropdownCircle />
                              </div>
                           </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                           <Card.Body>
                              <p>
                                 it look like readable English. Many desktop
                                 publishing packages and web page editors now
                                 use Lorem Ipsum as their default model text,
                                 and a search for 'lorem ipsum' will uncover
                                 many web sites still in their infancy. Various
                                 versions have evolved over the years,All the
                                 Lorem Ipsum generators on the Internet tend to
                                 repeat predefined chunks as necessary, making
                                 this the first true generator on the Internet.
                                 It uses a dictionary of over 200 Latin words,
                                 combined with a handful of model sentence
                                 structures
                              </p>
                           </Card.Body>
                        </Accordion.Collapse>
                     </Card>
                  </Accordion>
                  <Accordion defaultActiveKey="0">
                     <Card>
                        <Card.Header>
                           <Accordion.Toggle
                              as={Button}
                              variant="link"
                              eventKey="0"
                           >
                              <div className={Style.Content}>
                                 Lorem Ipsum is simply dummy text of the
                                 printing and typesetting industry.
                              </div>
                              <div className={Style.Icon}>
                                 <IoIosArrowDropdownCircle />
                              </div>
                           </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                           <Card.Body>
                              <p>
                                 it look like readable English. Many desktop
                                 publishing packages and web page editors now
                                 use Lorem Ipsum as their default model text,
                                 and a search for 'lorem ipsum' will uncover
                                 many web sites still in their infancy. Various
                                 versions have evolved over the years,All the
                                 Lorem Ipsum generators on the Internet tend to
                                 repeat predefined chunks as necessary, making
                                 this the first true generator on the Internet.
                                 It uses a dictionary of over 200 Latin words,
                                 combined with a handful of model sentence
                                 structures
                              </p>
                           </Card.Body>
                        </Accordion.Collapse>
                     </Card>
                  </Accordion>
                  <Accordion defaultActiveKey="0">
                     <Card>
                        <Card.Header>
                           <Accordion.Toggle
                              as={Button}
                              variant="link"
                              eventKey="0"
                           >
                              <div className={Style.Content}>
                                 Lorem Ipsum is simply dummy text of the
                                 printing and typesetting industry.
                              </div>
                              <div className={Style.Icon}>
                                 <IoIosArrowDropdownCircle />
                              </div>
                           </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                           <Card.Body>
                              <p>
                                 it look like readable English. Many desktop
                                 publishing packages and web page editors now
                                 use Lorem Ipsum as their default model text,
                                 and a search for 'lorem ipsum' will uncover
                                 many web sites still in their infancy. Various
                                 versions have evolved over the years,All the
                                 Lorem Ipsum generators on the Internet tend to
                                 repeat predefined chunks as necessary, making
                                 this the first true generator on the Internet.
                                 It uses a dictionary of over 200 Latin words,
                                 combined with a handful of model sentence
                                 structures
                              </p>
                           </Card.Body>
                        </Accordion.Collapse>
                     </Card>
                  </Accordion>
               </div>
            </Container>
         </Layout>
      </>
   );
};

export default Faq;
