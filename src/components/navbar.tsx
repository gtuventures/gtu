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
import { FiTwitter, FiFacebook, FiLinkedin } from "react-icons/fi";
import { Image } from "@chakra-ui/react";
import { useState } from "react";

export default function EnhancedNavbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [dropdownVisible, setDropdownVisible] = useState(false);
  let timeoutId: string | number | NodeJS.Timeout | undefined;

  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    // Use a timeout to delay hiding the dropdown
    timeoutId = setTimeout(() => {
      setDropdownVisible(false);
    }, 2000); // 500 ms delay
  };

  const handleMouseEnterDropdown = () => {
    clearTimeout(timeoutId); // Clear timeout if mouse enters dropdown
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
          <Flex align="center" gap={2}>
            <Image
              src={"/gtulogo.png"}
              alt="GTU Ventures Logo"
              height={65}
              width={65}
            />
            <Image
              src={"/hihh.png"}
              alt="GTU Ventures Banner"
              height={63}
              width={150}
            />
          </Flex>
        </Link>

        {/* Desktop Links */}
        <Flex display={{ base: "none", md: "flex" }} gap={6} align="center">
          <Box
            position="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Link
              href="#"
              fontWeight="semibold"
              _hover={{ color: "purple.300" }}
            >
              {" "}
              About{" "}
            </Link>
            {dropdownVisible && (
              <Box
                position="absolute"
                bg="white"
                boxShadow="md"
                mt={2}
                borderRadius="md"
                zIndex={1}
                onMouseEnter={handleMouseEnterDropdown}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  href="/aboutus"
                  display="block"
                  px={4}
                  py={2}
                  _hover={{ bg: "purple.100" }}
                >
                  {" "}
                  About Us ↗{" "}
                </Link>
                <Link
                  href="/teams"
                  display="block"
                  px={4}
                  py={2}
                  _hover={{ bg: "purple.100" }}
                >
                  {" "}
                  Teams ↗{" "}
                </Link>
              </Box>
            )}
          </Box>

          <Link
            href="/events"
            fontWeight="semibold"
            _hover={{ color: "purple.300" }}
          >
            {" "}
            Events{" "}
          </Link>
          <Link
            href="/startups"
            fontWeight="semibold"
            _hover={{ color: "purple.300" }}
          >
            {" "}
            Startups Incubated with Us{" "}
          </Link>
          <Button colorScheme="purple">
            <Link
              href="/startupform"
              fontWeight="semibold"
              _hover={{ color: "purple.300" }}
            >
              {" "}
              Apply Now{" "}
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
              <Heading size="md"> GTU Ventures </Heading>
            </DrawerHeader>
            <DrawerBody>
              <VStack align="start" spacing={6} mt={4}>
                <Link
                  href="/aboutus"
                  w="full"
                  textAlign="center"
                  py={3}
                  fontWeight="semibold"
                  bg="white"
                  borderRadius="md"
                  _hover={{ bg: "purple.300" }}
                >
                  {" "}
                  About Us{" "}
                </Link>
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
                  {" "}
                  Register Now{" "}
                </Link>
                <Link
                  href="/events"
                  w="full"
                  textAlign="center"
                  py={3}
                  fontWeight="semibold"
                  bg="white"
                  borderRadius="md"
                  _hover={{ bg: "purple.300" }}
                >
                  {" "}
                  Events{" "}
                </Link>{" "}
                <Link
                  href="/teams"
                  w="full"
                  textAlign="center"
                  py={3}
                  fontWeight="semibold"
                  bg="white"
                  borderRadius="md"
                  _hover={{ bg: "purple.300" }}
                >
                  {" "}
                  Teams
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
                  {" "}
                  Startups Incubated with Us{" "}
                </Link>
              </VStack>
              <Divider mt={6} borderColor="#E2E8F0" />
              <VStack align="start" spacing={4} mt={6}>
                <Heading size="sm"> Follow Us </Heading>
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
                    {" "}
                    Twitter{" "}
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
                    {" "}
                    Facebook{" "}
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
                    {" "}
                    LinkedIn{" "}
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
