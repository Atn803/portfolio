import { Box, Container } from "@chakra-ui/react";
import Head from "next/head";
import { ReactNode } from "react";
import Navbar from "../navbar";

interface ILayout {
    children: React.ReactNode;
    router: any
}

const Layout = ({ children, router }:ILayout) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Tuan Nguyen - Homepage</title>
      </Head>

      <Navbar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        {children}
      </Container>
    </Box>
  );
};

export default Layout;
