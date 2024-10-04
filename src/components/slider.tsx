"use client";

import * as React from "react";
import {
  Box,
  Image,
  Text,
  Heading,
  IconButton,
} from "@chakra-ui/react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai"; // Import arrow icons

const slides = [
  {
    image: "/incubation.jpeg",
    title: "Welcome to Our World",
    description: "Discover amazing experiences waiting for you.",
  },
  {
    image: "/incub.jpeg",
    title: "Explore Nature",
    description: "Immerse yourself in breathtaking landscapes.",
  },
  {
    image: "/incub2.jpeg",
    title: "Urban Adventures",
    description: "Uncover the secrets of vibrant city life.",
  },
];

export default function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  return (
    <Box maxW={{ base: "sm", sm: "md", md: "lg", lg: "xl", xl: "2xl" }} mx="auto" py={4}>
      <Text fontSize="2xl" fontWeight="bold" textAlign="center" mb={4}>
        Events By GTU Ventures
      </Text>

      <Box position="relative" borderRadius="md" overflow="hidden">
        <Image
          src={slides[currentIndex].image}
          alt={`Slide ${currentIndex + 1}`}
          objectFit="cover"
          width="100%"
          height="400px" // Fixed height for the image
          transition="transform 0.6s ease-in-out" // Smooth transition for slide change
          transform={`translateX(${currentIndex * -100}%)`} // Slide movement
        />

        <Box
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          bg="black"
          opacity="0.4"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          p={4}
          transition="opacity 0.4s ease-in-out" // Smooth transition for text
        >
          <Heading color="white" fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }} mb={2}>
            {slides[currentIndex].title}
          </Heading>
          <Text color="white" fontSize={{ base: "sm", md: "md", lg: "lg" }}>
            {slides[currentIndex].description}
          </Text>
        </Box>

        {/* Arrows for large screens */}
        <Box
          display={{ base: "none", lg: "flex" }}
          position="absolute"
          top="50%"
          left="0"
          right="0"
          justifyContent="space-between"
          transform="translateY(-50%)"
          px={4}
        >
          <IconButton
            aria-label="Previous Slide"
            icon={<AiOutlineLeft />}
            onClick={handlePrevious}
            isDisabled={currentIndex === 0}
            variant="outline"
          />
          <IconButton
            aria-label="Next Slide"
            icon={<AiOutlineRight />}
            onClick={handleNext}
            isDisabled={currentIndex === slides.length - 1}
            variant="outline"
          />
        </Box>
      </Box>

      {/* Arrows for mobile view */}
      <Box
        display={{ base: "flex", lg: "none" }}
        justifyContent="space-between"
        mt={4}
      >
        <IconButton
          aria-label="Previous Slide"
          icon={<AiOutlineLeft />}
          onClick={handlePrevious}
          isDisabled={currentIndex === 0}
          variant="outline"
        />
        <IconButton
          aria-label="Next Slide"
          icon={<AiOutlineRight />}
          onClick={handleNext}
          isDisabled={currentIndex === slides.length - 1}
          variant="outline"
        />
      </Box>
    </Box>
  );
}
