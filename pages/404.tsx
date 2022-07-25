import {
  Box,
  Button,
  Container,
  Divider,
  Heading,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
const NotFoundPage = () => {
  return (
    <Container>
      <Heading as="h1">Page not found</Heading>
      <Text>Unfortunately the page you were looking for was not found.</Text>
      <Text>I am sorry for this inconvenience.</Text>
      <Divider my={6} />
      <Box my={6}>
        <Link href="/" passHref>
          <Button colorScheme="telegram">Return to homepage</Button>
        </Link>
      </Box>
    </Container>
  );
};

export default NotFoundPage;
