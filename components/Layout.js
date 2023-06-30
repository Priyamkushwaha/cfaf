import React from "react";
import { Container } from "semantic-ui-react";
import Head from "next/head";
import Header from "./Header";
const Layout = (props) => {
  return (
    <div style={{
      background: "-webkit-linear-gradient(to right, #99f2c8, #1f4037)",
      background: "linear-gradient(to right, #99f2c8, #1f4037)",
      backgroundSize: "cover",
      backgroundRepeat: "repeat",
      backgroundPosition: "center",
      height: "150vh"
    }}>
      <Container>
        <Head>
          <link
            rel="stylesheet"
            href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"
          ></link>
        </Head>
        <Header />
        {props.children}
      </Container>
    </div>
  );
};
export default Layout;
