import React from "react";
import Layout from "../components/layout";

import { Container, Row, Col } from "react-bootstrap";
import { Link } from "gatsby";

import Style from "../assets/Style/About.module.scss";

const About = () => {
   return (
      <>
         <Layout>
            <div className={Style.breadcrumb}>
               <Container>
                  <Row className="align-items-center">
                     <Col md={6}>
                        <div className={Style.PageTitle}>
                           <h2>ABOUT</h2>
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
                                 About
                              </li>
                           </ol>
                        </nav>
                     </Col>
                  </Row>
               </Container>
            </div>
            <Container>
               <section className={Style.AboutSection}>
                  <div className={Style.BannerSection}>
                     <img
                        src={require("../assets/Images/About/about.jpg")}
                        className="img-fluid"
                     />
                  </div>
                  <div className={Style.Content}>
                     <h4>
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium
                     </h4>
                     <p>
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium,
                     </p>
                     <p>
                        On the other hand, we denounce with righteous
                        indignation and dislike men who are so beguiled and
                        demoralized by the charms of pleasure of the moment, so
                        blinded by desire, that they cannot foresee the pain and
                        trouble that are bound to ensue; and equal blame belongs
                        to those who fail in their duty through weakness of
                        will, which is the same as saying through shrinking from
                        toil and pain. These cases are perfectly simple and easy
                        to distinguish. In a free hour, when our power of choice
                        is untrammelled and when nothing prevents our being able
                        to do what we like best, every pleasure is to be
                        welcomed and every pain avoided. But in certain
                        circumstances and owing to the claims of duty or the
                        obligations of business it will frequently occur that
                        pleasures have to be repudiated and annoyances accepted.
                        The wise man therefore always holds in these matters to
                        this principle of selection: he rejects pleasures to
                        secure other greater pleasures, or else he endures pains
                        to avoid worse pains.
                     </p>
                  </div>
               </section>
            </Container>
         </Layout>
      </>
   );
};

export default About;
