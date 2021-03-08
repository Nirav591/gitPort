import React from "react";

import { graphql, Link } from "gatsby";

import Layout from "../components/layout";

import SEO from "../components/seo";

import { formatPrice } from "../utils/format";
import { fromProductSlugToUrl } from "../utils/products";

// Elements
import HomeSlider from "../Elements/HomeSlider";


import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

import Style from "../assets/Style/Home.module.scss";

const IndexPage = ({ data }) => {
   console.log(data);
   return (
      <Layout>
         <SEO title="Home" />
         <HomeSlider />
         <div className={Style.HomeProductMain}>
            <Container>
               <div className={`${Style.sectionTitle} ${"text-center"}`}>
                  <h2>DAILY DEALS!</h2>
               </div>
               <div className={Style.HomeProductRow}>
                  {data.allStrapiLottery.nodes.map((product) => (
                     <div className={Style.HomeProduct} key={product.id}>
                        <Link
                           style={{
                              color: "#000000",
                              textDecoration: "none",
                           }}
                           to={fromProductSlugToUrl(product.slug)}
                        >
                           <div className={Style.productImg}>
                              <img
                                 srcSet={
                                    product.image.childImageSharp.fixed.srcSet
                                 }
                                 src={product.image.childImageSharp.fixed.src}
                                 className={`${"img-fluid"}`}
                              />
                           </div>
                           <h3>{product.name}</h3>

                           <p> {formatPrice(product.cost)}</p>
                        </Link>
                     </div>
                  ))}
               </div>
            </Container>
         </div>
      </Layout>
   );
};

export default IndexPage;

export const pageQuery = graphql`
   query MyQuery {
      allStrapiLottery {
         nodes {
            id
            description
            name
            cost
            slug
            image {
               childImageSharp {
                  fixed(width: 400) {
                     ...GatsbyImageSharpFixed
                  }
               }
            }
         }
      }
   }
`;
