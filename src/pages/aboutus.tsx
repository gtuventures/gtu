import {
  Box,
  Flex,
  Heading,
  Text,
  Link as ChakraLink,
  Image,
  Avatar,
  AvatarBadge,
  VStack,
  HStack,
  Button,
} from "@chakra-ui/react";
import { FaMountain } from "react-icons/fa";
import NextLink from "next/link";

export default function Component() {
  return (
    <Flex direction="column" minH="100vh">
      {/* <Box
        as="header"
        px={{ base: 4, lg: 6 }}
        h="14"
        display="flex"
        alignItems="center"
      >
        <NextLink href="#" passHref>
          <ChakraLink display="flex" alignItems="center">
            <FaMountain size="24px" />
            <Text srOnly>GTU Ventures</Text>
          </ChakraLink>
        </NextLink>
        <HStack ml="auto" spacing={{ base: 4, sm: 6 }}>
          {["About", "Programs", "Success Stories", "Contact"].map((item) => (
            <NextLink key={item} href="#" passHref>
              <ChakraLink
                fontSize="sm"
                fontWeight="medium"
                _hover={{ textDecoration: "underline" }}
              >
                {item}
              </ChakraLink>
            </NextLink>
          ))}
        </HStack>
      </Box> */}

      <Box as="main" flex="1">
        {/* Section 1 */}
        <Box w="full" py={{ base: 12, md: 24, lg: 32 }}>
          <Flex
            direction={{ base: "column", lg: "row" }}
            align="center"
            px={{ base: 4, md: 6 }}
          >
            <VStack align="flex-start" spacing={4}>
              <Heading as="h1" fontSize={{ base: "3xl", sm: "5xl", xl: "6xl" }}>
                GTU Ventures Incubation Center
              </Heading>
              <Text
                maxW="600px"
                color="gray.600"
                fontSize={{ base: "md", md: "xl" }}
              >
                Empowering entrepreneurs to turn their ideas into thriving
                businesses. Our incubation program provides the resources,
                mentorship, and support startups need to succeed.
              </Text>
            </VStack>
            <Box display="flex" justifyContent="center" mt={{ base: 6, lg: 0 }} m={4}>
              <Image
                src="/incub.webp"
                width="475px"
                height="475px"
                alt="GTU Ventures Logo"
                borderRadius="xl"
                objectFit="contain"
              />
            </Box>
          </Flex>
        </Box>

        {/* Section 2 */}
        <Box w="full" py={{ base: 12, md: 24, lg: 32 }} bg="gray.100">
          <VStack
            align="center"
            spacing={4}
            textAlign="center"
            px={{ base: 4, md: 6 }}
          >
            <Heading as="h2" fontSize={{ base: "3xl", sm: "5xl" }}>
              Our Incubation Program
            </Heading>
            <Text
              maxW="900px"
              color="gray.600"
              fontSize={{ base: "md", lg: "lg" }}
            >
              At GTU Ventures, we provide a comprehensive incubation program
              that supports entrepreneurs at every stage of their journey. From
              seed funding and mentorship to access to industry experts and
              state-of-the-art facilities, our program is designed to help
              startups thrive.
            </Text>
          </VStack>

          <Flex
            direction={{ base: "column", lg: "row" }}
            maxW="5xl"
            mx="auto"
            py={12}
            gap={12}
            align="center"
            m={{ base: 4,md : "auto"}}  // Add this line
          >
            <Image
              src="/incub2.webp"
              width="550px"
              height="310px"
              alt="Incubation Program"
              borderRadius="xl"
              objectFit="cover"
              order={{ base: "initial", lg: "last" }}
            />
            <VStack align="flex-start" spacing={4}>
              {[
                {
                  title: "Seed Funding",
                  description:
                    "Access to early-stage funding to kickstart your venture.",
                },
                {
                  title: "Mentorship",
                  description:
                    "Guidance from experienced entrepreneurs and industry experts.",
                },
                {
                  title: "Facilities",
                  description:
                    "State-of-the-art coworking spaces and labs to support your growth.",
                },
              ].map((item) => (
                <Box key={item.title}>
                  <Heading as="h3" fontSize="xl" fontWeight="bold">
                    {item.title}
                  </Heading>
                  <Text color="gray.600">{item.description}</Text>
                </Box>
              ))}
            </VStack>
          </Flex>
        </Box>

        {/* Section 3 */}
        <Box w="full" py={{ base: 12, md: 24, lg: 32 }}>
          <VStack align="center" spacing={4} textAlign="center">
            <Heading as="h2" fontSize={{ base: "3xl", sm: "5xl" }}>
              Meet Our Team
            </Heading>
            <Text
              maxW="900px"
              color="gray.600"
              fontSize={{ base: "md", lg: "lg" }}
            >
              Our team of experts is dedicated to helping startups succeed. With
              backgrounds in entrepreneurship, business, and technology, they
              provide the guidance and support needed to turn ideas into
              thriving businesses.
            </Text>
          </VStack>

          <Flex
            maxW="5xl"
            mx="auto"
            py={12}
            gap={12}
            wrap="wrap"
            justify="center"
          >
            {[
              {
                name: "Tushar sir",
                role: "CEO",
                avatar: "/placeholder-user.jpg",
              },
              {
                name: "Jane Appleseed",
                role: "Program Director",
                avatar: "/placeholder-user.jpg",
              },
              {
                name: "Mihir Shah Sir",
                role: "Venture Advisor",
                avatar: "/placeholder-user.jpg",
              },
            ].map((person) => (
              <VStack key={person.name} align="center" spacing={4}>
                <Avatar size="xl" src={person.avatar}>
                  <AvatarBadge boxSize="1.25em" bg="green.500" />
                </Avatar>
                <Heading as="h3" fontSize="xl">
                  {person.name}
                </Heading>
                <Text color="gray.600">{person.role}</Text>
              </VStack>
            ))}
          </Flex>
        </Box>

        {/* Section 4 */}
        <Box w="full" py={{ base: 12, md: 24, lg: 32 }} bg="gray.100">
          <VStack align="center" spacing={4} textAlign="center">
            <Heading as="h2" fontSize={{ base: "3xl", sm: "5xl" }}>
              Success Stories
            </Heading>
            <Text
              maxW="900px"
              color="gray.600"
              fontSize={{ base: "md", lg: "lg" }}
            >
              Hear from the entrepreneurs who have transformed their ideas into
              thriving businesses with the support of GTU Ventures.
            </Text>
          </VStack>

          <Flex
            maxW="5xl"
            mx="auto"
            py={12}
            gap={12}
            wrap="wrap"
            justify="center"
          >
            {[
              {
                name: "Acme Inc.",
                story:
                  "GTU Ventures' incubation program provided us with the resources and support we needed to turn our idea into a successful business. Their mentorship and access to funding were invaluable in our growth.",
              },
              {
                name: "Startup XYZ",
                story:
                  "The GTU Ventures incubation program was a game-changer for our startup. The mentorship, networking opportunities, and access to state-of-the-art facilities helped us scale our business and achieve our goals.",
              },
            ].map((company) => (
              <VStack
                key={company.name}
                align="flex-start"
                spacing={4}
                p={4}
                bg="white"
                borderRadius="lg"
                boxShadow="lg"
                maxW="md"
              >
                <Box
                  as="span"
                  bg="gray.200"
                  px={3}
                  py={1}
                  borderRadius="lg"
                  fontSize="sm"
                >
                  Success Story
                </Box>
                <Heading as="h3" fontSize="2xl">
                  {company.name}
                </Heading>
                <Text color="gray.600">{company.story}</Text>
                <NextLink href="#" passHref>
                  <Button as={ChakraLink} size="sm" colorScheme="purple">
                    Read More
                  </Button>
                </NextLink>
              </VStack>
            ))}
          </Flex>
        </Box>
      </Box>

      <Box
        as="footer"
        py={6}
        borderTop="1px solid"
        borderColor="gray.200"
        display="flex"
        flexDir={{ base: "column", sm: "row" }}
        alignItems="center"
        px={{ base: 4, md: 6 }}
      >
        <Text fontSize="xs" color="gray.500">
          &copy; 2024 GTU Ventures. All rights reserved.
        </Text>
        <HStack ml={{ sm: "auto" }} spacing={{ base: 4, sm: 6 }}>
          <NextLink href="#" passHref>
            <ChakraLink fontSize="xs" _hover={{ textDecoration: "underline" }}>
              Terms of Service
            </ChakraLink>
          </NextLink>
          <NextLink href="#" passHref>
            <ChakraLink fontSize="xs" _hover={{ textDecoration: "underline" }}>
              Privacy Policy
            </ChakraLink>
          </NextLink>
        </HStack>
      </Box>
    </Flex>
  );
}
