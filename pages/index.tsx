import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Link,
  Box,
  Button,
  Container,
  Heading,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { BioSection, BioYear } from "../components/bio";
import Paragraph from "../components/paragraph";
import Section from "../components/section";

const Home = () => {
  return (
    <div>
      <Container>
        <Box
          borderRadius="lg"
          bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
          p={3}
          mb={6}
          align="center"
        >
          Hello, I'm a Frontend developer based in Hanoi
        </Box>
        <Box display={{ md: "flex" }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Tuan Nguyen
            </Heading>
            Frontend Developer
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align="center"
          >
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="100px"
              display="inline-block"
              borderRadius="full"
              src="/images/tuan-nguyen.jpg"
              alt="Profile Image"
            ></Image>
          </Box>
        </Box>
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Work
          </Heading>
          <Paragraph>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever since the 1500s, when
            an unknown printer took a galley of type and scrambled it to make a
            type specimen book. It has survived not only five centuries, but
            also the leap into electronic typesetting, remaining essentially
            unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently
            with desktop publishing software like Aldus PageMaker including
            versions of Lorem Ipsum.
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/about">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="telegram">
                About this site
              </Button>
            </NextLink>
          </Box>
        </Section>
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>1997</BioYear>
            Born in Hanoi, Vietnam
          </BioSection>
          <BioSection>
            <BioYear>2020</BioYear>
            Graduated from University of Transports and Communications with
            Engineer's degree in Information and communication technology
          </BioSection>
          <BioSection>
            <BioYear>2020</BioYear>
            Started as Intern ASP.NET MVC Developer at {""}
            <Link href="https://devmaster.edu.vn/">Devsoft</Link>
          </BioSection>
          <BioSection>
            <BioYear>2021</BioYear>
            Worked as ASP.NET MVC and .NET Core Developer at {""}
            <Link href="https://www.triducsolution.com/Index.html">
              Tri Duc Solution
            </Link>
          </BioSection>
          <BioSection>
            <BioYear>2022</BioYear>
            Now working as Frontend Developer at {""}
            <Link href="https://www.smartosc.com/">Smartosc</Link>
          </BioSection>
        </Section>
      </Container>
    </div>
  );
};

export default Home;
