import { Box, SimpleGrid, Image, Text } from "@chakra-ui/react";

const CompanyShowcase = () => {
  const logos = [
    { src: "/incubators/MSME.png", name: "MSME" },
    { src: "/incubators/Nodalinstitute.png", name: "Nodal Institute" },
    { src: "/incubators/SISFS.png", name: "SISFS" },
    { src: "/incubators/ssip-.png", name: "SSIP" },
    { src: "/incubators/aim.png", name: "Atal Innovation Mission " },
  ];

  return (
    <Box bg="gray.50" py={10} px={6} textAlign="center">
      {/* Title */} 
      <Text fontSize="2xl" fontWeight="bold" mb={6}>
        Grant & Funding Support
      </Text>

      {/* Logo Grid */}
      <SimpleGrid columns={[2, 3, 5]} spacing={10} alignItems="center">
        {logos.map((logo, index) => (
          <Box key={index} textAlign="center">
            <Image
              src={logo.src}
              alt={logo.name}
              boxSize={["80px", "100px", "120px"]}
              objectFit="contain"
              mx="auto"
              mb={4}
            />
            <Text fontWeight="medium">{logo.name}</Text>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default CompanyShowcase;
