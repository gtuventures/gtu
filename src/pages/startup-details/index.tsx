import React from "react";
import {
  Box,
  Container,
  Heading,
  VStack,
  HStack,
  Text,
  Link,
  Icon,
  Divider,
  useColorModeValue,
  Badge,
} from "@chakra-ui/react";
import {
  ExternalLinkIcon,
  DownloadIcon,
  CheckCircleIcon,
  LinkIcon,
} from "@chakra-ui/icons";

function StartupDetails() {
  const bgColor = useColorModeValue("white", "gray.800");
  const borderColor = useColorModeValue("gray.200", "gray.700");

  const ResourceSection = ({
    title,
    items,
  }: {
    title: string;
    items: { text: string; link: string; isDownload?: boolean }[];
  }) => (
    <Box
      mb={8}
      p={6}
      bg={bgColor}
      borderRadius="lg"
      boxShadow="md"
      borderWidth="1px"
      borderColor={borderColor}
    >
      <HStack spacing={3} mb={4}>
        <Icon as={CheckCircleIcon} w={6} h={6} color="green.500" />
        <Heading size="md">{title}</Heading>
      </HStack>
      <VStack align="stretch" spacing={3} pl={9}>
        {items.map((item, index) => (
          <Link
            key={index}
            href={item.link}
            isExternal
            color="blue.500"
            _hover={{ color: "blue.600", textDecoration: "none" }}
          >
            <HStack spacing={2}>
              <Icon
                as={item.isDownload ? DownloadIcon : LinkIcon}
                w={4}
                h={4}
              />
              <Text>{item.text}</Text>
              {!item.isDownload && <ExternalLinkIcon mx="2px" />}
            </HStack>
          </Link>
        ))}
      </VStack>
    </Box>
  );

  return (
    <Container maxW="container.xl" py={8}>
      <Box
        mb={8}
        p={6}
        borderRadius="lg"
        bgGradient="linear(to-r, blue.500, purple.500)"
        color="white"
      >
        <Heading size="xl" textAlign="center">
          Learning & Development Resources
        </Heading>
      </Box>

      <ResourceSection
        title="Startup Idea Bank"
        items={[
          {
            text: "Click Here",
            link: "https://startuputtarakhand.uk.gov.in/ideabank",
          },
        ]}
      />

      <ResourceSection
        title="Resources"
        items={[
          {
            text: "Startup India Resources",
            link: "https://www.startupindia.gov.in/content/sih/en/reources.html",
          },
        ]}
      />

      <ResourceSection
        title="Online Courses for Entrepreneurs"
        items={[
          {
            text: "Learning & Development Courses",
            link: "https://www.startupindia.gov.in/content/sih/en/reources/l-d-listing.html",
          },
        ]}
      />

      <ResourceSection
        title="Templates"
        items={[
          {
            text: "Startup India Templates",
            link: "https://www.startupindia.gov.in/content/sih/en/reources/templates.html",
          },
          {
            text: "CA Certificate Template",
            link: "https://startuputtarakhand.uk.gov.in//attachments/CA Certificate.docx",
            isDownload: true,
          },
          {
            text: "Pitch Deck",
            link: "https://startuputtarakhand.uk.gov.in//attachments/Pitch_Deck_Template.pdf",
            isDownload: true,
          },
          {
            text: "Business Plan outline for Startups",
            link: "https://startuputtarakhand.uk.gov.in//attachments/Business_Plan_Template_V2.pdf",
            isDownload: true,
          },
          {
            text: "Financial Projection Sheet",
            link: "https://startuputtarakhand.uk.gov.in//attachments/Financial Projection Sheet template.xlsx",
            isDownload: true,
          },
          {
            text: "Funding Received Format",
            link: "https://startuputtarakhand.uk.gov.in//attachments/Details_of_Funding_Received_Template.xlsx",
            isDownload: true,
          },
          {
            text: "Utilization Certificate Format",
            link: "https://startuputtarakhand.uk.gov.in//attachments/Utilization Certificate_Final.pdf",
            isDownload: true,
          },
        ]}
      />

      <ResourceSection
        title="Resource for Incubators"
        items={[
          {
            text: "Handbook for Non profit Incubators",
            link: "https://startuputtarakhand.uk.gov.in//attachments/Handbook-for-Non-profit-Incubators_July-2017.pdf",
            isDownload: true,
          },
          {
            text: "Handbook for Setting-up of Incubator in Uttarakhand",
            link: "https://startuputtarakhand.uk.gov.in//attachments/IP-UK-IT-Dev of Incubation Centre.pdf",
            isDownload: true,
          },
        ]}
      />

      <ResourceSection
        title="Government Schemes"
        items={[
          {
            text: "Startup India Government Schemes",
            link: "https://www.startupindia.gov.in/content/sih/en/government-schemes.html",
          },
        ]}
      />

      <ResourceSection
        title="Latest Articles"
        items={[
          { text: "VCCircle", link: "https://www.vccircle.com/" },
          { text: "Inc42", link: "https://inc42.com/" },
          { text: "Y Combinator", link: "https://www.ycombinator.com/" },
          { text: "YourStory", link: "https://yourstory.com/" },
          { text: "Entrackr", link: "https://entrackr.com/" },
          { text: "TechCrunch", link: "https://techcrunch.com/" },
          { text: "Forbes", link: "https://www.forbes.com" },
          { text: "Entrepreneur", link: "https://www.entrepreneur.com/" },
        ]}
      />
    </Container>
  );
}

export default StartupDetails;
