import {
  Box,
  Image,
  SimpleGrid,
  Text,
  Heading,
  Container,
} from "@chakra-ui/react";

const startups = [
  {
    image: "https://gtu-e09.pages.dev/startups/azeeodo.jpg",
    name: "Startup",
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
    image: "./startups/DASS SRL LOGO - Chanchal Dass.png",
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
    image: "./startups/New Ingress Logo Final-01.png",
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

export default function StartupsGrid() {
  return (
    <Box py={{ base: 12, md: 16, lg: 20 }}>
      <Container maxW="container.xl" textAlign="center">
        <Heading as="h2" size="xl" mb={8}>
          List of Startups
        </Heading>
        <Text mb={8} color="gray.500">
          Explore the amazing startups and learn more about them.
        </Text>

        {/* A Masonry-like grid that adapts to different image sizes */}
        <SimpleGrid
          columns={{ base: 1, sm: 2, md: 3, lg: 4 }}
          spacing={6}
          templateRows="masonry"
          autoRows="minmax(150px, auto)"
        >
          {startups.map((startup, index) => (
            <Box
              key={index}
              overflow="hidden"
              borderRadius="lg"
              boxShadow="md"
              _hover={{ transform: "scale(1.05)" }}
              transition="all 0.3s"
              lineHeight="0"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Image
                src={startup.image}
                alt={startup.name}
                objectFit="cover"
                maxH="300px"
                width="100%"
                borderRadius="lg"
                _hover={{ opacity: 0.8 }}
              />
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
