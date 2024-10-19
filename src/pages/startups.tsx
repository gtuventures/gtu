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
  },
  {
    image: "/startupNew/1.png",
    name: "Startup One",
  },
  {
    image: "/startupNew/2.png",
    name: "Startup One",
  },
  {
    image: "/startupNew/3.png",
    name: "Startup One",
  },
  {
    image: "/startupNew/4.png",
    name: "Startup One",
  },
  {
    image: "/startupNew/5.png",
    name: "Startup One",
  },
  {
    image: "/startupNew/6.png",
    name: "Startup One",
  },
  {
    image: "/startupNew/7.png",
    name: "Startup One",
  },
  {
    image: "/startupNew/8.png",
    name: "Startup One",
  },
  {
    image: "/startupNew/9.png",
    name: "Startup One",
  },
  {
    image: "/startupNew/10.png",
    name: "Startup One",
  },
  {
    image: "/startupNew/11.png",
    name: "Startup One",
  },
  {
    image: "/startupNew/12.png",
    name: "Startup One",
  },
  {
    image: "/startupNew/13.png",
    name: "Startup One",
  },
  {
    image: "/startupNew/14.png",
    name: "Startup One",
  },
  {
    image: "/startupNew/15.png",
    name: "Startup One",
  },
  {
    image: "/startupNew/16.png",
    name: "Startup One",
  },
  {
    image: "/startupNew/17.png",
    name: "Startup One",
  },
  {
    image: "/startupNew/18.png",
    name: "Startup One",
  },
  {
    image: "/startupNew/19.png",
    name: "Startup One",
  },
  {
    image: "/startupNew/20.png",
    name: "Startup One",
  },
  {
    image: "/startupNew/21.png",
    name: "Startup One",
  },
  {
    image: "/startupNew/22.png",
    name: "Startup One",
  },
  {
    image: "/startupNew/23.png",
    name: "Startup One",
  },
  {
    image: "/startupNew/24.png",
    name: "Startup One",
  },
  {
    image: "/startupNew/25.png",
    name: "Startup One",
  },
  {
    image: "/startupNew/26.png",
    name: "Startup One",
  },
  {
    image: "/startupNew/27.png",
    name: "Startup One",
  },
  {
    image: "/startupNew/28.png",
    name: "Startup One",
  },
  {
    image: "/startupNew/29.png",
    name: "Startup One",
  },
  {
    image: "/startupNew/30.png",
    name: "Startup One",
  },
  {
    image: "/startupNew/31.png",
    name: "Startup One",
  },
  {
    image: "/startupNew/32.png",
    name: "Startup One",
  },
  {
    image: "/startupNew/33.png",
    name: "Startup One",
  },
  {
    image: "/startupNew/34.png",
    name: "Startup One",
  },
  {
    image: "/startupNew/35.png",
    name: "Startup One",
  },
  {
    image: "/startupNew/36.png",
    name: "Startup One",
  },
  {
    image: "/startupNew/37.png",
    name: "Startup One",
  },
  {
    image: "/startupNew/38.png",
    name: "Startup One",
  },
  {
    image: "/startupNew/39.png",
    name: "Startup One",
  },
  {
    image: "/startupNew/40.png",
    name: "Startup One",
  },
  {
    image: "/startupNew/41.png",
    name: "Startup One",
  },
  {
    image: "/startupNew/42.png",
    name: "Startup One",
  },
  {
    image: "/startupNew/43.png",
    name: "Startup One",
  },
  {
    image: "/startupNew/44.png",
    name: "Startup One",
  },
  // Skipping 45
  {
    image: "/startupNew/46.png",
    name: "Startup One",
  },
  {
    image: "/startupNew/47.png",
    name: "Startup One",
  },
  {
    image: "/startupNew/48.png",
    name: "Startup One",
  },
  {
    image: "/startupNew/49.png",
    name: "Startup One",
  },
  {
    image: "/startupNew/50.png",
    name: "Startup One",
  },
  {
    image: "/startupNew/51.png",
    name: "Startup One",
  },
  {
    image: "/startupNew/52.png",
    name: "Startup One",
  },
  {
    image: "/startupNew/53.png",
    name: "Startup One",
  },
  {
    image: "/startupNew/54.png",
    name: "Startup One",
  },
  {
    image: "/startupNew/55.png",
    name: "Startup One",
  },
  {
    image: "/startupNew/56.png",
    name: "Startup One",
  },
  {
    image: "/startupNew/57.png",
    name: "Startup One",
  },
  {
    image: "/startupNew/58.png",
    name: "Startup One",
  },
  {
    image: "/startupNew/60.png",
    name: "Startup One",
  },
  {
    image: "/startupNew/61.png",
    name: "Startup One",
  },
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
