// pages/startups.tsx
import { useEffect, useState } from "react";
import { Box, Grid, Text, Stack, Heading } from "@chakra-ui/react";
import { Link as ChakraLink } from "@chakra-ui/react";
import supabase from "../../supabase";

// Define your types for the startup data
interface Startup {
  id: number;
  stname: string;
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

  return (
    <Box py={10} px={5} bg="pastelPink.50" minHeight="100vh">
      <Heading mb={8} color="pastelPink.800" textAlign="center">
        Startups
      </Heading>
      <Grid templateColumns="repeat(auto-fit, minmax(300px, 1fr))" gap={6}>
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
                {startup.stname}
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
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default StartupsPage;
