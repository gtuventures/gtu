import React from "react";
import { Box, Heading, Text, Link, Stack } from "@chakra-ui/react";

const PrivacyPolicy = () => {
  return (
    <Box maxW="800px" mx="auto" p={5}>
      <Heading as="h1" mb={4} fontSize="3xl" textAlign="center">
        Privacy Policy
      </Heading>

      <Text mb={4}>
        <strong>Effective Date:</strong> 5th October 2024
      </Text>

      <Text mb={4}>
        GTU Incubation Center (“we,” “our,” or “us”) values your privacy. This
        Privacy Policy outlines how we collect, use, and protect the personal
        information you provide when using our website [Insert Website URL] (the
        “Website”). By using this Website, you consent to the data practices
        described in this policy.
      </Text>

      <Heading as="h2" size="lg" mt={6} mb={4}>
        1. Information We Collect
      </Heading>

      <Stack spacing={3}>
        <Text>
          We collect various types of information to improve our services and
          provide a better user experience. This includes:
        </Text>
        <Text>
          - <strong>Personal Information:</strong> Information that you
          voluntarily provide, such as your name, email address, and any other
          details you submit through contact forms or registration processes.
        </Text>
        <Text>
          - <strong>Usage Data:</strong> We collect information about how you
          interact with our website, including your IP address, browser type,
          pages visited, time spent on pages, and other related statistics.
        </Text>
        <Text>
          - <strong>Cookies:</strong> We use cookies to personalize your
          experience and analyze website traffic. You can control the use of
          cookies through your browser settings.
        </Text>
      </Stack>

      <Heading as="h2" size="lg" mt={6} mb={4}>
        2. How We Use Your Information
      </Heading>

      <Stack spacing={3}>
        <Text>
          We may use the information we collect for several purposes, including:
        </Text>
        <Text>
          - <strong>To provide and maintain our services:</strong> Your data
          helps us to deliver relevant content and improve the overall
          functionality of the website.
        </Text>
        <Text>
          - <strong>To communicate with you:</strong> We may use your contact
          information to send updates, respond to inquiries, and provide
          relevant information regarding our services.
        </Text>
        <Text>
          - <strong>For analytics and improvement:</strong> Usage data is
          utilized to understand how our website is used, which allows us to
          improve and optimize the user experience.
        </Text>
      </Stack>

      <Heading as="h2" size="lg" mt={6} mb={4}>
        3. How We Share Your Information
      </Heading>

      <Stack spacing={3}>
        <Text>
          We do not sell, trade, or rent your personal information to third
          parties. We may share your data in the following situations:
        </Text>
        <Text>
          - <strong>With service providers:</strong> We may share your data with
          trusted service providers to help operate our website and conduct our
          business, provided that these parties agree to keep your information
          confidential.
        </Text>
        <Text>
          - <strong>As required by law:</strong> We may disclose your
          information if required by law or if we believe that such action is
          necessary to comply with legal processes or protect the rights,
          property, or safety of GTU Incubation Center, our users, or the
          public.
        </Text>
      </Stack>

      <Heading as="h2" size="lg" mt={6} mb={4}>
        4. Security of Your Information
      </Heading>

      <Text mb={4}>
        We take reasonable measures to protect your personal information from
        unauthorized access, use, or disclosure. However, no method of
        transmission over the Internet or electronic storage is 100% secure, and
        we cannot guarantee absolute security.
      </Text>

      <Heading as="h2" size="lg" mt={6} mb={4}>
        5. Your Choices
      </Heading>

      <Stack spacing={3}>
        <Text>
          You have the following rights regarding your personal information:
        </Text>
        <Text>
          - <strong>Opt-out:</strong> You may opt-out of receiving promotional
          communications from us by following the unsubscribe instructions
          included in those communications.
        </Text>
        <Text>
          - <strong>Access and update:</strong> You can request access to or
          correction of your personal information by contacting us at{" "}
          <Link href="mailto:support@gtuventures.com" color="teal.500">
            support@gtuventures.com
          </Link>
          .
        </Text>
      </Stack>

      <Heading as="h2" size="lg" mt={6} mb={4}>
        6. Links to Other Websites
      </Heading>

      <Text mb={4}>
        Our Website may contain links to third-party websites. We are not
        responsible for the privacy practices or the content of these sites. We
        encourage users to review the privacy policies of any external sites
        before providing personal information.
      </Text>

      <Heading as="h2" size="lg" mt={6} mb={4}>
        7. Changes to This Privacy Policy
      </Heading>

      <Text mb={4}>
        We reserve the right to update this Privacy Policy from time to time.
        Any changes will be posted on this page with an updated effective date.
        We encourage you to review this policy periodically to stay informed
        about how we are protecting your information.
      </Text>

      <Heading as="h2" size="lg" mt={6} mb={4}>
        8. Contact Us
      </Heading>

      <Text mb={4}>
        If you have any questions about this Privacy Policy or your personal
        information, please contact us at:
      </Text>

      <Text mb={4}>
        <strong>GTU Incubation Center</strong>
        <br />
        Email:{" "}
        <Link href="mailto:support@gtuventures.com" color="teal.500">
          support@gtuventures.com
        </Link>
      </Text>
    </Box>
  );
};

export default PrivacyPolicy;
