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
  HStack,
  Container,
  Icon,
} from "@chakra-ui/react";
import { FaLightbulb, FaTwitter, FaLinkedin } from "react-icons/fa";
import { PiWatch } from "react-icons/pi"; // Import PiWatch icon

export default function Component() {
  const [showVision, setShowVision] = useState(true);

  const toggleView = () => {
    setShowVision(!showVision);
  };

  return (
    <Flex direction="column" minH="100vh">
      <Box as="main" flex="1">
        {/* Section 1 */}
        <Box w="full" py={{ base: 12, md: 24, lg: 32 }}>
          <Flex
            direction={{ base: "column", lg: "row" }}
            align="center"
            justify="center"
            px={{ base: 4, md: 6 }}
          >
            <VStack align="center" spacing={4} textAlign="center">
              {" "}
              {/* Align and center text */}
              <Heading as="h1" fontSize={{ base: "3xl", sm: "5xl", xl: "6xl" }}>
                GTU Ventures
              </Heading>
              <Text
                maxW="600px"
                color="gray.600"
                fontSize={{ base: "md", md: "xl" }}
              >
                Empowering entrepreneurs to turn their ideas into thriving
                businesses. Our incubation program provides the resources,
                mentorship, and support startups need to succeed. Empowering
                entrepreneurs to turn their ideas into thriving businesses. Our
                incubation program provides the resources, mentorship, and
                support startups need to succeed.
              </Text>
            </VStack>
            <Box
              display="flex"
              justifyContent="center"
              mt={{ base: 6, lg: 0 }}
              m={4}
            >
              <Image
                src="/aboutus.jpeg"
                width="475px"
                height="475px"
                alt="GTU Ventures Logo"
                borderRadius="xl"
                objectFit="contain"
              />
            </Box>
          </Flex>
        </Box>

        {/* Vision & Mission Section */}
        <Box w="full" h="100vh" py={{ base: 12, md: 24, lg: 32 }} bg="gray.50">
          <Flex direction={{ base: "column", md: "row" }} h="full">
            {/* Vision Section */}
            <Box w={{ base: "full", md: "50%" }} position="relative">
              <Image
                src={
                  showVision ? "/aic-gtu-gisc-1.jpeg" : "/about-aic-gisc.png"
                }
                alt={
                  showVision ? "Incubation Center Interior" : "Mission Image"
                }
                boxSize="100%"
                objectFit="cover"
              />
            </Box>

            {/* Mission Section */}
            <Flex direction="column" w={{ base: "full", md: "50%" }}>
              <Box
                flex="1"
                p={8}
                cursor="pointer"
                transition="background-color 0.3s"
                bg={showVision ? "white" : "gray.100"}
                onClick={toggleView}
              >
                <Flex align="center" mb={4}>
                  <FaLightbulb
                    className="w-8 h-8 text-yellow-500 mr-4"
                    size={30}
                  />
                  <Heading as="h2" size="lg">
                    Our Vision
                  </Heading>
                </Flex>
                <Text color="gray.600">
                  Our Vision is the creation and growth of new ideas through
                  technology and business startups. We nurture the culture of
                  innovative thinking and technology-led entrepreneurship to
                  foster an entrepreneurial culture and contribute to social and
                  national development.
                </Text>
              </Box>

              <Box
                flex="1"
                p={8}
                cursor="pointer"
                transition="background-color 0.3s"
                bg={!showVision ? "black" : "gray.800"}
                color={!showVision ? "white" : "gray.300"}
                onClick={toggleView}
              >
                <Flex align="center" mb={4}>
                  <PiWatch className="w-8 h-8 text-blue-400 mr-4 " size={30} />
                  <Heading as="h2" size="lg">
                    Our Mission
                  </Heading>
                </Flex>
                <Text>
                  To be the leading Incubator Center in the nation promoting
                  entrepreneurship and creating innovative ideas to transform
                  education, projects, and present them into successful business
                  opportunities.
                </Text>
              </Box>
            </Flex>
          </Flex>
        </Box>

        {/* Section 2: Board of Directors */}
        <Box w="full" py={{ base: 12, md: 24, lg: 32 }}>
          <Container maxW="container.lg" px={{ base: 4, md: 6 }}>
            <Heading as="h2" size="xl" textAlign="center" mb={8}>
              Board of Directors
            </Heading>
            <Flex
              direction={{ base: "column", md: "row" }}
              wrap="wrap"
              gap={6}
              justify="center"
            >
              {boardMembers.map((member) => (
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

                  {/* Hidden overlay with social media icons on hover */}
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
                      {member.twitter && (
                        <a
                          href={member.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Icon as={FaTwitter} w={6} h={6} cursor="pointer" />
                        </a>
                      )}
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

        {/* Section 3: Team Members */}
        <Box w="full" py={{ base: 12, md: 24, lg: 32 }} bg="gray.50">
          <Container maxW="container.lg" px={{ base: 4, md: 6 }}>
            <Heading as="h2" size="xl" textAlign="center" mb={8}>
              Team Members
            </Heading>
            <Flex
              direction={{ base: "column", md: "row" }}
              wrap="wrap"
              gap={6}
              justify="center"
            >
              {teamMembers.map((member) => (
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
                      {member.twitter && (
                        <a
                          href={member.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Icon as={FaTwitter} w={6} h={6} cursor="pointer" />
                        </a>
                      )}
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
    role: "Chairperson and Vice Chancellor, GTU",
    image: "/teams/rajul_gajjar.png",
    twitter: "https://twitter.com/rajulgajjar",
    linkedin: "https://linkedin.com/in/rajulgajjar",
  },
  {
    name: "Dr. K. N. Kher",
    role: "Director AIC-GISC & GISC GTU",
    image: "/teams/knkher.png",
    twitter: "https://twitter.com/knkher",
    linkedin: "https://linkedin.com/in/knkher",
  },
  {
    name: "Dr. Pankajray Patel",
    role: "Director GISC, GTU",
    image: "/teams/pankajray_patel.png",
    twitter: "https://twitter.com/rajulgajjar",
    linkedin: "https://linkedin.com/in/rajulgajjar",
  },
  {
    name: "Prof. (Dr.) Shailesh Panchal",
    role: "Director AIC GISC",
    image: "/teams/shailesh_panchal.jpeg",
    twitter: "https://twitter.com/shaileshpanchal",
    linkedin: "https://linkedin.com/in/shaileshpanchal",
  },
  {
    name: "Prof. (Dr.) Sanjay Chauhan",
    role: "Director AIC GISC",
    image: "/teams/sanjay_chauhan.jpg",
    twitter: "https://twitter.com/mtchhabria",
    linkedin: "https://linkedin.com/in/mtchhabria",
  },
  {
    name: "Prof. (Dr.) M. T. Chhabria",
    role: "Director AIC GISC",
    image: "/teams/chabbariyasir.png",
    twitter: "https://twitter.com/mtchhabria",
    linkedin: "https://linkedin.com/in/mtchhabria",
  },
  {
    name: "Prof. (Dr.) Vaibhav Bhatt",
    role: "Director AIC GISC",
    image: "/teams/vaibhav_bhatt.png",
    twitter: "https://twitter.com/vaibhavbhatt",
    linkedin: "https://linkedin.com/in/vaibhavbhatt",
  },
];

const teamMembers = [
  {
    name: "Dr Tushar Panchal",
    role: "Group CEO, GIC",
    image: "/teams/tushar_panchal.jpg",
    twitter: "https://twitter.com/tusharpanchal",
    linkedin: "https://linkedin.com/in/tusharpanchal",
  },
  {
    name: "Kamlendra Singh",
    role: "Incubation Manager",
    image: "/teams/kamlendra_singh.png",
    twitter: "https://twitter.com/kamlendrasingh",
    linkedin: "https://linkedin.com/in/kamlendrasingh",
  },
  {
    name: "Nidhi Joshi",
    role: "Executive Account & Admin",
    image: "/teams/nidhi_joshi.png",
    twitter: "https://twitter.com/nidhijoshi",
    linkedin: "https://linkedin.com/in/nidhijoshi",
  },
  {
    name: "Chirag Pandey",
    role: "Project Assistant",
    image: "/teams/chirag_pandey.png",
    twitter: "https://twitter.com/chiragpandey",
    linkedin: "https://linkedin.com/in/chiragpandey",
  },
  {
    name: "Mr. Mahavirsingh Makwana",
    role: "Incubation Manager",
    image: "/teams/mahavirsinh_makwana.jpg",
    twitter: "https://twitter.com/chiragpandey",
    linkedin: "https://linkedin.com/in/chiragpandey",
  },
  {
    name: "Ms. Akanksha Gupta",
    role: "OSD Incubation & Administrator",
    image: "/teams/akansha_gupta.jpg",
    twitter: "https://twitter.com/chiragpandey",
    linkedin: "https://linkedin.com/in/chiragpandey",
  },
  {
    name: "Mr. Hemik D Mehta",
    role: "Regional Innovation & Start-up CoOrdinator",
    image: "/teams/hemik_mehta.jpg",
    twitter: "https://twitter.com/chiragpandey",
    linkedin: "https://linkedin.com/in/chiragpandey",
  },
  {
    name: "Ms. Manali Patel",
    role: "Incubation Associate",
    image: "/teams/Manali_patel.jpg",
    twitter: "https://twitter.com/chiragpandey",
    linkedin: "https://linkedin.com/in/chiragpandey",
  },
  {
    name: "Mr. Kalpesh Maiyad",
    role: "Incubation Associate",
    image: "/teams/kalpesh_maiyad.jpg",
    twitter: "https://twitter.com/chiragpandey",
    linkedin: "https://linkedin.com/in/chiragpandey",
  },
  {
    name: "Ms. Nidhi Chaudhari",
    role: "Accountant",
    image: "/teams/nidhi_chaudhari.png",
    twitter: "https://twitter.com/chiragpandey",
    linkedin: "https://linkedin.com/in/chiragpandey",
  },
  {
    name: "Ms. Pina Kori",
    role: "Accountant",
    image: "/teams/pina_kori.jpg",
    twitter: "https://twitter.com/chiragpandey",
    linkedin: "https://linkedin.com/in/chiragpandey",
  },
  {
    name: "Mr. Vishal Rathod ",
    role: "Admin(Incubation)",
    image: "/teams/vishal_rathod.jpg",
    twitter: "https://twitter.com/chiragpandey",
    linkedin: "https://linkedin.com/in/chiragpandey",
  },
  {
    name: "Mr. Neelesh Sharma",
    role: "Assistant Professor, DIC",
    image: "/teams/neelesh_sharma.jpg",
    twitter: "https://twitter.com/chiragpandey",
    linkedin: "https://linkedin.com/in/chiragpandey",
  },
  {
    name: "Mr Raj Hakani",
    role: "Assistant Professor",
    image: "/teams/raj_hakani.jpg",
    twitter: "https://twitter.com/chiragpandey",
    linkedin: "https://linkedin.com/in/chiragpandey",
  },
  {
    name: "Mr. Rakesh Nayi",
    role: "Office Assistant",
    image: "/teams/rakesh_nayi.jpg",
    twitter: "https://twitter.com/chiragpandey",
    linkedin: "https://linkedin.com/in/chiragpandey",
  },
  {
    name: "Ms. Dhara Dabhi",
    role: "Office Assistant",
    image: "/teams/dhara_dabhi.jpg",
    twitter: "https://twitter.com/chiragpandey",
    linkedin: "https://linkedin.com/in/chiragpandey",
  },
  {
    name: "Mr. Siddharaj Solanki",
    role: "Office Assistant",
    image: "/teams/siddharaj_solanki.jpg",
    twitter: "https://twitter.com/chiragpandey",
    linkedin: "https://linkedin.com/in/chiragpandey",
  },
];