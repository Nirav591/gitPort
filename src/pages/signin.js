import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

import Style from "../assets/Style/Login.module.scss";

import { Container, Row, Col } from "react-bootstrap";

import { Link } from "gatsby";

import { IoMdLogIn } from "react-icons/io";
import { AiFillGoogleCircle } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";

const SigninPage = () => (
   <Layout>
      <SEO title="Login" />
      {/* <h1>Login</h1>
      <a href={`https://salty-castle-20033.herokuapp.com/connect/google`} className="link">
         Google
      </a> */}
      <section className={Style.loginPage}>
         <Container>
            <Row>
               <Col lg={6} className="m-auto">
                  <h3>Login</h3>
                  <div className={Style.themeCard}>
                     <form>
                        <div className="form-group">
                           <label for="email">Email</label>
                           <input
                              type="text"
                              className="form-control"
                              id="email"
                              placeholder="Email"
                              required=""
                           ></input>
                        </div>
                        <div className="form-group">
                           <label for="review">Password</label>
                           <input
                              type="password"
                              class="form-control"
                              id="review"
                              placeholder="Enter your password"
                              required=""
                           />
                        </div>
                        <div className={Style.BottomButton}>
                           <Link
                              type="button"
                              to="/signin"
                              className="btn btn-primary"
                           >
                              <div>Login</div>

                              <div className={Style.Icon}>
                                 <IoMdLogIn />
                              </div>
                           </Link>
                           <Link
                              type="button"
                              to="https://salty-castle-20033.herokuapp.com/connect/google"
                              class="btn btn-primary"
                           >
                              <div>Google</div>

                              <div className={Style.Icon}>
                                 <AiFillGoogleCircle />
                              </div>
                           </Link>
                           <Link
                              type="button"
                              to="https://salty-castle-20033.herokuapp.com/connect/google"
                              class="btn btn-primary"
                           >
                              <div>Facebook</div>

                              <div className={Style.Icon}>
                                 <FaFacebook />
                              </div>
                           </Link>
                        </div>
                     </form>
                  </div>
               </Col>
            </Row>
         </Container>
      </section>
   </Layout>
);

export default SigninPage;
