import {
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Text,
  Container,
  Heading,
  VStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

interface Grantee {
  "S No": number;
  "Approval Date": string;
  Innovation: string;
  Innovator: string;
  "Sanctioned Grant": number;
}

export default function SSIPPage() {
  const [grantees, setGrantees] = useState<Grantee[]>([]);

  useEffect(() => {
    const fetchGrantees = async () => {
      try {
        const response = await fetch("/grantees/ssip.json");
        const data = await response.json();
        setGrantees(data.Sheet11);
      } catch (error) {
        console.error("Error fetching grantees:", error);
      }
    };

    fetchGrantees();
  }, []);

  return (
    <Container maxW="full" py={8} bg="gray.50">
      <VStack spacing={4} mb={8}>
        <Heading as="h1" size="2xl" color="blue.600">
          Student Startup & Innovation Policy
        </Heading>
        <Text fontSize="xl" color="gray.600" textAlign="center">
          List of Approved Grantees and Their Innovations
        </Text>
      </VStack>

      <Box overflowX="auto" bg="white" rounded="lg" shadow="lg">
        <Table variant="simple" size={["sm", "md"]}>
          <Thead>
            <Tr bg="blue.600">
              <Th color="white" px={6} py={4}>
                S.No
              </Th>
              <Th color="white" px={6} py={4}>
                Approval Date
              </Th>
              <Th color="white" px={6} py={4}>
                Innovation
              </Th>
              <Th color="white" px={6} py={4}>
                Innovator
              </Th>
              <Th color="white" px={6} py={4} isNumeric>
                Sanctioned Grant (₹)
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {grantees.map((grantee) => (
              <Tr key={grantee["S No"]} _hover={{ bg: "gray.50" }}>
                <Td px={6}>{grantee["S No"]}</Td>
                <Td px={6}>{grantee["Approval Date"]}</Td>
                <Td px={6}>
                  <Text noOfLines={2}>{grantee["Innovation"]}</Text>
                </Td>
                <Td px={6}>
                  <Text noOfLines={2}>{grantee["Innovator"]}</Text>
                </Td>
                <Td px={6} isNumeric>
                  {grantee["Sanctioned Grant"].toLocaleString("en-IN")}
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </Container>
  );
}
