import {
  Box,
  Flex,
  Heading,
  Text,
  VStack,
  Avatar,
  Container,
} from "@chakra-ui/react";

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

      {/* Second Section: Team Members */}
      <Box w="full" py={{ base: 12, md: 24, lg: 32 }}>
        <Container maxW="container.lg" px={{ base: 4, md: 6 }}>
          <Flex
            direction={{ base: "column", md: "row" }}
            wrap="wrap"
            gap={6}
            justify="center"
          >
            {teamMembers.map((member) => (
              <Flex
                key={member.name}
                direction="column"
                align="center"
                justify="center"
                p={6}
                bg="card"
                rounded="lg"
                textAlign="center"
                boxShadow="sm"
                w={{ base: "100%", md: "45%", lg: "30%" }}
              >
                <Avatar src={member.image} name={member.name} size="xl" />
                <VStack spacing={2} mt={4}>
                  <Heading as="h3" size="md">
                    {member.name}
                  </Heading>
                  <Text color="muted">{member.role}</Text>
                  <Text color="muted" fontSize="sm">
                    {member.description}
                  </Text>
                </VStack>
              </Flex>
            ))}
          </Flex>
        </Container>
      </Box>
    </Box>
  );
}

// Data for team members
const teamMembers = [
  {
    name: "John Doe",
    role: "Founder & CEO",
    description:
      "John has over 15 years of experience in the startup ecosystem, having founded and scaled multiple successful companies.",
    image: "/placeholder-user.jpg",
  },
  {
    name: "Jane Smith",
    role: "Head of Investments",
    description:
      "Jane has a deep understanding of the venture capital landscape and a proven track record of identifying promising startups.",
    image: "/placeholder-user.jpg",
  },
  {
    name: "Michael Johnson",
    role: "Entrepreneur-in-Residence",
    description:
      "Michael has founded and led multiple successful startups, and now shares his expertise with the next generation of entrepreneurs.",
    image: "/placeholder-user.jpg",
  },
  {
    name: "Emily Wilson",
    role: "Head of Accelerator",
    description:
      "Emily has a wealth of experience in building and scaling accelerator programs, helping startups achieve their full potential.",
    image: "/placeholder-user.jpg",
  },
  {
    name: "David Lee",
    role: "Mentor",
    description:
      "David has over a decade of experience as a successful entrepreneur and angel investor, and now shares his expertise with our startups.",
    image: "/placeholder-user.jpg",
  },
  {
    name: "Sarah Chen",
    role: "Operations Manager",
    description:
      "Sarah ensures the smooth running of our incubation center, supporting our startups and team with her exceptional organizational skills.",
    image: "/placeholder-user.jpg",
  },
];
