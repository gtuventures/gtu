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
    image: "/startups/1.jpg",
    name: "Startup",
  },
  {
    image: "/startups/3.png",
    name: "Startup One",
  },
  {
    image: "/startups/6.jpg",
    name: "Startup One",
  },
  {
    image: "/startups/8.png",
    name: "Startup One",
  },
  {
    image: "/startups/9.jpg",
    name: "Startup One",
  },
  {
    image: "/startups/11.png",
    name: "Startup One",
  },
  {
    image: "/startups/12.jpg",
    name: "Startup One",
  },
  {
    image: "/startups/13.jpg",
    name: "Startup One",
  },
  {
    image: "./startups/14.jpg",
    name: "Startup One",
  },
  {
    image: "/startups/15.jpg",
    name: "Startup One",
  },
  {
    image: "/startups/16.jpg",
    name: "Startup One",
  },
  {
    image: "/startups/17.jpg",
    name: "Startup One",
  },
  {
    image: "/startups/18.png",
    name: "Startup One",
  },
  {
    image: "/startups/19.png",
    name: "Startup One",
  },
  {
    image: "/startups/20.jpg",
    name: "Startup One",
  },
  {
    image: "/startups/21.png",
    name: "Startup One",
  },
  {
    image: "/startups/22.png",
    name: "Startup One",
  },
  {
    image: "/startups/23.png",
    name: "Startup One",
  },
  {
    image: "/startups/24.png",
    name: "Startup One",
  },
  {
    image: "/startups/25.png",
    name: "Startup One",
  },
  {
    image: "/startups/26.png",
    name: "Startup One",
  },
  {
    image: "/startups/27.jpg",
    name: "Startup One",
  }
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
