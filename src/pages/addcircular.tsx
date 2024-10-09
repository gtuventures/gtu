import { useForm } from "react-hook-form";
import { useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  Box,
  VStack,
} from "@chakra-ui/react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // Make sure the CSS is imported
import supabase from "../../supabase";

type FormData = {
  name: string;
  date: Date | null;
  description: string;
  link: string;
};

export default function CircularForm() {
  const { register, handleSubmit, reset, setValue } = useForm<FormData>();
  const [date, setDate] = useState<Date | null>(null);

  const onSubmit = async (data: { name: any; date: any; description: any; link: any; }) => {
    try {
      const { error } = await supabase.from("circular").insert([
        {
          name: data.name,
          date: data.date,
          description: data.description,
          link: data.link,
        },
      ]);
      if (error) {
        console.error("Error inserting data:", error);
      } else {
        console.log("Data inserted successfully!");
        reset(); // Reset the form after submission
        setDate(null); // Reset the date picker
      }
    } catch (err) {
      console.error("Error:", err);
    }
  };

  return (
    <Box maxW="md" mx="auto" p={6} boxShadow="lg" rounded="md" bg="white">
      <form onSubmit={handleSubmit(onSubmit)}>
        <VStack spacing={4}>
          {/* Event Name */}
          <FormControl isRequired>
            <FormLabel htmlFor="name">Event Name</FormLabel>
            <Input
              id="name"
              placeholder="Event Name"
              {...register("name", { required: true })}
            />
          </FormControl>

          {/* Event Date */}
          <FormControl isRequired>
            <FormLabel htmlFor="date">Event Date</FormLabel>
            <Box>
              <DatePicker
                id="date"
                selected={date}
                onChange={(date) => {
                  setDate(date);
                  setValue("date", date); // Set the date value in the form
                }}
                placeholderText="Select a date"
                className="chakra-input"
                wrapperClassName="chakra-input"
              />
            </Box>
          </FormControl>

          {/* Event Description */}
          <FormControl isRequired>
            <FormLabel htmlFor="description">Event Description</FormLabel>
            <Textarea
              id="description"
              placeholder="Event Description"
              {...register("description", { required: true })}
              rows={4}
            />
          </FormControl>

          {/* Event Link */}
          <FormControl isRequired>
            <FormLabel htmlFor="link">Event Link</FormLabel>
            <Input
              id="link"
              placeholder="https://example.com/event"
              {...register("link", { required: true })}
            />
          </FormControl>

          {/* Submit Button */}
          <Button type="submit" colorScheme="blue" width="full">
            Create Event
          </Button>
        </VStack>
      </form>
    </Box>
  );
}
