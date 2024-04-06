import { Box, Container, Heading, Text, Stack, Image, VStack, Flex, Link, Icon, Button } from "@chakra-ui/react";
import { FaTwitter, FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.lg">
      <VStack spacing={8} py={10}>
        <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmYW1vdXMlMjBwZXJzb24lMjBwb3J0cmFpdHxlbnwwfHx8fDE3MTIzODM4MDh8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Famous Person Portrait" mb={4} />
        <Heading as="h1" size="xl">
          Morgan Freeman
        </Heading>
        <Text fontSize="lg" textAlign="center">
          An acclaimed actor whose resonant voice and presence have made him one of the most respected figures in modern cinema.
        </Text>
        <Stack direction="row" spacing={4} align="center" justify="center">
          <Link href="https://twitter.com/morgan_freeman" isExternal>
            <Icon as={FaTwitter} w={6} h={6} />
          </Link>
          <Link href="https://instagram.com/morgan_freeman" isExternal>
            <Icon as={FaInstagram} w={6} h={6} />
          </Link>
          <Link href="https://linkedin.com/in/morganfreeman" isExternal>
            <Icon as={FaLinkedin} w={6} h={6} />
          </Link>
          <Link href="mailto:morgan.freeman@example.com">
            <Icon as={FaEnvelope} w={6} h={6} />
          </Link>
        </Stack>
        <Flex wrap="wrap" spacing={4} justify="center">
          <Button leftIcon={<FaEnvelope />} colorScheme="teal" variant="solid">
            Contact
          </Button>
        </Flex>
      </VStack>
      <Box as="section" py={10}>
        <Heading as="h2" size="lg" textAlign="center" mb={6}>
          Biography
        </Heading>
        <Text fontSize="md">Morgan Freeman was born on June 1, 1937, in Memphis, Tennessee. He began acting at an early age, participating in school plays and later performing on stage during his time in the Air Force. After moving to New York City, he worked as a dancer and actor in theater productions before transitioning to film.</Text>
        <Text fontSize="md" mt={4}>
          Over his illustrious career, Freeman has received multiple award nominations and has won an Academy Award for Best Supporting Actor for his role in "Million Dollar Baby." His other notable works include "The Shawshank Redemption," "Driving Miss Daisy," and "Invictus," where he portrayed Nelson Mandela.
        </Text>
        <Text fontSize="md" mt={4}>
          Aside from his acting career, Morgan Freeman is known for his deep, distinctive voice, which has been used in various narration roles, including the voice of God in "Bruce Almighty" and as a narrator for the documentary "March of the Penguins."
        </Text>
      </Box>
    </Container>
  );
};

export default Index;
