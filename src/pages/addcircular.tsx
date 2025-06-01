import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  Box,
  VStack,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  IconButton,
  useToast,
} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // Make sure the CSS is imported
import supabase from "../../supabase";

type FormData = {
  name: string;
  date: Date | null;
  description: string;
  link: string;
};

type Circular = {
  id: number;
  name: string;
  date: string;
  description: string;
  link: string;
};

export default function CircularForm() {
  const { register, handleSubmit, reset, setValue } = useForm<FormData>();
  const [date, setDate] = useState<Date | null>(null);
  const [circulars, setCirculars] = useState<Circular[]>([]);
  const toast = useToast();

  useEffect(() => {
    fetchCirculars();
  }, []);

  const fetchCirculars = async () => {
    try {
      const { data, error } = await supabase
        .from("circular")
        .select("*")
        .order("date", { ascending: false });

      if (error) {
        throw error;
      }

      setCirculars(data || []);
    } catch (error) {
      console.error("Error fetching circulars:", error);
      toast({
        title: "Error fetching circulars",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const handleDelete = async (id: number) => {
    try {
      const { error } = await supabase.from("circular").delete().eq("id", id);

      if (error) {
        throw error;
      }

      setCirculars(circulars.filter((circular) => circular.id !== id));
      toast({
        title: "Circular deleted successfully",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } catch (error) {
      console.error("Error deleting circular:", error);
      toast({
        title: "Error deleting circular",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const onSubmit = async (data: FormData) => {
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
        throw error;
      }

      toast({
        title: "Circular created successfully",
        status: "success",
        duration: 3000,
        isClosable: true,
      });

      reset();
      setDate(null);
      fetchCirculars(); // Refresh the list after adding
    } catch (err) {
      console.error("Error:", err);
      toast({
        title: "Error creating circular",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Box maxW="container.lg" mx="auto" p={6}>
      <Box boxShadow="lg" rounded="md" bg="white" p={6} mb={6}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <VStack spacing={4}>
            <FormControl isRequired>
              <FormLabel htmlFor="name">Event Name</FormLabel>
              <Input
                id="name"
                placeholder="Event Name"
                {...register("name", { required: true })}
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel htmlFor="date">Event Date</FormLabel>
              <Box>
                <DatePicker
                  id="date"
                  selected={date}
                  onChange={(date) => {
                    setDate(date);
                    setValue("date", date);
                  }}
                  placeholderText="Select a date"
                  className="chakra-input"
                  wrapperClassName="chakra-input"
                />
              </Box>
            </FormControl>

            <FormControl isRequired>
              <FormLabel htmlFor="description">Event Description</FormLabel>
              <Textarea
                id="description"
                placeholder="Event Description"
                {...register("description", { required: true })}
                rows={4}
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel htmlFor="link">Event Link</FormLabel>
              <Input
                id="link"
                placeholder="https://example.com/event"
                {...register("link", { required: true })}
              />
            </FormControl>

            <Button type="submit" colorScheme="blue" width="full">
              Create Event
            </Button>
          </VStack>
        </form>
      </Box>

      {/* Circulars List */}
      <Box boxShadow="lg" rounded="md" bg="white" p={6}>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Date</Th>
              <Th>Description</Th>
              <Th>Link</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {circulars.map((circular) => (
              <Tr key={circular.id}>
                <Td>{circular.name}</Td>
                <Td>{new Date(circular.date).toLocaleDateString()}</Td>
                <Td>{circular.description}</Td>
                <Td>
                  <a
                    href={circular.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Link
                  </a>
                </Td>
                <Td>
                  <IconButton
                    aria-label="Delete circular"
                    icon={<DeleteIcon />}
                    colorScheme="red"
                    size="sm"
                    onClick={() => handleDelete(circular.id)}
                  />
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </Box>
  );
}
