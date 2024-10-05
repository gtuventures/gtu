import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  Link,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  VStack,
  Divider,
} from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { Image } from "@chakra-ui/react";
export default function WithSubnavigation() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box as="header" bg="purple.600" color="white" boxShadow="md">
      <Flex
        align="center"
        justify="space-between"
        px={{ base: 4, md: 8, lg: 12 }}
        py={4}
      >
        <Link href="/" display="flex" alignItems="center" gap={2}>
          <Heading as="span" size="lg" fontWeight="bold">
            <Image
              src={"/ventures.png"}
              alt="GTU Ventures"
              height={35}
              width={140}
            />
          </Heading>
        </Link>

        {/* Desktop Links */}
        <Flex display={{ base: "none", md: "flex" }} gap={6} align="center">
          <Link
            href="/aboutus"
            fontWeight="semibold"
            _hover={{ color: "purple.300" }}
          >
            About Us
          </Link>
          <Link
            href="/startupform"
            fontWeight="semibold"
            _hover={{ color: "purple.300" }}
          >
            Register Now
          </Link>
          <Link
            href="/login"
            fontWeight="semibold"
            _hover={{ color: "purple.300" }}
          >
            Admin Login
          </Link>
          <Link
            href="/teams"
            fontWeight="semibold"
            _hover={{ color: "purple.300" }}
          >
            Teams
          </Link>
        </Flex>

        {/* Mobile Menu Button */}
        <Button
          variant="outline"
          display={{ base: "flex", md: "none" }}
          onClick={onOpen}
        >
          <Icon as={FiMenu} boxSize={6} />
        </Button>

        {/* Mobile Sidebar */}
        <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
          <DrawerOverlay />
          <DrawerContent bg="purple.600" color="white">
            <DrawerCloseButton />
            <DrawerHeader borderBottomWidth="1px">
              <Heading size="md" fontWeight="bold">
                GTU Ventures
              </Heading>
            </DrawerHeader>
            <DrawerBody>
              <VStack align="start" spacing={6} mt={4}>
                <Link
                  href="/aboutus"
                  w="full"
                  textAlign="center"
                  py={3}
                  fontWeight="semibold"
                  bg="purple.500"
                  borderRadius="md"
                  _hover={{ bg: "purple.400" }}
                >
                  About Us
                </Link>
                <Link
                  href="/startupform"
                  w="full"
                  textAlign="center"
                  py={3}
                  fontWeight="semibold"
                  bg="purple.500"
                  borderRadius="md"
                  _hover={{ bg: "purple.400" }}
                >
                  Register now
                </Link>
                <Link
                  href="/login"
                  w="full"
                  textAlign="center"
                  py={3}
                  fontWeight="semibold"
                  bg="purple.500"
                  borderRadius="md"
                  _hover={{ bg: "purple.400" }}
                >
                  Admin Login
                </Link>
                <Link
                  href="/teams"
                  w="full"
                  textAlign="center"
                  py={3}
                  fontWeight="semibold"
                  bg="purple.500"
                  borderRadius="md"
                  _hover={{ bg: "purple.400" }}
                >
                  Teams
                </Link>
              </VStack>
              <Divider mt={6} borderColor="purple.300" />
              <VStack align="start" spacing={4} mt={6}>
                <Heading size="sm" fontWeight="bold">
                  Follow Us
                </Heading>
                <Flex gap={3}>
                  <Button
                    as="a"
                    href="#"
                    bg="twitter.500"
                    color="white"
                    borderRadius="full"
                    size="sm"
                    _hover={{ bg: "twitter.400" }}
                    leftIcon={<Icon as={FiTwitter} />}
                  >
                    Twitter
                  </Button>
                  {/* Add more social buttons as needed */}
                </Flex>
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Flex>
    </Box>
  );
}
