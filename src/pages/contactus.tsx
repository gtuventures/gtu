import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Input,
  Textarea,
  VStack,
  useToast,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import supabase from "../../supabase"; // Adjust the import path if necessary
import { NextSeo } from "next-seo";
import { Text } from "@chakra-ui/react";

export default function ContactUsPage() {
  const toast = useToast();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data: any) => {
    // Insert data into Supabase
    const { error } = await supabase
      .from("contactus") // Name of your table
      .insert([{ name: data.name, email: data.email, message: data.message }]);

    if (error) {
      toast({
        title: "Error",
        description:
          error.message || "There was an issue sending your message.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    } else {
      // Show success toast
      toast({
        title: "Form Submitted",
        description: "Your message has been sent successfully!",
        status: "success",
        duration: 5000,
        isClosable: true,
      });

      // Reset form after submission
      reset();
    }
  };

  return (
    <>
      <NextSeo
        title="Contact Us - GTU Ventures"
        description="Get in touch with GTU Ventures, a leading investment and consulting firm dedicated to helping entrepreneurs and small businesses succeed."
        openGraph={{
          url: "https://gtuventures.com/contact",
          title: "Contact Us - GTU Ventures",
          description:
            "Get in touch with GTU Ventures, a leading investment and consulting firm dedicated to helping entrepreneurs and small businesses succeed.",
          images: [
            {
              url: "https://gtu-e09.pages.dev/hihb.png",
              alt: "GTU Ventures",
            },
          ],
          site_name: "gtuventures.com",
          type: "website",
        }}
      />

      <Flex direction="column" minH="100vh">
        <Box as="main" flex="1">
          {/* Contact Us Section */}
          <Box id="contact" py={{ base: 12, md: 24, lg: 32 }}>
            <Box textAlign="center" px={{ base: 8, md: 95 }}>
              <Heading as="h2" size="xl" fontWeight="bold">
                Contact Us
              </Heading>
              <Flex direction={{ base: "column", md: "row" }} gap={8} mt={8}>
                <Flex
                  display={{ base: "none", md: "flex" }}
                  flex="1"
                  justify="center"
                  align="center"
                >
                  <Box flex="1" maxW={{ base: "100%", md: "450px" }}>
                    <Image
                      src="/contactus.webp"
                      alt="GTU Ventures"
                      rounded="lg"
                      objectFit="cover"
                      width="100%"
                      height="auto"
                    />
                  </Box>
                </Flex>
                <Box bg="white" shadow="sm" p={6} rounded="lg" flex="1">
                  <VStack
                    as="form"
                    spacing={4}
                    onSubmit={handleSubmit(onSubmit)}
                  >
                    <Input
                      placeholder="Name"
                      {...register("name", { required: "Name is required" })}
                    />
                    <Input
                      placeholder="Email / Mobile Number"
                      {...register("email", { required: "Email is required" })}
                    />
                    <Textarea
                      placeholder="Message"
                      rows={4}
                      {...register("message", {
                        required: "Message is required",
                      })}
                    />
                    <Button type="submit" colorScheme="purple" width="full">
                      Submit
                    </Button>
                  </VStack>
                </Box>
              </Flex>
            </Box>
          </Box>
        </Box>
      </Flex>

      <Box bg="gray.100" py={12} mt={12}>
        <Box textAlign="center" px={{ base: 8, md: 95 }}>
          <Box mt={8}>
            <Heading as="h4" size="md" fontWeight="bold">
              Find Us on Google Maps
            </Heading>
            <Box mt={4}>
              <a
                href="https://www.google.com/maps/place/AIC-GISC+Foundation+-+Incubation+Center+of+GTU+supported+by+AIM/@23.1069421,72.5896984,1081m/data=!3m3!1e3!4b1!5s0x395e83ca6dc190e7:0xcad563431604a1c8!4m6!3m5!1s0x395e83ac8b7546cd:0x52028b3b80a14a59!8m2!3d23.1069372!4d72.5922733!16s%2Fg%2F11hkjsjmx3?entry=ttu&g_ep=EgoyMDI0MTEyNC4xIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button colorScheme="blue">View on Google Maps</Button>
              </a>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}