import { Box, Grid, Heading, Text, useColorModeValue } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const StatItem = ({
  label,
  value,
  description,
  color,
}: {
  label: any;
  value: any;
  description: any;
  color: any;
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 9000; // 9 seconds
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer); // Clean up the interval on unmount
  }, [value]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 75 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.25 }}
    >
      <Box
        bg={color}
        p={6}
        rounded="lg"
        shadow="md"
        height="200px" // Set a fixed height
        display="flex"
        flexDirection="column"
        justifyContent="center" // Center content vertically
        alignItems="center" // Center content horizontally
      >
        <Text fontSize="4xl" fontWeight="bold" mb={2} color="gray.800">
          {count}
        </Text>
        <Text fontSize="xl" mb={1} color="gray.700">
          {label}
        </Text>
        <Text fontSize="sm" color="gray.600">
          {description}
        </Text>
      </Box>
    </motion.div>
  );
};

export default function StartupStats() {
  const pastelColors = [
    useColorModeValue("pink.200", "pink.700"),
    useColorModeValue("purple.200", "purple.700"),
    useColorModeValue("blue.200", "blue.700"),
    useColorModeValue("green.200", "green.700"),
    useColorModeValue("yellow.200", "yellow.700"),
  ];

  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.800")}
      minH="100vh"
      py={12}
      px={{ base: 8, md: 95 }}
    >
      <Box maxW="7xl" mx="auto">
        <Heading
          as="h2"
          fontSize="4xl"
          fontWeight="extrabold"
          textAlign="center"
          mb={2}
          color="gray.800"
        >
          Impact by GTU Ventures
        </Heading>
        <Text fontSize="xl" textAlign="center" mb={12} color="gray.600">
          The success story of GIC. In facts & numbers.
        </Text>

        {/* Responsive Grid Layout */}
        <Grid
          templateColumns={{ base: "1fr", lg: "repeat(4, 1fr)" }} // 1 column on mobile, 4 columns on laptop+
          gap={6}
        >
          <StatItem
            label="Students Sensitised"
            value={43000}
            description=""
            color={pastelColors[0]}
          />
          <StatItem
            label="Students Projects Supported"
            value={3578}
            description=""
            color={pastelColors[1]}
          />
          <StatItem
            label="Startups/POC Supported"
            value={730}
            description=""
            color={pastelColors[2]}
          />
          <StatItem
            label="Funding Disbursed "
            value={2.55}
            description="(in Million $)"
            color={pastelColors[3]}
          />
          <StatItem
            label="Jobs Created"
            value={4100}
            description="(SSIP + NI)"
            color={pastelColors[4]}
          />
          <StatItem
            label="Jobs Created"
            value={4100}
            description="(SSIP + NI)"
            color={pastelColors[3]}
          />
          <StatItem
            label="Capacity Building Program"
            value={600}
            description=""
            color={pastelColors[2]}
          />
          <StatItem
            label="Patents Granted"
            value={102}
            description=""
            color={pastelColors[1]}
          />
        </Grid>
        <br />
        <Grid
          templateColumns={{ base: "1fr", lg: "repeat(2, 1fr)" }} // 1 column on mobile, 4 columns on laptop+
          gap={6}
        >
          {" "}
          <StatItem
            label="Revenue by startups"
            value={6.75}
            description="in million $"
            color={pastelColors[1]}
          />
          <StatItem
            label="Mentors Engaged"
            value={273}
            description="in million $"
            color={pastelColors[4]}
          />
        </Grid>

        {/* <Box mt={12}>
          <StatItem
            label="Jobs Created"
            value={4100}
            description="(SSIP + NI)"
            color={pastelColors[4]}
          />
        </Box>
        <Box mt={12}>
          <StatItem
            label="Jobs Created"
            value={4100}
            description="(SSIP + NI)"
            color={pastelColors[3]}
          />
        </Box>
        <Box mt={12}>
          <StatItem
            label="Capacity Building Program"
            value={600}
            description=""
            color={pastelColors[3]}
          />
        </Box>
        <Box mt={12}>
          <StatItem
            label="Patents Granted"
            value={102}
            description=""
            color={pastelColors[3]}
          /> */}
        {/* </Box> */}
      </Box>
    </Box>
  );
}
