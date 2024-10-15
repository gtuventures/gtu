import { Box, Grid, Heading, Text, useColorModeValue } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const StatItem = ({
  label,
  value,
  description,
  color,
  cr,
}: {
  label: any;
  value: any;
  description: any;
  color: any;
  cr: any;
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000; // 2 seconds for faster animation
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
        minHeight="200px" // Set min height to ensure uniform size
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Box display="flex" alignItems="baseline" mb={2}>
          <Text fontSize="4xl" fontWeight="bold" color="gray.800">
            {description} {count.toLocaleString("en-IN")}
          </Text>
          <Text fontSize="xs" fontWeight="light" ml={3}>
            {cr}
          </Text>
        </Box>
        <Text fontSize="xl" mb={1} color="gray.700" textAlign="center">
            <Text noOfLines={2}>{label}</Text>
        </Text>
        {/* <Text fontSize="sm" color="gray.600" textAlign="center">
          {description}
        </Text> */}
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
      px={{ base: 8, md: 16 }}
    >
      <Box maxW="7xl" mx="auto">
        <Heading
          as="h2"
          fontSize="4xl"
          fontWeight="extrabold"
          textAlign="center"
          mb={10} // Increased margin to add more space
          color={useColorModeValue("gray.800", "white")}
        >
          Impact by GTU Ventures
        </Heading>
<br />
        {/* Responsive Grid Layout */}
        <Grid
          templateColumns={{
            base: "1fr",
            md: "repeat(2, 1fr)",
            lg: "repeat(5, 1fr)",
          }} // Adjust for mobile, tablet, and desktop
          gap={6}
        >
          <StatItem
            label="Number of Students Sensitised"
            value={430000}
            description=""
            color={pastelColors[0]}
            cr="" 
          />
          <StatItem
            label="Students Projects Approved"
            value={3578}
            description=""
            color={pastelColors[1]}
            cr={""}
          />
          <StatItem
            label="Startups Supported by GTUVentures"
            value={730}
            description=""
            color={pastelColors[2]}
            cr={""}
          />
          <StatItem
            label="Funding Disbursed among Startups"
            value={21.17}
            description="₹"
            color={pastelColors[3]}
            cr={"cr"}
          />
          <StatItem
            label="Jobs Created by Startups"
            value={4100}
            description=""
            color={pastelColors[4]}
            cr={""}
          />
          <StatItem
            label="Capacity Building Program"
            value={600}
            description=""
            color={pastelColors[2]}
            cr={""}
          />
          <StatItem
            label="Patents Granted to Startups"
            value={102}
            description=""
            color={pastelColors[1]}
            cr={""}
          />
          <StatItem
            label="Revenue by Startups"
            value={56.02}
            description="₹"
            color={pastelColors[0]}
            cr={"cr"}
          />
          <StatItem
            label="Mentors Engaged in Startups"
            value={273}
            description=""
            color={pastelColors[4]}
            cr={""}
          />
          <StatItem
            label="Area of Incubation of GTUVentures"
            value={10000}
            description=""
            color={pastelColors[3]}
            cr={"Sq. Ft."}  
          />
        </Grid>
      </Box>
    </Box>
  );
}
