"use client";

import {
  Box,
  Text,
  Flex,
  Image, // Import Image component
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
        {/* Image Section */}
        <Flex justify="center" my={4}>
          <Image src="/hihh.png" alt="GTU Ventures" maxW={{
            base:"60%",md:"30%"
          }} />
        </Flex>

        <Text mt={4} textAlign="center">
          AIC GISC ,GISC, DIC {" "}
        </Text>
        <Text mt={2} textAlign="center">
          Phone: 9909910798
        </Text>
        {/* <br /> */}
        <Text mt={2} textAlign="center">
         079-23267644
        </Text>
        {/* <br /> */}
       
        <Text mt={2} textAlign="center">
          Email: info@gtuventures.com
        </Text>

        {/* <Heading as="h3" size="lg" mt={8} textAlign="center">
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
        </Flex> */}
      </Box>

      <Box as="footer" bg="gray.100" py={6} color="gray.600" mt={8}>
        <Flex
          justify="space-between"
          align="center"
          px={4}
          direction={{ base: "column", md: "row" }}
        >
          

          <Text>&copy; 2024 GTU Ventures. All rights reserved.</Text>

          {/* <Flex gap={4} mt={{ base: 4, md: 0 }}>
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms of Service</Link>
          </Flex> */}
        </Flex>
      </Box>
    </>
  );
}
