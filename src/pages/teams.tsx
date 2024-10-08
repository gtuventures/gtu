import {
  Box,
  Flex,
  Heading,
  Text,
  VStack,
  Avatar,
  Container,
  Icon,
} from "@chakra-ui/react";
import { FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Component() {
  return (
    <Box>
      {/* First Section: Team Introduction */}
      <Box w="full" py={{ base: 12, md: 24, lg: 32 }} bg="purple.700">
        <Container px={{ base: 4, md: 6 }} centerContent>
          <VStack spacing={4} textAlign="center" color="white">
            <Heading
              as="h1"
              size="xl"
              fontWeight="bold"
              lineHeight="tight"
              mb={2}
            >
              Meet the GTU Ventures Team
            </Heading>
            <Text fontSize={{ base: "md", md: "xl" }} maxW="700px">
              Our experienced team of entrepreneurs, investors, and industry
              experts are dedicated to helping startups succeed.
            </Text>
          </VStack>
        </Container>
      </Box>

      {/* Second Section: Board of Directors with Hover Effect */}
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
            {boardMembers.map((member) =>
              member ? (
                <Box
                  key={member.name}
                  position="relative"
                  width={{ base: "100%", md: "45%", lg: "30%" }}
                  borderRadius="lg"
                  overflow="hidden"
                  boxShadow="md"
                  role="group"
                  textAlign="center" // Center the text as well
                >
                  {/* Centering the Avatar */}
                  <Flex justify="center" my={6}>
                    <Avatar
                      size="xl"
                      name={member.name}
                      src={member.image}
                      mx="auto" // Center horizontally
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

                    {/* Social Media Icons with Links */}
                    <Flex gap={4}>
                      <a href={member.twitter} target="_blank" rel="noopener noreferrer">
                        <Icon as={FaTwitter} w={6} h={6} cursor="pointer" />
                      </a>
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                        <Icon as={FaLinkedin} w={6} h={6} cursor="pointer" />
                      </a>
                    </Flex>
                  </Box>
                </Box>
              ) : null
            )}
          </Flex>
        </Container>
      </Box>

      {/* New Section: Team Members with Hover Effect */}
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
            {teamMembers.map((member) =>
              member ? (
                <Box
                  key={member.name}
                  position="relative"
                  width={{ base: "100%", md: "45%", lg: "30%" }}
                  borderRadius="lg"
                  overflow="hidden"
                  boxShadow="md"
                  role="group"
                  textAlign="center" // Center the text as well
                >
                  {/* Centering the Avatar */}
                  <Flex justify="center" my={6}>
                    <Avatar
                      size="xl"
                      name={member.name}
                      src={member.image}
                      mx="auto" // Center horizontally
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

                    {/* Social Media Icons with Links */}
                    <Flex gap={4}>
                      <a href={member.twitter} target="_blank" rel="noopener noreferrer">
                        <Icon as={FaTwitter} w={6} h={6} cursor="pointer" />
                      </a>
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                        <Icon as={FaLinkedin} w={6} h={6} cursor="pointer" />
                      </a>
                    </Flex>
                  </Box>
                </Box>
              ) : null
            )}
          </Flex>
        </Container>
      </Box>
    </Box>
  );
}

// Data for board members
// Data for board members
const boardMembers = [
  {
    name: "Dr. Rajul Gajjar",
    role: "Chairman and Vice Chancellor,GTU",
    image: "/teams/rajul_gajjar.png",
  },

  {
    name: "Dr Pankajray Patel",
    role: " I/C Vice Chancellor,GTU",
    image: "/teams/pankajray_patel.png",
    twitter: "https://twitter.com/rajulgajjar",
    linkedin: "https://linkedin.com/in/rajulgajjar",
  },
  {
    name: "Dr. K. N. Kher",
    role: "Registrar, GTU",
    image: "/teams/knkher.jpg",
    twitter: "https://twitter.com/knkher",
    linkedin: "https://linkedin.com/in/knkher",
  },


  //Prof. (Dr.) Shailesh Panchal, Director, Graduate School of Engg. & Tech., GTU
  {
    name: "Prof. (Dr.) Shailesh Panchal",
    role: "Director, Graduate School of Engg. & Tech., GTU",
    image: "/teams/shailesh_panchal.jpeg",
    twitter: "https://twitter.com/shaileshpanchal",
    linkedin: "https://linkedin.com/in/shaileshpanchal",
  },

  // Prof. (Dr.) Sanjay Chauhan, Director, Graduate School of Pharmacy, GTU
  {
    name: "Prof. (Dr.) Sanjay Chauhan",
    role: "Director, Graduate School of Pharmacy, GTU",
    image: "/teams/sanjay_chauhan.jpg",
    twitter: "https://twitter.com/mtchhabria",
    linkedin: "https://linkedin.com/in/mtchhabria",
  },
  //4. Prof. (Dr.) M. T. Chhabria, Principal, L. M. College of Pharmacy, Ahmedabad
  {
    name:"Prof. (Dr.) M. T. Chhabria",
    role:"Principal, L. M. College of Pharmacy, Ahmedabad",
    image:"/teams/mt_chhabria.jpg",
    twitter:"https://twitter.com/mtchhabria",
    linkedin:"https://linkedin.com/in/mtchhabria",
  },
  // 5. Prof. (Dr.) Vaibhav Bhatt, Director, School of Applied Sciences & Technology, GTU
  {
    name: "Prof. (Dr.) Vaibhav Bhatt",
    role: "Director, School of Applied Sciences & Technology, GTU",
    image: "/teams/vaibhav_bhatt.png",
    twitter: "https://twitter.com/vaibhavbhatt",
    linkedin: "https://linkedin.com/in/vaibhavbhatt",
  },
];

// Data for team members
const teamMembers = [
  {
    name:"Dr Tushar Panchal",
    role:"Group CEO, GIC",
    image:"/teams/tushar_panchal.jpg",
    twitter:"https://twitter.com/tusharpanchal",
    linkedin:"https://linkedin.com/in/tusharpanchal",
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
  }
];
