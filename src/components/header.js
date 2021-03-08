import { Link } from "gatsby";
import PropTypes from "prop-types";
import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { UserContext } from "../context/UserContext";
import { Container, Row, Col, Button } from "react-bootstrap";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { GrFormClose } from "react-icons/gr";
import { GoThreeBars } from "react-icons/go";

import LogoImg from "../Elements/Logo";

import Style from "../assets/Style/Header.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = ({ siteTitle }) => {
   const { cart } = useContext(CartContext);
   const { authInfo, logout } = useContext(UserContext);
   const [active, setActive] = React.useState(false);
   const optionRemove = () => {
      document
         .getElementsByTagName("html")[0]
         .removeAttribute("class", `${Style.Noscroll}`);
      setActive(!active);
   };
   const optionAdd = () => {
      document
         .getElementsByTagName("html")[0]
         .setAttribute("class", `${Style.Noscroll}`);
      setActive(!active);
   };
   return (
      // <Box as="nav" h="60px" px="4" d="flex" alignItems="center" shadow="sm">

      //   <Box as="h1" d="flex" flex="10" style={{ margin: 0 }}>
      //     <Link
      //       to="/"
      //       style={{
      //         color: `brand.700`,
      //         fontWeight: `bold`,
      //       }}
      //     >
      //       {siteTitle}
      //     </Link>
      //   </Box>
      //   <Box as="ul" flex="4" color="gray.500" d="flex" alignItems="center" listStyleType="none" ml="auto">
      //     <Box as="li" mr="8">
      //       {authInfo && (
      //         <span>Welcome {authInfo.user.email}</span>
      //       )}

      //       {!authInfo && (
      //         <Link
      //           to="/signin"
      //         >
      //           Signin
      //         </Link>
      //       )}

      //     </Box>
      //   </Box>
      //   <Box d="flex" flex="1" alignItems="center">
      //     {cart && cart.length > 0 &&
      //       <Link
      //         to="/cart"
      //         style={{
      //           fontWeight: `bold`,
      //         }}
      //       >

      //         {cart.length}
      //         <Icon color="red" as={FaShoppingCart} />
      //       </Link>
      //     }
      //   </Box >
      // </Box >
      <>
         {/* <header className={Style.topHeader}>
            <div className={Style.headerTopArea}>
               <Container>
                  <Row>
                     <Col lg={12}>
                        <div className={Style.headerTopareaInner}>
                           <div className={Style.rightArea}>
                              <Link to="/" className={Style.logo}>
                                 {siteTitle}
                              </Link>
                           </div>
                           <div className={Style.LeftArea}>
                              <div className={Style.logRegArea}>
                                 {authInfo && (
                                    <span>Welcome {authInfo.user.email}</span>
                                 )}

                                 {!authInfo && (
                                    <Link
                                       to="/signin"
                                       className={`${"btn"} ${Style.button}`}
                                    >
                                       Signin
                                    </Link>
                                 )}
                              </div>
                              <div className={Style.cartArea}>
                                 {cart && cart.length > 0 && (
                                    <Link
                                       to="/cart"
                                       type="button"
                                       className={Style.CartButton}
                                    >
                                       <div className={Style.Amount}>
                                          <div className={Style.Icon}>
                                             <HiOutlineShoppingCart />
                                          </div>
                                          <div className={Style.checkOut}>
                                             <h4>{cart.length}</h4>
                                          </div>
                                       </div>
                                    </Link>
                                 )}
                              </div>
                           </div>
                        </div>
                     </Col>
                  </Row>
               </Container>
            </div>
         </header> */}
         <header>
            <Container>
               <div className={Style.menuContainer}>
                  <div className={Style.logo}>
                     <div className={Style.rightArea}>
                        <Link to="/" className={Style.logo}>
                           <LogoImg />
                        </Link>
                     </div>
                  </div>

                  <nav className={active ? `${Style.active}` : `${Style.nav}`}>
                     <ul>
                        <li>
                           <Link to="/About" onClick={optionRemove}>
                              About
                           </Link>
                        </li>
                        <li>
                           <Link to="/Contact" onClick={optionRemove}>
                              Contact US
                           </Link>
                        </li>
                        <li>
                           <Link to="/Faq" onClick={optionRemove}>
                              FAQ
                           </Link>
                        </li>
                        <li>
                           {authInfo && (
                              <>
                                 <span>Welcome {authInfo.user.email}</span>
                                 <Link  onClick={logout} className={`${"btn"} ${Style.button}`}>
                                    Logout
                                 </Link>
                              </>
                           )}

                           {!authInfo && (
                              <Link
                                 to="/signin"
                                 className={`${"btn"} ${Style.button}`}
                              >
                                 Signin
                              </Link>
                           )}
                        </li>
                     </ul>
                     <div className={Style.menuToggle}>
                        <div className={Style.closeIcon} onClick={optionRemove}>
                           <GrFormClose />
                        </div>
                     </div>
                  </nav>
                  <div className={Style.LeftArea}>
                     <div className={Style.logRegArea}></div>
                     <div className={Style.cartArea}>
                        {cart && cart.length > 0 && (
                           <Link
                              to="/cart"
                              type="button"
                              className={Style.CartButton}
                           >
                              <div className={Style.Amount}>
                                 <div className={Style.Icon}>
                                    <HiOutlineShoppingCart />
                                 </div>
                                 <div className={Style.checkOut}>
                                    <h4>{cart.length}</h4>
                                 </div>
                              </div>
                           </Link>
                        )}
                     </div>
                  </div>
                  <div
                     className={Style.menuToggle}
                     onClick={() => {
                        setActive(!active);
                     }}
                  >
                     <div className={Style.menuIcon} onClick={optionAdd}>
                        <GoThreeBars />
                     </div>
                  </div>
               </div>
            </Container>
         </header>
      </>
   );
};

Header.propTypes = {
   siteTitle: PropTypes.string,
};

Header.defaultProps = {
   siteTitle: ``,
};

export default Header;
