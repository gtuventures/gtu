"use client";

import {
  Box,
  Container,
  SimpleGrid,
  Stack,
  Text,
  Flex,
  useColorModeValue,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import { FiTwitter, FiLinkedin, FiInstagram } from "react-icons/fi";
import { Heading } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";



export default function LargeWithLogoCentered() {
  return (
    <>
      <Box bg="white" shadow="sm" p={6} rounded="lg" flex="1">
        <Heading as="h3" size="lg">
          GTU Ventures
        </Heading>
        <Text mt={4}>GTU,AIC</Text>
        <Text mt={2}>Phone: (123) 456-7890</Text>
        <Text mt={2}>Email: info@gtuventures.com</Text>
        <Heading as="h3" size="lg" mt={8}>
          Follow Us
        </Heading>
        <Flex mt={4} gap={4} justify="center">
          <Link href="#">
            <Icon as={FiTwitter} boxSize={6} />
          </Link>
          <Link href="#">
            <Icon as={FiLinkedin} boxSize={6} />
          </Link>
          <Link href="#">
            <Icon as={FiInstagram} boxSize={6} />
          </Link>
        </Flex>
      </Box>
      <Box as="footer" bg="gray.100" py={6} color="gray.600">
        <Flex justify="space-between" px={4}>
          <Text>&copy; 2024 GTU Ventures. All rights reserved.</Text>
          <Flex gap={4}>
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms of Service</Link>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
