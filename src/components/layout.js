/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { Box, Container } from "@chakra-ui/react";
import { useStaticQuery, graphql } from "gatsby";

import Header from "./header";
import "./layout.css";

import Footer from "../Elements/Footer";

const Layout = ({ children }) => {
   const data = useStaticQuery(graphql`
      query SiteTitleQuery {
         site {
            siteMetadata {
               title
            }
         }
      }
   `);

   return (
      <div>
         <Header
            siteTitle={data.site.siteMetadata?.title || `Kerala Lottery`}
         />
         {children}
         <Footer
            siteTitle={data.site.siteMetadata?.title || `Kerala Lottery`}
         />
      </div>
      // <Container maxW="full">

      //   {/* <Box as="main" d="flex" alignItems="space-between" flexDirection="column" w="auto" p="16"> */}

      //     {/* <footer style={{
      //       marginTop: `2rem`
      //     }}>
      //       © {new Date().getFullYear()}, Built with
      //       {` `}
      //       <a href="https://www.gatsbyjs.com">Gatsby</a>
      //     </footer> */}
      //   </Box>
      // </Container>
   );
};

Layout.propTypes = {
   children: PropTypes.node.isRequired,
};

export default Layout;
