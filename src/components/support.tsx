import { Box, Flex, Image, Text, keyframes } from "@chakra-ui/react";

// Define the animation for scrolling
const scroll = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-100%); }
`;

const CompanyShowcase = () => {
  const logos = [
    "/incubators/MSME.png",
    "/incubators/Nodalinstitute.png",
    "/incubators/SISFS.png",
    "/incubators/ssip-.png",
  ];

  return (
    <Box bg="gray.50" py={10} px={6} textAlign="center">
      {/* Title */}
      <Text fontSize="2xl" fontWeight="bold" mb={6}>
        Our Trusted Partners
      </Text>

      {/* Scrolling Logos */}
      <Box overflow="hidden" width="100%">
        <Flex
          width="200%" // Double the width to allow for smooth scrolling
          animation={`${scroll} 20s linear infinite`} // Smooth and infinite scroll
        >
          {logos.map((logo, index) => (
            <Box key={index} flexShrink={0} p={4}>
              <Image
                src={logo}
                alt={`Company ${index + 1}`}
                boxSize={["80px", "100px", "120px"]} // Responsive sizing for different screen sizes
                objectFit="contain"
              />
            </Box>
          ))}
          {/* Duplicating the logos for a continuous loop */}
          {logos.map((logo, index) => (
            <Box key={index + logos.length} flexShrink={0} p={4}>
              <Image
                src={logo}
                alt={`Company ${index + 1}`}
                boxSize={["80px", "100px", "120px"]} // Responsive sizing
                objectFit="contain"
              />
            </Box>
          ))}
        </Flex>
      </Box>
    </Box>
  );
};

export default CompanyShowcase;
