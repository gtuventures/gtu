import { Box, Heading, Text, Image, VStack, HStack } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel"; // Install if needed
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Component() {
  return (
    <Box maxW="6xl" mx="auto" px={{ base: 4, md: 6 }} py={{ base: 12, md: 16 }}>
      <VStack spacing={4} mb={{ base: 8, md: 12 }} align="center">
        <Heading
          as="h2"
          fontSize={{ base: "3xl", md: "4xl" }}
          fontWeight="bold"
        >
          Upcoming Events
        </Heading>
        <Text
          color="gray.500"
          fontSize={{ base: "md", md: "lg" }}
          textAlign="center"
          maxW="md"
        >
          Check out our upcoming events and mark your calendars!
        </Text>
      </VStack>

      <Box position="relative">
        <Carousel
          autoPlay
          interval={5000}
          infiniteLoop
          showArrows
          showIndicators
          showStatus={false}
        >
          <CarouselItem
            imgSrc="./events/1.png"
            eventTitle="Startup Pitch Competition"
          />
          <CarouselItem
            imgSrc="./events/2M8A4937.JPG"
            eventTitle="Startup Pitch Competition"
          />
          <CarouselItem
            imgSrc="./events/20221018_184401.jpg"
            eventTitle="Startup Pitch Competition"
          />
        </Carousel>
      </Box>
    </Box>
  );
}

function CarouselItem({ imgSrc, eventTitle }: {
    imgSrc: string;
    eventTitle: string;
}) {
  return (
    <Box position="relative">
      <Image
        src={imgSrc}
        alt={eventTitle}
        w="full"
        h={{ base: "400px", md: "500px" }}
        objectFit="cover"
      />
      <Box
        position="absolute"
        inset={0}
        bgGradient="linear(to-t, blackAlpha.700, transparent)"
        display="flex"
        alignItems="end"
        p={{ base: 4, md: 6 }}
      >
        <Heading as="h3" fontSize={{ base: "lg", md: "xl" }} color="white">
          {eventTitle}
        </Heading>
      </Box>
    </Box>
  );
}
