import { useState } from "react";
import {
  Box,
  Flex,
  Link,
  Button,
  Icon,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  VStack,
  Divider,
  Heading,
  Image,
} from "@chakra-ui/react";
import { FiMenu, FiTwitter, FiFacebook, FiLinkedin } from "react-icons/fi";
import { useDisclosure } from "@chakra-ui/hooks";

export default function EnhancedNavbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  let timeoutId: string | number | NodeJS.Timeout | undefined;

  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    timeoutId = setTimeout(() => {
      setDropdownVisible(false);
    }, 2000);
  };

  const handleMouseEnterDropdown = () => {
    clearTimeout(timeoutId);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <Box as="header" bg="white" color="purple" boxShadow="md">
      <Flex
        align="center"
        justify="space-between"
        px={{ base: 4, md: 8, lg: 12 }}
        py={0}
      >
        <Link href="/" display="flex" alignItems="center" gap={2}>
          <Flex align="center" gap={2} position="relative" top={1}>
            <Image
              src={"/gtulogo.png"}
              alt="GTU Ventures Logo"
              height={65}
              width={65}
            />
            <Image
              src={"/gtuvv.svg"}
              alt="GTU Ventures Banner"
              height={63}
              width={200}
            />
          </Flex>
        </Link>

        {/* Desktop Links */}
        <Flex display={{ base: "none", md: "flex" }} gap={6} align="center">
          <Link
            href="/contactus"
            fontWeight="semibold"
            _hover={{ color: "purple.300" }}
          >
            Contact Us
          </Link>
          <Box
            position="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Link
              href="#"
              fontWeight="semibold"
              _hover={{ color: "purple.300" }}
              onClick={toggleDropdown}
            >
              About
            </Link>
            {dropdownOpen && (
              <Box
                position="absolute"
                top="100%"
                left={0}
                bg="white"
                boxShadow="md"
                borderRadius="md"
                zIndex={10}
                onMouseEnter={handleMouseEnterDropdown}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  href="/aboutus"
                  display="block"
                  px={4}
                  py={2}
                  fontWeight="semibold"
                  _hover={{ bg: "purple.100" }}
                >
                  About Us
                </Link>
                <Link
                  href="/teams"
                  display="block"
                  px={4}
                  py={2}
                  fontWeight="semibold"
                  _hover={{ bg: "purple.100" }}
                >
                  Teams
                </Link>
              </Box>
            )}
          </Box>
          <Link
            href="/startups"
            fontWeight="semibold"
            _hover={{ color: "purple.300" }}
          >
            Startups
          </Link>
          <Button colorScheme="purple">
            <Link
              href="/startupform"
              fontWeight="semibold"
              _hover={{ color: "purple.300" }}
            >
              Apply Now
            </Link>
          </Button>
        </Flex>

        {/* Mobile Menu Button */}
        <Button
          variant="outline"
          display={{ base: "flex", md: "none" }}
          onClick={onOpen}
          aria-label="Open Menu"
        >
          <Icon as={FiMenu} boxSize={6} />
        </Button>

        {/* Mobile Sidebar */}
        <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
          <DrawerOverlay />
          <DrawerContent bg="white" color="purple">
            <DrawerCloseButton />
            <DrawerHeader borderBottomWidth="1px">
              <Heading size="md">GTU Ventures</Heading>
            </DrawerHeader>
            <DrawerBody>
              <VStack align="start" spacing={6} mt={4} px={20}>
                {/* <Link
                  href="/aboutus"
                  w="full"
                  textAlign="center"
                  py={3}
                  fontWeight="semibold"
                  bg="white"
                  borderRadius="md"
                  _hover={{ bg: "purple.300" }}
                >
                  About Us
                </Link> */}
                <Box
                  position="relative"
                  w="full"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    href="#"
                    w="full"
                    textAlign="center"
                    py={3}
                    px={30}
                    fontWeight="semibold"
                    bg="white"
                    borderRadius="md"
                    _hover={{ bg: "purple.300" }}
                    onClick={toggleDropdown}
                  >
                    About
                  </Link>
                  {dropdownOpen && (
                    <Box
                      position="absolute"
                      top="100%"
                      left={0}
                      px={8}
                      py={8}
                      w="full"
                      bg="white"
                      boxShadow="md"
                      borderRadius="md"
                      zIndex={10}
                      onMouseEnter={handleMouseEnterDropdown}
                      onMouseLeave={handleMouseLeave}
                    >
                      <Link
                        href="/aboutus"
                        w="full"
                        textAlign="center"
                        py={3}
                        fontWeight="semibold"
                        bg="white"
                        borderRadius="md"
                        _hover={{ bg: "purple.100" }}
                      >
                        About
                      </Link>
                      <br />
                      <br />
                      {/* <br /> */}
                      <Link
                        href="/teams"
                        w="full"
                        textAlign="center"
                        py={3}
                        fontWeight="semibold"
                        bg="white"
                        borderRadius="md"
                        _hover={{ bg: "purple.100" }}
                      >
                        Team
                      </Link>
                    </Box>
                  )}
                </Box>
                <Link
                  href="/startupform"
                  w="full"
                  textAlign="center"
                  py={3}
                  fontWeight="semibold"
                  bg="white"
                  borderRadius="md"
                  _hover={{ bg: "purple.300" }}
                >
                  Register Now
                </Link>
                <Link
                  href="/startups"
                  w="full"
                  textAlign="center"
                  py={3}
                  fontWeight="semibold"
                  bg="white"
                  borderRadius="md"
                  _hover={{ bg: "purple.300" }}
                >
                  Startups Incubated with Us
                </Link>
              </VStack>
              <Divider mt={6} borderColor="#E2E8F0" />
              <VStack align="start" spacing={4} mt={6}>
                <Heading size="sm">Follow Us</Heading>
                <Flex gap={3}>
                  <Button
                    as="a"
                    href="#"
                    bg="#1DA1F2"
                    color="#FFFFFF"
                    borderRadius="full"
                    size="sm"
                    _hover={{ bg: "#1A91DA" }}
                    leftIcon={<Icon as={FiTwitter} />}
                  >
                    Twitter
                  </Button>
                  <Button
                    as="a"
                    href="#"
                    bg="#4267B2"
                    color="#FFFFFF"
                    borderRadius="full"
                    size="sm"
                    _hover={{ bg: "#365899" }}
                    leftIcon={<Icon as={FiFacebook} />}
                  >
                    Facebook
                  </Button>
                  <Button
                    as="a"
                    href="#"
                    bg="#0077B5"
                    color="#FFFFFF"
                    borderRadius="full"
                    size="sm"
                    _hover={{ bg: "#005582" }}
                    leftIcon={<Icon as={FiLinkedin} />}
                  >
                    LinkedIn
                  </Button>
                </Flex>
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Flex>
    </Box>
  );
}
