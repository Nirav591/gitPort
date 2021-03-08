import React from "react";

// bootstrap
import { Container, Row, Col } from "react-bootstrap";

// Slider
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Style
import Style from "../../assets/Style/HomeSlider.module.scss";

// SliderImg
import Slider1 from "../../assets/Images/HomeSlider/Slide1.jpg";
import Slider2 from "../../assets/Images/HomeSlider/Slide2.jpg";
import Slider3 from "../../assets/Images/HomeSlider/Slide3.jpg";
import { Link, graphql } from "gatsby";

import Countdown from "react-countdown";
import { countdownRenderer } from "../../utils/products";

import Logo from "../Logo";

const HomeSlider = () => {
   let settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
   };
   return (
      <>
         <div className={Style.SliderHome}>
            <Slider {...settings}>
               <div>
                  <div className={Style.bgSliderImage} style={{ backgroundImage: `url(${Slider1})` }}>
                     <div className={Style.SliderContent}>
                        <Container>
                           <div className={Style.MainCenter}>
                              <div className={Style.BannerJackpot}>
                                 <div className={Style.BannerJackpotBox}>
                                    <Logo />
                                    <div className={Style.bgJackpot}>
                                       <small>$</small>
                                       850
                                       <small>Million</small>
                                       <br />
                                       <span>
                                          <em>MEGAMILLIONS</em> USA
                                       </span>
                                    </div>
                                 </div>
                                 <div className={Style.CountdownBanner}>
                                    <ul>
                                       <li>
                                          <p>
                                             <span>0</span>
                                             <span>2</span>
                                             <br />
                                             <em>days</em>
                                          </p>
                                       </li>
                                       <li>
                                          <p>
                                             <span>2</span>
                                             <span>2</span>
                                             <br />
                                             <em>Hours</em>
                                          </p>
                                       </li>
                                       <li>
                                          <p>
                                             <span>4</span>
                                             <span>7</span>
                                             <br />
                                             <em>Mins</em>
                                          </p>
                                       </li>
                                       <li>
                                          <p>
                                             <span>5</span>
                                             <span>6</span>
                                             <br />
                                             <em>Secs</em>
                                          </p>
                                       </li>
                                    </ul>
                                    <Link to="/" className={Style.CustomBtn}>
                                    Start Playing Now
                                    </Link>
                                 </div>
                              </div>
                           </div>
                        </Container>
                     </div>
                  </div>
               </div>
               <div>
                  <div className={Style.bgSliderImage} style={{ backgroundImage: `url(${Slider2})` }}>
                     <div className={Style.SliderContent}>
                        <Container>
                           <div className={Style.MainCenter}>
                              <div className={Style.BannerJackpot}>
                                 <div className={Style.BannerJackpotBox}>
                                    <Logo />
                                    <div className={Style.bgJackpot}>
                                       <small>$</small>
                                       850
                                       <small>Million</small>
                                       <br />
                                       <span>
                                          <em>MEGAMILLIONS</em> USA
                                       </span>
                                    </div>
                                 </div>
                                 <div className={Style.CountdownBanner}>
                                    <ul>
                                       <li>
                                          <p>
                                             <span>0</span>
                                             <span>2</span>
                                             <br />
                                             <em>days</em>
                                          </p>
                                       </li>
                                       <li>
                                          <p>
                                             <span>2</span>
                                             <span>2</span>
                                             <br />
                                             <em>Hours</em>
                                          </p>
                                       </li>
                                       <li>
                                          <p>
                                             <span>4</span>
                                             <span>7</span>
                                             <br />
                                             <em>Mins</em>
                                          </p>
                                       </li>
                                       <li>
                                          <p>
                                             <span>5</span>
                                             <span>6</span>
                                             <br />
                                             <em>Secs</em>
                                          </p>
                                       </li>
                                    </ul>
                                    <Link to="/" className={Style.CustomBtn}>
                                    Start Playing Now
                                    </Link>
                                 </div>
                              </div>
                           </div>
                        </Container>
                     </div>
                  </div>
               </div>
               <div>
                  <div className={Style.bgSliderImage} style={{ backgroundImage: `url(${Slider3})` }}>
                     <div className={Style.SliderContent}>
                        <Container>
                           <div className={Style.MainCenter}>
                              <div className={Style.BannerJackpot}>
                                 <div className={Style.BannerJackpotBox}>
                                    <Logo />
                                    <div className={Style.bgJackpot}>
                                       <small>$</small>
                                       850
                                       <small>Million</small>
                                       <br />
                                       <span>
                                          <em>MEGAMILLIONS</em> USA
                                       </span>
                                    </div>
                                 </div>
                                 <div className={Style.CountdownBanner}>
                                    <ul>
                                       <li>
                                          <p>
                                             <span>0</span>
                                             <span>2</span>
                                             <br />
                                             <em>days</em>
                                          </p>
                                       </li>
                                       <li>
                                          <p>
                                             <span>2</span>
                                             <span>2</span>
                                             <br />
                                             <em>Hours</em>
                                          </p>
                                       </li>
                                       <li>
                                          <p>
                                             <span>4</span>
                                             <span>7</span>
                                             <br />
                                             <em>Mins</em>
                                          </p>
                                       </li>
                                       <li>
                                          <p>
                                             <span>5</span>
                                             <span>6</span>
                                             <br />
                                             <em>Secs</em>
                                          </p>
                                       </li>
                                    </ul>
                                    <Link to="/" className={Style.CustomBtn}>
                                    Start Playing Now
                                    </Link>
                                 </div>
                              </div>
                           </div>
                        </Container>
                     </div>
                  </div>
               </div>
            </Slider>
         </div>
      </>
   );
};

export default HomeSlider;
