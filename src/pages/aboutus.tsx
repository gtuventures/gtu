"use client";

import { useState } from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Image,
  Avatar,
  VStack,
  Container,
  Icon,
  HStack,
} from "@chakra-ui/react";
import { FaLightbulb, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function Component() {
  const [showVision, setShowVision] = useState(true);

  const toggleView = () => {
    setShowVision(!showVision);
  };

  return (
    <Flex direction="column" minH="100vh" align="center">
      {/* Main Section */}
      <Box as="main" flex="1" px={{ base: 4, md: 12 }}>
        {/* Section 1 */}
        <Box w="full" py={{ base: 8, md: 16, lg: 20 }}>
          <Flex
            direction={{ base: "column", lg: "row" }}
            align="center"
            justify="space-between"
            gap={{ base: 6, lg: 12 }}
          >
            <VStack
              align="flex-start"
              spacing={6}
              textAlign={{ base: "center", lg: "left" }}
              w={{ base: "100%", lg: "50%" }}
            >
              <Heading as="h1" fontSize={{ base: "3xl", md: "5xl" }}>
                GTU Ventures
              </Heading>
              <Text
                maxW="600px"
                color="gray.600"
                fontSize={{ base: "md", md: "lg" }}
              >
                Gujarat Technological University (GTU), established in 2007, has
                consistently been at the forefront of fostering innovation,
                entrepreneurship, and skills development in Gujarat. With a rich
                history of supporting over 750 startups and generating thousands
                of jobs, GTU has carved its niche as a leader in the startup
                ecosystem of the state.
              </Text>
            </VStack>
            <Box w={{ base: "100%", lg: "45%" }}>
              <Image
                src="/gtulandscape.png"
                alt="GTU Ventures"
                borderRadius="2xl"
                boxShadow="lg"
                objectFit="cover"
                w="100%"
                maxH="400px"
              />
            </Box>
          </Flex>
        </Box>

        {/* Vision & Mission Section */}
        <Box w="full" py={{ base: 8, md: 16, lg: 20 }} bg="gray.50">
          <Flex
            direction={{ base: "column", md: "row" }}
            gap={6}
            align="stretch"
            justify="space-between"
          >
            <Box
              flex="1"
              h="300px"
              bg="white"
              borderRadius="md"
              overflow="hidden"
              boxShadow="sm"
            >
              <Image
                src={
                  showVision
                    ? "aboutusimage.avif"
                    : "https://via.placeholder.com/600"
                }
                alt={
                  showVision ? "Incubation Center Interior" : "Mission Image"
                }
                w="100%"
                h="100%"
                objectFit="cover"
              />
            </Box>

            <Flex
              flex="1"
              direction="column"
              justify="center"
              align="center"
              p={6}
              bg="white"
              borderRadius="md"
              boxShadow="sm"
              onClick={toggleView}
              cursor="pointer"
              transition="transform 0.2s"
              _hover={{ transform: "scale(1.03)" }}
            >
              <Icon as={FaLightbulb} w={10} h={10} color="yellow.500" mb={4} />
              <Heading as="h2" size="lg" textAlign="center">
                {showVision ? "Our Vision" : "Our Mission"}
              </Heading>
              <Text color="gray.600" fontSize="md" textAlign="center" mt={4}>
                GTU Ventures envisions becoming the cornerstone of
                entrepreneurial growth and innovation in the region. Our goal is
                to empower a dynamic community of entrepreneurs through
                collaboration and access to critical resources, driving
                significant economic and social impact for national development.
              </Text>
            </Flex>
          </Flex>
        </Box>

        {/* Board of Directors */}
        <Box w="full" py={{ base: 8, md: 16, lg: 20 }}>
          <Container maxW="container.lg">
            <Heading as="h2" size="xl" textAlign="center" mb={8}>
              Board of Directors
            </Heading>
            <Flex wrap="wrap" gap={6} justify="center">
              {boardMembers.map((member) => (
                <Box
                  key={member.name}
                  w={{ base: "100%", sm: "45%", md: "30%" }}
                  borderRadius="lg"
                  overflow="hidden"
                  boxShadow="md"
                  textAlign="center"
                  bg="white"
                  _hover={{ boxShadow: "lg" }}
                >
                  <Avatar
                    size="xl"
                    name={member.name}
                    src={member.image}
                    mx="auto"
                    mt={4}
                  />
                  <VStack spacing={2} mt={4} mb={6}>
                    <Heading as="h3" size="md">
                      {member.name}
                    </Heading>
                    <Text color="gray.500" fontSize="sm">
                      {member.role}
                    </Text>
                  </VStack>
                  <HStack justify="center" spacing={4} pb={4}>
                  
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Icon as={FaLinkedin} w={5} h={5} color="blue.700" />
                      </a>
                    )}
                  </HStack>
                </Box>
              ))}
            </Flex>
          </Container>
        </Box>
        <Box w="full" py={{ base: 12, md: 24, lg: 32 }} bg="gray.50">
          <Container maxW="container.lg" px={{ base: 4, md: 6 }}>
            <Heading as="h2" size="xl" textAlign="center" mb={8}>
              Advisors
            </Heading>
            <Flex
              direction={{ base: "column", md: "row" }}
              wrap="wrap"
              gap={6}
              justify="center"
            >
              {advisors.map((member) => (
                <Box
                  key={member.name}
                  position="relative"
                  width={{ base: "100%", md: "45%", lg: "30%" }}
                  borderRadius="lg"
                  overflow="hidden"
                  boxShadow="md"
                  role="group"
                  textAlign="center"
                >
                  <Flex justify="center" my={6}>
                    <Avatar
                      size="xl"
                      name={member.name}
                      src={member.image}
                      mx="auto"
                    />
                  </Flex>

                  <VStack spacing={2} mt={2} mb={6}>
                    <Heading as="h3" size="md">
                      {member.name}
                    </Heading>
                    <Text color="gray.500">{member.role}</Text>
                  </VStack>

                  <Box
                    position="absolute"
                    top={0}
                    left={0}
                    width="100%"
                    height="100%"
                    bg="blackAlpha.900"
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    opacity={0}
                    _groupHover={{ opacity: 1 }}
                    transition="opacity 0.3s ease-in-out"
                    color="white"
                  >
                    <Heading as="h4" size="md" mb={2}>
                      {member.name}
                    </Heading>
                    <Text mb={4}>{member.role}</Text>

                    <Flex gap={4}>
                      {member.linkedin && (
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Icon as={FaLinkedin} w={6} h={6} cursor="pointer" />
                        </a>
                      )}
                    </Flex>
                  </Box>
                </Box>
              ))}
            </Flex>
          </Container>
        </Box>
      </Box>
    </Flex>
  );
}

