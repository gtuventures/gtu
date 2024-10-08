import {
  SimpleGrid,
  Image,
  Box,
  Heading,
  Text,
  Container,
} from "@chakra-ui/react";
import { Key } from "react";

interface Startup {
  image: string | undefined;
  name: string | undefined;
}

interface StartupsPageProps {
  startups: Startup[];
}

const StartupsPage = ({ startups }: StartupsPageProps) => {
  return (
    <Container maxW="container.xl" p={6}>
      <Box textAlign="center" mb={8}>
        <Heading as="h1" size="2xl" mb={4}>
          Startups Registered with Us
        </Heading>
        <Text fontSize="lg" color="gray.600">
          Explore the amazing startups that are part of our platform, driving
          innovation and growth.
        </Text>
      </Box>

      <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing={6}>
        {startups.map(
          (
            startup: { image: string | undefined; name: string | undefined },
            index: Key | null | undefined
          ) => (
            <Box
              key={index}
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              boxShadow="lg"
            >
              <Image src={startup.image} objectFit="cover" />

              <Box p={4}></Box>
            </Box>
          )
        )}
      </SimpleGrid>
    </Container>
  );
};

// Example data for startups
const startups = [
  {
    image: "/startups/400dpiLogo - SHPERO Health.jpg",
    name: "Startup One",
  },
  {
    image: "/startups/AI FOR LLP-Dr.Sachin Sharma.png",
    name: "Startup One",
  },
  {
    image: "/startups/azeeodo.jpg",
    name: "Startup One",
  },
  {
    image: "/startups/DASS SRL LOGO - Chanchal Dass.png",
    name: "Startup One",
  },
  {
    image: "/startups/Decipher Logo.jpg",
    name: "Startup One",
  },

  {
    image: "/startups/download.png",
    name: "Startup One",
  },
  {
    image: "/startups/healthcare.png",
    name: "Startup One",
  },

  {
    image: "/startups/IMG-20220429-WA0029.jpg",
    name: "Startup One",
  },
  {
    image: "/startups/IMG-20220922-WA0006.jpg",
    name: "Startup One",
  },
  {
    image: "/startups/logo - Ygen Healthcare.png",
    name: "Startup One",
  },
  {
    image: "/startups/Logo 11 - Manish Raval.png",
    name: "Startup One",
  },
  {
    image: "/startups/logo_page-0001.jpg",
    name: "Startup One",
  },
  {
    image: "/startups/LOGO-removebg-preview.png",
    name: "Startup One",
  },

  {
    image: "/startups/New Ingress Logo Final-01.png",
    name: "Startup One",
  },
  {
    image: "/startups/SayitDoc_logo_-_Yash_Bhatt-rerrrmovebg-preview.png",
    name: "Startup One",
  },
  {
    image:
      "/startups/Smile in Hour® Cosmetic Salon Beauty Dental Implant Clinic Ahmedabad, Delhi, Mumbai India Logo Tr - Smile in Hour.png",
    name: "Startup One",
  },
  {
    image: "/startups/sns logo - SynerSense (1).png",
    name: "Startup One",
  },
  {
    image: "/startups/WhatsApp-Image-2022-09-03-at-14.06.22.jpg",
    name: "Startup One",
  },
  // Add more startups as needed
];

// Export page
const StartupsPageWrapper = () => {
  return <StartupsPage startups={startups} />;
};

export default StartupsPageWrapper;
