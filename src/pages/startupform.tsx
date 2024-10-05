import React, { useState, useEffect } from "react";
import { useForm, Controller, set } from "react-hook-form";
import { Text, useToast } from "@chakra-ui/react";
import supabase from "../../supabase";
import { useAuthContext } from "@/context";
import { BeatLoader } from "react-spinners";
interface State {
  districts: string[];
  state: string;
}
import {
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Checkbox,
  Stack,
  HStack,
  Card,
  CardBody,
  CheckboxGroup,
  Select,
  Textarea,
  Container,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { state } from "../components/state";

function formm() {
  const Router = useRouter();
  const toast = useToast();
  const { user } = useAuthContext();
  const form = useForm();
  const { register, handleSubmit, control, watch } = form;
  const [states, setStates] = useState<State[]>(state.states);
  const [Image, setImage] = useState<any>(null);
  const [show, setShow] = useState(false);

  interface FormInputs {
    singleErrorInput: string;
  }
  const {
    formState: { errors },
  } = useForm<FormInputs>();
  console.log(errors);

  function checkurl(url: string) {
    const prefix = "https://";
    if (url.startsWith(prefix)) {
      return url;
    } else {
      return null;
    }
  }

  const handleSubmitt = () => {
    toast({
      title: "Form submitted!",
      description: "Thank you for your Form",
      status: "success",
      duration: 3000,
      isClosable: true,
    });

    setTimeout(() => {
      Router.reload();
    }, 2000);
    Router.push("/mail");
  };

  const onSubmit = async (data: any) => {
    setShow(true);

    if (data.website !== "") {
      const website = checkurl(data.website);
      if (website) {
        data.website = website;
      } else {
        toast({
          title: "Error",
          description: "Invalid Website link",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
        setShow(false);
        return;
      }
    }

     if (data.drive !== "") {
       const drive = checkurl(data.drive);
       if (drive) {
         data.drive = drive;
       } else {
         toast({
           title: "Error",
           description: "Invalid drive link",
           status: "error",
           duration: 3000,
           isClosable: true,
         });
         setShow(false);
         return;
       }
     }

    const { error } = await supabase.from("startups").insert([{ ...data }]);

    if (error) {
      console.error("Error submitting Form:", error);
      toast({
        title: "Error",
        description: "Error submitting Form ! Please try again/contact us",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      setShow(false);
    } else {
      handleSubmitt();
    }
  };

  const selectedState = watch("State");

  const districts =
    states.find((state) => state.state === selectedState)?.districts || [];

  return (
    <>
      <>
        <Container
          maxW="container.xl"
          py={{ base: 4, md: 8, lg: 12 }} // Adds padding based on screen size
          px={{ base: 4, md: 6, lg: 8 }}
          borderRadius="md"
          shadow="lg"
        >
          <Stack spacing="4">
            <Card variant="outline">
              <CardBody>
                <Heading size="md" fontSize="26px">
                  Startup Registration for GTU Ventures.{" "}
                </Heading>
                <br />
                <FormControl isRequired>
                  <FormLabel>Startup Name</FormLabel>
                  <Input
                    {...register("startupname", {
                      required: "Enter startup Name",
                    })}
                    name="startupname"
                    placeholder="startupname"
                  />
                </FormControl>
                <br />
                <FormControl isRequired>
                  <FormLabel>Describe your idea briefly</FormLabel>

                  <b>
                    {" "}
                    <small>Provide a brief description of your startup. </small>
                  </b>
                  <Textarea
                    placeholder="Description of your startup"
                    rows={3}
                    shadow="sm"
                    focusBorderColor="brand.400"
                    {...register("discription", {
                      required: "Enter Description",
                    })}
                    fontSize={{
                      sm: "sm",
                    }}
                    defaultValue="Our startup aims to solve the problem of..."
                  />
                </FormControl>
                <br />
                <FormControl isRequired>
                  <FormLabel>email</FormLabel>
                  <Input
                    {...register("email", {
                      required: "Enter email",
                    })}
                    name="email"
                    placeholder="name@startup.com"
                  />
                  <br />
                  <Input
                    {...register("coemail", {
                      required: false,
                    })}
                    name="cofounderemail"
                    placeholder="Email Address of cofounder"
                  />
                </FormControl>
                <br />
                <FormControl isRequired>
                  <FormLabel>State</FormLabel>
                  <Select
                    {...register("State", { required: "Enter state" })}
                    name="State"
                    placeholder="Select State"
                  >
                    {states.map((stateObj) => (
                      <option key={stateObj.state} value={stateObj.state}>
                        {stateObj.state}
                      </option>
                    ))}
                  </Select>
                </FormControl>
                <br />
                <FormControl isRequired>
                  <FormLabel>District/city</FormLabel>
                  <Select
                    {...register("District", { required: "Enter District" })}
                    name="District"
                    placeholder="Select District"
                  >
                    {districts.map((district) => (
                      <option key={district} value={district}>
                        {district}
                      </option>
                    ))}
                  </Select>
                </FormControl>{" "}
                <br />
                <FormControl isRequired>
                  <FormLabel> Have you raised any fund ?</FormLabel>
                  <b>
                    {" "}
                    <small>If yes ,mention amount </small>
                  </b>
                  <Input
                    {...register("fund", {
                      required: true,
                    })}
                    name="fund"
                    placeholder="Funds raised"
                  />
                </FormControl>
                <br />
                <FormControl>
                  <FormLabel>Website</FormLabel>
                  <Input
                    {...register("website", {
                      required: false,
                    })}
                    name="website"
                    placeholder="https://example.com/ (If any)"
                  />
                </FormControl>
                <br />
                <FormControl isRequired>
                  <FormLabel> Mobile Number</FormLabel>
                  <Input
                    {...register("mobile", {
                      required: "Enter Mobile Number",
                    })}
                    name="mobile"
                    type="number"
                    placeholder="Contact number"
                  />
                </FormControl>
                <br />
                <FormControl isRequired>
                  <FormLabel>Is your startup registered ?</FormLabel>
                  <Select
                    {...register("registeration", {
                      required: "Enter stage of startup",
                    })}
                    name="registeration"
                    placeholder="Enter stage of startup"
                  >
                    <option value="Not Registered">Not Registered</option>
                    <option value="Proprietorship">Proprietorship</option>
                    <option value="Partnership Firm">Partnership Firm</option>
                    <option value="LLP">Limited Liability Partnership</option>
                    <option value="Private Limited Company">
                      Private Limited Company
                    </option>
                    <option value="One person company">
                      One person company (OPC)
                    </option>
                  </Select>

                  <br />
                </FormControl>{" "}
                <br />
                <FormControl isRequired>
                  <FormLabel>
                    {" "}
                    Is your Startup Incubated with any other Incubation Center
                    (If yes, Please write the name of Incubation center)
                  </FormLabel>
                  <Input
                    {...register("incubation", { required: false })}
                    name="incubation"
                    type="text"
                    placeholder="Yes or No (If yes, Please write the name of Incubation center)"
                  />
                </FormControl>{" "}
                <br />
                <FormControl isRequired>
                  <FormLabel>
                    Which of the following Support would you like to avail?
                    (Tick as Many)
                  </FormLabel>
                  <Controller
                    name="Standard"
                    control={control}
                    rules={{ required: "Enter standard" }}
                    render={({ field }) => (
                      <CheckboxGroup {...field}>
                        <HStack spacing="24px" wrap="wrap">
                          <Checkbox value="Infrastructure support">
                            Infrastructure support
                          </Checkbox>
                          <Checkbox value="market surveys">
                            Pre-incubation services (market surveys, gap
                            analysis, identification of target markets)
                          </Checkbox>
                          <Checkbox
                            value="Business planning and forming a company
"
                          >
                            Business planning and forming a company
                          </Checkbox>
                          <Checkbox value="training">
                            Training to develop business skills
                          </Checkbox>
                          <Checkbox value="Accounting, legal and other related services">
                            Accounting, legal and other related services
                          </Checkbox>
                          <Checkbox
                            value="Market research, sales and marketing
"
                          >
                            Market research, sales and marketing
                          </Checkbox>
                          <Checkbox value="Networking">
                            Networking with other entrepreneurs
                          </Checkbox>
                          <Checkbox
                            value="Advice on development of new products and services
"
                          >
                            Advice on development of new products and services
                          </Checkbox>
                          <Checkbox
                            value="Advice on development of new products and services
"
                          >
                            {" "}
                          </Checkbox>

                          <Checkbox value="Advice on recruitment of staff and personnel management">
                            Advice on recruitment of staff and personnel
                            management
                          </Checkbox>
                        </HStack>
                      </CheckboxGroup>
                    )}
                  />
                </FormControl>
                <br />
                {/* <FormControl as="fieldset">
                  <FormLabel as="legend">Board</FormLabel>
                  <Controller
                    name="Board"
                    control={control}
                    // defaultValue={[ "State"]}
                    rules={{ required: "Enter Board" }}
                    render={({ field }) => (
                      <CheckboxGroup {...field}>
                        <HStack spacing="24px" wrap="wrap">
                          {" "}
                          <Checkbox value="CBSE">CBSE</Checkbox>
                          <Checkbox value="ICSE">ICSE</Checkbox>
                          <Checkbox value="IB">IB</Checkbox>
                          <Checkbox value="AISSCE">AISSCE</Checkbox>
                          <Checkbox value="NIOS">NIOS</Checkbox>
                          <Checkbox value="State">State Board</Checkbox>
                        </HStack>
                      </CheckboxGroup>
                    )}
                  />
                </FormControl>
                <br /> */}
                <FormControl isRequired>
                  <FormLabel>Team Size</FormLabel>
                  <Input
                    {...register("team", { required: true })}
                    name="team"
                    placeholder="Team Size"
                  />
                </FormControl>
                <br />
                {/* <FormControl as="fieldset">
                  <FormLabel as="legend">Medium</FormLabel>
                  <Controller
                    name="medium"
                    control={control}
                    defaultValue={["Native"]}
                    rules={{ required: "Enter Medium" }}
                    render={({ field }) => (
                      <CheckboxGroup {...field}>
                        <HStack spacing="24px">
                          <Checkbox value="Hindi">Hindi Medium</Checkbox>
                          <Checkbox value="English">English Medium</Checkbox>
                          <Checkbox value="Native">Native</Checkbox>
                        </HStack>
                      </CheckboxGroup>
                    )}
                  />
                </FormControl> */}
                {/* <br /> */}
                <FormControl>
                  <FormLabel> Funding agency name</FormLabel>
                  {/* <Text fontSize="xs">if any</Text> */}
                  <Input
                    {...register("fundingagency", { required: false })}
                    name="fundingagency"
                    placeholder="Name of funding agency"
                  />
                </FormControl>{" "}
                <br />
                <FormControl>
                  <FormLabel>Pitch-deck Link </FormLabel>
                  <b>
                    {" "}
                    <small>
                      upload drive link with access(Please verify access before){" "}
                    </small>
                  </b>
                  <Input
                    {...register("drive", {
                      required: true,
                    })}
                    name="drive"
                    placeholder="https://drive.google.com/file/ "
                  />
                </FormControl>
                <br />
                {show === false ? (
                  <Button
                    colorScheme="purple"
                    size="md"
                    onClick={handleSubmit(onSubmit, (err) => {
                      const error = Object.values(err)
                        .map((error) => error?.message)
                        .filter(Boolean);

                      toast({
                        title: "Error",
                        description: error.join(",   "),
                        status: "error",
                        duration: 3000,
                        isClosable: true,
                      });
                    })}
                  >
                    Submit
                  </Button>
                ) : (
                  <Button
                    isLoading
                    colorScheme="purple"
                    spinner={<BeatLoader size={8} color="white" />}
                  >
                    Click me
                  </Button>
                )}{" "}
              </CardBody>
            </Card>
          </Stack>
        </Container>
      </>
    </>
  );
}

export default formm;
