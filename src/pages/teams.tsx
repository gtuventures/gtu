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
import { NextSeo } from "next-seo";
import Head from "next/head";

export default function Component() {
  return (
    <Box>
      <Head>
        <NextSeo
          title="GTU Ventures Teams"
          description="GTU Ventures Team Details"
          openGraph={{
            url: "https://gtuventures.com",
            title: "GTU Ventures",
            description: "GTU Ventures Team Details",
            images: [
              {
                url: "https://gtu-e09.pages.dev/hihb.png",
                alt: "GTU Ventures",
              },
            ],
            site_name: "gtuventures.com",
            type: "website",
          }}
        />
      </Head>
      {/* First Section: Team Introduction */}
      <Box w="full" py={{ base: 12, md: 20, lg: 20 }} bg="purple.700">
        <Container px={{ base: 4, md: 6 }} centerContent>
          <VStack spacing={4} textAlign="center" color="white">
            <Heading
              as="h1"
              size="xl"
              fontWeight="bold"
              lineHeight="tight"
              mb={2}
            >
              Meet the team GTU Ventures
            </Heading>
          </VStack>
        </Container>
      </Box>

      {/* New Section: Team Members with Hover Effect */}
      <Box w="full" py={{ base: 12, md: 24, lg: 32 }} bg="gray.50">
        <Container maxW="container.lg" px={{ base: 4, md: 6 }}>
          <Flex
            direction={{ base: "column", md: "row" }}
            wrap="wrap"
            gap={6}
            justify="center"
          >
            {" "}
            <Box
              key="Dr. Tushar Panchal"
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
                  size="2xl"
                  name="Dr Tushar Panchal"
                  src="/teams/tushar_panchal.jpg"
                  mx="auto" // Center horizontally
                />
              </Flex>

              <VStack spacing={2} mt={2} mb={6}>
                <Heading as="h3" size="md">
                  Dr Tushar Panchal
                </Heading>
                <Text color="gray.500">Group CEO, GTU Ventures</Text>
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
                  Dr Tushar Panchal
                </Heading>
                <Text mb={4}>Group CEO, GIC</Text>

                {/* Social Media Icons with Links */}
                <Flex gap={4}>
                  {/* <a
                    href="https://www.linkedin.com/in/dr-tushar-panchal-a07a6246/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon as={FaTwitter} w={6} h={6} cursor="pointer" />
                  </a> */}
                  <a
                    href="https://www.linkedin.com/in/dr-tushar-panchal-a07a6246/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon as={FaLinkedin} w={6} h={6} cursor="pointer" />
                  </a>
                </Flex>
              </Box>
            </Box>
          </Flex>
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
                      size="2xl"
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
                      {/* <a
                        href={member.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Icon as={FaTwitter} w={6} h={6} cursor="pointer" />
                      </a> */}
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
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
const teamMembers = [
  {
    name: "Mr Raj Hakani",
    role: "Coordinator, GIC",
    image: "/teams/rajhakanisir.jpg",
    twitter: "https://twitter.com/chiragpandey",
    linkedin: "https://in.linkedin.com/in/raj-hakani-34a68a35",
  },
  {
    name: "Kamlendra Singh",
    role: "Incubation Manager, AIC-GISC",
    image: "/teams/kamlendra_singh.png",
    twitter: "https://twitter.com/kamlendrasingh",
    linkedin: "https://in.linkedin.com/in/kamlendra-singh-7a2b58244",
  },
  {
    name: "Ms. Akanksha Gupta",
    role: "OSD Incubation & Administrator, GISC",
    image: "/teams/akansha_gupta.jpg",
    twitter: "https://twitter.com/chiragpandey",
    linkedin: "https://in.linkedin.com/in/akanksha-gupta-0592947",
  },
  {
    name: "Ms. Priyanka Makwana",
    role: "Manager Technical, AIC-GISC",
    image: "/teams/priyanka.jpg",
    // twitter: "https://twitter.com/chiragpandey",
    linkedin: "https://in.linkedin.com/in/makwana-p-452b40110",
  },
  {
    name: "Mr. Neelesh Sharma",
    role: "Coordinator, SSIP",
    image: "/teams/neelesh_sharma.jpg",
    twitter: "https://twitter.com/chiragpandey",
    linkedin: "https://in.linkedin.com/in/neeleshksharma",
  },
  {
    name: "Mr. Hemik D Mehta",
    role: "Regional Innovation & Start-up Coordinator, GISC",
    image: "/teams/hemik_mehta.jpg",
    twitter: "https://twitter.com/chiragpandey",
    linkedin: "https://in.linkedin.com/in/hemik-mehta-a2b693163",
  },
  {
    name: "Mr. Yajuvendrasingh Chauhan",
    role: "Project Manager, AIC-GISC",
    image: "/teams/yajuvendrasir.jpg",
    twitter: "https://twitter.com/chiragpandey",
    linkedin: "https://in.linkedin.com/in/yajuvendrasingh-chauhan",
  },
  {
    name: "Mr. Kalpesh Maiyad",
    role: "Incubation Associate, GISC",
    image: "/teams/kalpesh_maiyad.jpg",
    twitter: "https://twitter.com/chiragpandey",
    linkedin: "https://in.linkedin.com/in/kalpesh-ahir-03072059",
  },
  {
    name: "Ms. Manali Patel",
    role: "Incubation Associate, GISC",
    image: "/teams/Manali_patel.jpg",
    twitter: "https://twitter.com/chiragpandey",
    linkedin: "https://www.linkedin.com/in/manali-patel-250177338/",
  },
  {
    name: "Mr. Vishal Rathod",
    role: "Admin-Incubation, GISC",
    image: "/teams/vishal_rathod.jpg",
    twitter: "https://twitter.com/chiragpandey",
    linkedin: "NA",
  },
  {
    name: "Mr. Harshid Thummar",
    role: "Deputy Manager Operations, AIC-GISC",
    image: "/teams/harshidsir.jpg",
    twitter: "https://twitter.com/chiragpandey",
    linkedin: "https://in.linkedin.com/in/harshid-thummar",
  },
  {
    name: "Nidhi Joshi",
    role: "Executive Account & Admin, AIC-GISC",
    image: "/teams/nidhi_joshi.png",
    twitter: "https://twitter.com/nidhijoshi",
    linkedin: "NA",
  },
  {
    name: "Ms. Pina Kori",
    role: "Accountant, GISC",
    image: "/teams/pina_kori.jpg",
    twitter: "https://twitter.com/chiragpandey",
    linkedin: "https://in.linkedin.com/in/vishal-rathod-756b1a282",
  },
  {
    name: "Chirag Pandey",
    role: "Project Assistant, AIC-GISC",
    image: "/teams/chirag_pandey.png",
    twitter: "https://twitter.com/chiragpandey",
    linkedin: "https://in.linkedin.com/in/chirag-pandey-168156164",
  },
  {
    name: "Ms. Nidhi Chaudhari",
    role: "Accountant, GISC",
    image: "/teams/nidhi_chaudhari.png",
    twitter: "https://twitter.com/chiragpandey",
    linkedin: "NA",
  },
  {
    name: "Mr. Mahavirsingh Makwana",
    role: "Incubation Manager, GISC",
    image: "/teams/mahavirsinh_makwana.jpg",
    twitter: "https://twitter.com/chiragpandey",
    linkedin: "https://in.linkedin.com/in/mahavirsingh-makwana-0a951b272",
  },
  {
    name: "Mr. Rakesh Nayi",
    role: "Office Assistant, GISC",
    image: "/teams/rakesh_nayi.jpg",
    twitter: "https://twitter.com/chiragpandey",
    linkedin: "NA",
  },
  {
    name: "Mr. Siddharaj Solanki",
    role: "Office Assistant, GISC",
    image: "/teams/siddharaj_solanki.jpg",
    twitter: "https://twitter.com/chiragpandey",
    linkedin: "https://in.linkedin.com/in/siddharaj-solanki-337115237",
  },
  {
    name: "Ms. Dhara Dabhi",
    role: "Office Assistant, GISC",
    image: "/teams/dhara_dabhi.jpg",
    twitter: "https://twitter.com/chiragpandey",
    linkedin: "NA",
  },
];