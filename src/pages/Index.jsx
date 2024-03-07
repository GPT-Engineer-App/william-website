import React from "react";
import { Box, Container, Flex, Heading, Text, Stack, Image, Button, Icon, Link, VStack, HStack, Spacer } from "@chakra-ui/react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Flex direction={{ base: "column", md: "row" }} align="center" justify="center" py={10}>
        <Box flexShrink={0} mr={{ base: 0, md: 10 }} mb={{ base: 5, md: 0 }} textAlign={{ base: "center", md: "left" }}>
          <Image borderRadius="full" boxSize="200px" src="https://images.unsplash.com/photo-1585077088364-69f8eeb14a3d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxXaWxsaWFtJTIwSGFycmlzb24lMjBwb3J0cmFpdHxlbnwwfHx8fDE3MDk4MDI3OTl8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="William Harrison" mb={4} />
        </Box>
        <Box flexGrow={1}>
          <Heading as="h1" size="2xl" mb={2}>
            William Harrison
          </Heading>
          <Text fontSize="xl" mb={4}>
            Full Stack Developer | React Expert | Open Source Contributor
          </Text>
          <HStack spacing={4} mb={4}>
            <Link href="https://www.linkedin.com/in/william-harrison" isExternal>
              <Button leftIcon={<FaLinkedin />} colorScheme="blue">
                LinkedIn
              </Button>
            </Link>
            <Link href="https://github.com/william-harrison" isExternal>
              <Button leftIcon={<FaGithub />} colorScheme="gray">
                GitHub
              </Button>
            </Link>
            <Link href="mailto:william.harrison@example.com">
              <Button leftIcon={<FaEnvelope />} colorScheme="red">
                Email
              </Button>
            </Link>
          </HStack>
          <Text color="gray.600">Passionate about building interactive applications and engaging user experiences. With over a decade of experience in web development, I have honed my skills in React, JavaScript and full-stack technologies to deliver high-quality software solutions.</Text>
        </Box>
      </Flex>

      <VStack spacing={8} py={10}>
        <Heading as="h2" size="xl">
          About Me
        </Heading>
        <Text fontSize="md" color="gray.600">
          As a driven and versatile developer, I specialize in creating scalable, maintainable, and performant web applications. My journey in the tech industry has allowed me to work with a variety of businesses, from startups to large enterprises. I take pride in writing clean and efficient code, and I am always eager to learn new technologies and methodologies. When I'm not coding, you can find me contributing to open-source projects or sharing my knowledge through blogging and speaking engagements.
        </Text>
      </VStack>

      <VStack spacing={8} py={10}>
        <Heading as="h2" size="xl">
          Projects
        </Heading>
        <Stack direction={{ base: "column", md: "row" }} spacing={8} align="center">
          <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
            <Heading as="h3" size="md">
              Project Name 1
            </Heading>
            <Text mt={4}>A brief description of the project, what it accomplishes, and the technologies used.</Text>
          </Box>
          <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
            <Heading as="h3" size="md">
              Project Name 2
            </Heading>
            <Text mt={4}>An overview of another project, its purpose, and the stack involved in building it.</Text>
          </Box>
        </Stack>
      </VStack>
    </Container>
  );
};

export default Index;