// Sample Data
const boardMembers = [
  {
    name: "Dr. Rajul Gajjar",
    role: "Vice Chancellor, GTU Chairperson GISC and AIC-GISC ",
    image: "/teams/rajul_gajjar.png",
    linkedin: "https://in.linkedin.com/in/rajul-k-gajjar-06361124",
  },
  {
    name: "Dr. K. N. Kher",
    role: "Registrar, GTU Director GISC and AIC-GISC",
    image: "/teams/knkher.png",
    // twitter: "https://twitter.com/knkher",
    linkedin: "https://in.linkedin.com/in/kher-kanji-31437742",
  },
  {
    name: "Dr. Pankajray Patel",
    role: "Director, GISC",
    image: "/teams/pankajray_patel.png",
    // twitter: "https://twitter.com/rajulgajjar",
    linkedin: "#",
  },
  {
    name: "Dr. Shailesh Panchal",
    role: "Director, AIC-GISC",
    image: "/teams/shailesh_panchal.jpeg",
    // twitter: "https://twitter.com/shaileshpanchal",
    linkedin: "#",
  },
  {
    name: "Dr. Sanjay Chauhan",
    role: "Director, GISC & AIC-GISC",
    image: "/teams/sanjay_chauhan.jpg",
    // twitter: "https://twitter.com/mtchhabria",
    linkedin: "https://in.linkedin.com/in/dr-sanjay-chauhan-01010b12",
  },
  {
    name: "Dr. M. T. Chhabria",
    role: "Director, AIC-GISC ",
    image: "/teams/chabbariyasir.png",
    // twitter: "https://twitter.com/mtchhabria",
    linkedin: "#",
  },
  {
    name: "Dr. Vaibhav Bhatt",
    role: "Director, AIC-GISC",
    image: "/teams/vaibhav_bhatt.png",
    // twitter: "https://twitter.com/vaibhavbhatt",
    linkedin: "https://in.linkedin.com/in/dr-vaibhav-bhatt-51296243",
  },
];

const advisors = [
  {
    name: "Dr Mihir Shah",
    role: "Advisor GIC, GTU ",
    image: "/teams/mihirsir.jpg",
    // twitter: "https://twitter.com/",
    linkedin: "https://www.linkedin.com/in/mihir-shah-6b2b88330",
  },

  {
    name: "Rahul Bhagchandani",
    role: "Innovation Consultant, GTU",
    image: "/teams/rahulsir.jpg",
    // twitter: "https://twitter.com/knkher",
    linkedin: "https://www.linkedin.com/in/rahulbhagchandani/",
  },
];

