import { Container, Heading, SimpleGrid, Divider } from "@chakra-ui/react";
import { WorkGridItem } from "../components/grid-item";
import Section from "../components/section";

const Work = () => {
  return (
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Work
      </Heading>
      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
            <WorkGridItem>
                
            </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  );
};

export default Work;
