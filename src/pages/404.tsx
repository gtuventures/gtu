
import { Box, Heading, Text, Button, Flex } from "@chakra-ui/react";
import { useRouter } from "next/router";

export default function NotFoundPage() {
  const router = useRouter();

  return (
    <Flex
      height="100vh"
      justify="center"
      align="center"
      bg="gray.50"
      flexDirection="column"
      p={6}
    >
      <Box textAlign="center">
        <Heading as="h1" size="2xl" mb={4}>
          404
        </Heading>
        <Text fontSize="lg" color="gray.600" mb={6}>
          Oops! The page you're looking for doesn't exist.
        </Text>
        <Button colorScheme="blue" onClick={() => router.push("/")}>
          Go Back to Home
        </Button>
      </Box>
    </Flex>
  );
}
