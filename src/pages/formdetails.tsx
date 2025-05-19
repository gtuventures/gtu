// pages/startups.tsx
import { useEffect, useState } from "react";
import {
  Box,
  Grid,
  Text,
  Stack,
  Heading,
  Button as ChakraButton,
} from "@chakra-ui/react";
import { Link as ChakraLink } from "@chakra-ui/react";
import supabase from "../../supabase";
import { Button } from "@chakra-ui/react";
import Link from "next/link";
import * as XLSX from "xlsx";

// Define your types for the startup data
interface Startup {
  id: number;
  startupname: string;
  discription: string;
  email: string;
  coemail: string;
  State: string;
  District: string;
  fund: string;
  website: string;
  mobile: string;
  registration: string;
  incubation: string;
  support: string;
  team: string;
  fundingagency: string;
  drive: string;
}

// const supabase = createClient(
//   process.env.NEXT_PUBLIC_SUPABASE_URL!,
//   process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
// );

const StartupsPage = () => {
  const [startups, setStartups] = useState<Startup[]>([]);

  // Fetch startups from Supabase
  useEffect(() => {
    const fetchStartups = async () => {
      let { data, error } = await supabase.from("startups").select("*");
      if (error) {
        console.error("Error fetching data:", error);
      } else {
        setStartups(data as Startup[]);
      }
    };
    fetchStartups();
  }, []);

  const downloadExcel = () => {
    // Create a new workbook
    const wb = XLSX.utils.book_new();

    // Convert startups data to worksheet
    const ws = XLSX.utils.json_to_sheet(
      startups.map((startup) => ({
        "Startup Name": startup.startupname,
        Description: startup.discription,
        Email: startup.email,
        "Co-email": startup.coemail,
        State: startup.State,
        District: startup.District,
        Fund: startup.fund,
        Website: startup.website,
        Mobile: startup.mobile,
        Registration: startup.registration,
        Incubation: startup.incubation,
        Support: startup.support,
        Team: startup.team,
        "Funding Agency": startup.fundingagency,
        Drive: startup.drive,
      }))
    );

    // Add the worksheet to the workbook
    XLSX.utils.book_append_sheet(wb, ws, "Startups");

    // Generate Excel file and trigger download
    XLSX.writeFile(wb, "startups_data.xlsx");
  };

  return (
    <>
      <Box py={10} px={5} bg="pastelPink.50" minHeight="100vh">
        <Heading mb={8} color="pastelPink.800" textAlign="center">
          Startups
        </Heading>
        <Box mb={4} display="flex" gap={4} justifyContent="center">
          <Link href="/contactAdmin">
            <Button>See Queries ↗️</Button>
          </Link>
          <ChakraButton onClick={downloadExcel} colorScheme="green">
            Download Excel 📥
          </ChakraButton>
        </Box>
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)", // 1 column for mobile devices
            md: "repeat(2, 1fr)", // 2 columns for medium devices like tablets
            lg: "repeat(2, 1fr)", // 2 columns for large devices like laptops
          }}
          gap={6}
        >
          {startups.map((startup) => (
            <Box
              key={startup.id}
              p={5}
              shadow="md"
              borderWidth="1px"
              borderRadius="md"
              bg="pastelGreen.50"
            >
              <Stack spacing={3}>
                <Text fontWeight="bold" fontSize="lg" color="pastelBlue.800">
                  <b> {startup.startupname}</b>
                </Text>

                {/* Displaying key-value pairs with bold keys */}
                <Text>
                  <strong>Description:</strong> {startup.discription}
                </Text>
                <Text>
                  <strong>Email:</strong> {startup.email}
                </Text>
                <Text>
                  <strong>Co-email:</strong> {startup.coemail}
                </Text>
                <Text>
                  <strong>State:</strong> {startup.State}
                </Text>
                <Text>
                  <strong>District:</strong> {startup.District}
                </Text>
                <Text>
                  <strong>Fund:</strong> {startup.fund}
                </Text>
                <Text>
                  <strong>Website:</strong>{" "}
                  <ChakraLink
                    href={startup.website}
                    color="pastelBlue.600"
                    as="u"
                    isExternal
                  >
                    See Website ↗️
                  </ChakraLink>
                </Text>
                <Text>
                  <strong>Mobile:</strong> {startup.mobile}
                </Text>
                <Text>
                  <strong>Registration:</strong> {startup.registration}
                </Text>
                <Text>
                  <strong>Incubation:</strong> {startup.incubation}
                </Text>
                <Text>
                  <strong>Support:</strong> {startup.support}
                </Text>
                <Text>
                  <strong>Team:</strong> {startup.team}
                </Text>
                <Text>
                  <strong>Funding Agency:</strong> {startup.fundingagency}
                </Text>
                <Text color="pastelBlue.600">
                  <strong>Drive:</strong>
                  <ChakraLink href={startup.drive} isExternal>
                    &nbsp; Open Drive ↗️
                  </ChakraLink>
                </Text>
              </Stack>
              <br />
            </Box>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default StartupsPage;
