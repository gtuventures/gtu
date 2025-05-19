"use client";

import * as React from "react";
import {
  Box,
  Image,
  Text,
  IconButton,
  Spinner,
  Alert,
  AlertIcon,
  useInterval,
  SimpleGrid,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  useDisclosure,
} from "@chakra-ui/react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import supabase from "../../supabase"; // Assuming you have a supabase setup

export default function ImageCarousel() {
  const [slides, setSlides] = React.useState<
    { image: string; title: string; description: string }[]
  >([]);
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);
  const [selectedImage, setSelectedImage] = React.useState<string | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = React.useState<number>(0);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const slidesPerPage = 4; // Change to 4 images per page

  // Fetch images from Supabase bucket
  const fetchImages = async () => {
    try {
      const { data, error } = await supabase.storage.from("slider2").list();

      if (error) throw error;

      if (data && data.length > 0) {
        const imageSlides = data.map((file) => ({
          image: supabase.storage.from("slider2").getPublicUrl(file.name).data
            .publicUrl,
          title: file.metadata?.title || "Default Title",
          description: file.metadata?.description || "Default Description",
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

  // Automatically move to the next slide every 5 seconds
  useInterval(() => {
    setCurrentIndex(
      (prevIndex) => (prevIndex + 1) % Math.ceil(slides.length / slidesPerPage)
    );
  }, 5000); // Change slides every 5 seconds

  const handleNext = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex + 1) % Math.ceil(slides.length / slidesPerPage)
    );
  };

  const handlePrevious = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + Math.ceil(slides.length / slidesPerPage)) %
        Math.ceil(slides.length / slidesPerPage)
    );
  };

  const handleImageClick = (imageUrl: string, index: number) => {
    setSelectedImage(imageUrl);
    setSelectedImageIndex(index);
    onOpen();
  };

  const handleModalNext = () => {
    const nextIndex = (selectedImageIndex + 1) % slides.length;
    setSelectedImageIndex(nextIndex);
    setSelectedImage(slides[nextIndex].image);
  };

  const handleModalPrevious = () => {
    const prevIndex = (selectedImageIndex - 1 + slides.length) % slides.length;
    setSelectedImageIndex(prevIndex);
    setSelectedImage(slides[prevIndex].image);
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

  // Calculate the slides to display on the current page
  const startIndex = currentIndex * slidesPerPage;
  const displayedSlides = slides.slice(startIndex, startIndex + slidesPerPage);

  return (
    <Box
      maxW={{ base: "full", md: "80%", lg: "90%" }}
      mx="auto"
      py={4}
      position="relative"
    >
      <Text fontSize="2xl" fontWeight="bold" textAlign="center" mb={4}>
        Photo Gallery
      </Text>
      <br />
      <Box position="relative" borderRadius="md" overflow="hidden">
        <SimpleGrid columns={slidesPerPage} spacing={4}>
          {displayedSlides.map((slide, index) => (
            <Box
              key={index}
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              cursor="pointer"
              onClick={() => handleImageClick(slide.image, startIndex + index)}
            >
              <Image
                src={`//wsrv.nl/?url=${slide.image}`}
                alt={`Slide ${index + 1}`}
                objectFit="cover"
                width="100%"
                height="300px"
              />
            </Box>
          ))}
        </SimpleGrid>

        {/* Navigation Arrows */}
        <IconButton
          aria-label="Previous Slide"
          icon={<AiOutlineLeft />}
          onClick={handlePrevious}
          variant="solid"
          position="absolute"
          top="50%"
          left="-50px"
          transform="translateY(-50%)"
          zIndex="1"
          bg="rgba(0, 0, 0, 0.5)"
          color="white"
          _hover={{ bg: "rgba(0, 0, 0, 0.7)" }}
          size="lg"
          display={{ base: "none", md: "flex" }}
        />
        <IconButton
          aria-label="Next Slide"
          icon={<AiOutlineRight />}
          onClick={handleNext}
          variant="solid"
          position="absolute"
          top="50%"
          right="-50px"
          transform="translateY(-50%)"
          zIndex="1"
          bg="rgba(0, 0, 0, 0.5)"
          color="white"
          _hover={{ bg: "rgba(0, 0, 0, 0.7)" }}
          size="lg"
          display={{ base: "none", md: "flex" }}
        />

        {/* Mobile Navigation Arrows */}
        <IconButton
          aria-label="Previous Slide"
          icon={<AiOutlineLeft />}
          onClick={handlePrevious}
          variant="solid"
          position="absolute"
          top="50%"
          left="10px"
          transform="translateY(-50%)"
          zIndex="1"
          bg="rgba(0, 0, 0, 0.5)"
          color="white"
          _hover={{ bg: "rgba(0, 0, 0, 0.7)" }}
          size="md"
          display={{ base: "flex", md: "none" }}
        />
        <IconButton
          aria-label="Next Slide"
          icon={<AiOutlineRight />}
          onClick={handleNext}
          variant="solid"
          position="absolute"
          top="50%"
          right="10px"
          transform="translateY(-50%)"
          zIndex="1"
          bg="rgba(0, 0, 0, 0.5)"
          color="white"
          _hover={{ bg: "rgba(0, 0, 0, 0.7)" }}
          size="md"
          display={{ base: "flex", md: "none" }}
        />
      </Box>

      {/* Pagination dots */}
      <Box textAlign="center" mt={4}>
        {Array.from({ length: Math.ceil(slides.length / slidesPerPage) }).map(
          (_, index) => (
            <Box
              as="span"
              key={index}
              display="inline-block"
              w={index === currentIndex ? "12px" : "8px"}
              h={index === currentIndex ? "12px" : "8px"}
              bg={index === currentIndex ? "blue.500" : "gray.500"}
              borderRadius="50%"
              mx={1}
            />
          )
        )}
      </Box>

      {/* Image Modal */}
      <Modal isOpen={isOpen} onClose={onClose} size="6xl">
        <ModalOverlay />
        <ModalContent bg="transparent" boxShadow="none">
          <ModalBody p={0} position="relative">
            {selectedImage && (
              <Image
                src={`//wsrv.nl/?url=${selectedImage}`}
                alt="Full size image"
                maxH="90vh"
                objectFit="contain"
                mx="auto"
              />
            )}
            <IconButton
              aria-label="Previous Image"
              icon={<AiOutlineLeft />}
              onClick={handleModalPrevious}
              variant="solid"
              position="absolute"
              left="20px"
              top="50%"
              transform="translateY(-50%)"
              bg="rgba(0, 0, 0, 0.5)"
              color="white"
              _hover={{ bg: "rgba(0, 0, 0, 0.7)" }}
              size="lg"
            />
            <IconButton
              aria-label="Next Image"
              icon={<AiOutlineRight />}
              onClick={handleModalNext}
              variant="solid"
              position="absolute"
              right="20px"
              top="50%"
              transform="translateY(-50%)"
              bg="rgba(0, 0, 0, 0.5)"
              color="white"
              _hover={{ bg: "rgba(0, 0, 0, 0.7)" }}
              size="lg"
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
}
