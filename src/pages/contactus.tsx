"use client";

import {
  Box,
  Heading,
  Text,
  Stack,
  Input,
  Textarea,
  Button,
  Container,
  SimpleGrid,
  HStack,
  Icon,
  VStack,
  Link,
} from "@chakra-ui/react";
import { PhoneIcon, EmailIcon } from "@chakra-ui/icons";
import { FaWhatsapp } from "react-icons/fa";

export default function ContactUs() {
  return (
    <Box p={4}>
      <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
        <Heading fontSize={"3xl"}>Contact Us</Heading>
        <Text color={"gray.600"} fontSize={"xl"}>
          We're here to help. Reach out to us for any inquiries, support, or
          information about our financial services.
        </Text>
      </Stack>

      <Container maxW={"6xl"} mt={10}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          {/* Contact Information */}
          <VStack align={"start"} spacing={4}>
            <Heading fontSize={"2xl"}>Get in Touch</Heading>
            <HStack>
              <Icon as={PhoneIcon} color={"green.500"} />
              <Text fontSize={"lg"} fontWeight={600}>
                Tushar Makwana (MBA, Finance)
              </Text>
              <Text fontSize={"lg"}>+91 9638387371</Text>
            </HStack>

            <HStack>
              <Icon as={PhoneIcon} color={"green.500"} />
              <Text fontSize={"lg"} fontWeight={600}>
                Viraj Joshi
              </Text>
              <Text fontSize={"lg"}>+91 7383123133</Text>
            </HStack>

            <HStack>
              <Icon as={EmailIcon} color={"green.500"} />
              <Text fontSize={"lg"}>ramyantara.finserv@gmail.com</Text>
            </HStack>

            <HStack>
              <Icon as={FaWhatsapp} color={"green.400"} />
              <Link
                href="https://wa.me/919638387371"
                color="green.500"
                fontSize={"lg"}
                fontWeight={600}
                isExternal
              >
                Chat on WhatsApp
              </Link>
            </HStack>

            <Text fontSize={"lg"} color={"gray.600"}>
              Address: 316, Times Galaxy, Near Cinezza Multiplex, Nr. D Mart,
              Ugat Canal Road, Jahangirpura 395005
            </Text>
          </VStack>

          {/* Contact Form */}
          <VStack spacing={4} align="start">
            <Heading fontSize={"2xl"}>Send Us a Message</Heading>
            <Input placeholder="Your Name" size="lg" />
            <Input placeholder="Your Email" size="lg" />
            <Textarea placeholder="Your Message" size="lg" />
            <Button colorScheme="blue" size="lg">
              Send Message
            </Button>
          </VStack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
