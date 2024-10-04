"use client";

import * as React from "react";
import {
  Box,
  Image,
  Text,
  Heading,
  IconButton,
  Spinner,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import supabase from "../../supabase";

// Initialize the Supabase client

export default function ImageCarousel() {
  const [slides, setSlides] = React.useState<
    { image: string; title: string; description: string }[]
  >([]);
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  // Fetch images from Supabase bucket
  const fetchImages = async () => {
    try {
      const { data, error } = await supabase.storage.from("slider2").list();

      if (error) throw error;

      if (data && data.length > 0) {
        const imageSlides = data.map((file) => ({
          image: supabase.storage.from("slider2").getPublicUrl(file.name).data
            .publicUrl,
          title: file.metadata?.title || "Default Title", // Add title if available in metadata
          description: file.metadata?.description || "Default Description", // Add description if available
        }));

        setSlides(imageSlides);
      } else {
        setError("No images found in the slider2 bucket.");
      }
    } catch (err) {
      setError("Error fetching images.");
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    fetchImages();
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const handlePrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  if (loading) {
    return <Spinner size="xl" color="blue.500" />;
  }

  if (error) {
    return (
      <Alert status="error">
        <AlertIcon />
        {error}
      </Alert>
    );
  }

  if (slides.length === 0) {
    return (
      <Alert status="info">
        <AlertIcon />
        No slides to display.
      </Alert>
    );
  }

  return (
    <Box
      maxW={{ base: "sm", sm: "md", md: "lg", lg: "xl", xl: "2xl" }}
      mx="auto"
      py={4}
    >
      <Text fontSize="2xl" fontWeight="bold" textAlign="center" mb={4}>
        Events By GTU Ventures
      </Text>

      <Box
        position="relative"
        borderRadius="md"
        overflow="hidden"
        height="400px"
      >
        {slides.map((slide, index) => (
          <Image
            key={index}
            src={slide.image}
            alt={`Slide ${index + 1}`}
            objectFit="cover"
            width="100%"
            height="400px"
            position="absolute"
            top="0"
            left="0"
            transition="opacity 0.6s ease-in-out"
            opacity={index === currentIndex ? 1 : 0}
          />
        ))}

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
        >
          <Heading
            color="white"
            fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
            mb={2}
          >
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
            variant="outline"
          />
          <IconButton
            aria-label="Next Slide"
            icon={<AiOutlineRight />}
            onClick={handleNext}
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
          variant="outline"
        />
        <IconButton
          aria-label="Next Slide"
          icon={<AiOutlineRight />}
          onClick={handleNext}
          variant="outline"
        />
      </Box>
    </Box>
  );
}
