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
    </>
  );
}
