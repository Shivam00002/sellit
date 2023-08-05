import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Text,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";

function Signup() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  
  const onSubmit = (data) => {
    console.log("ramm");
    if (data.Password === data.ConfirmPass) {
      PostEmialPass(data);
      navigate("/");
    } else {
      alert("Password is incorrect");
    }
  };

  const PostEmialPass = async (data) => {
    try {
      let res = await axios.post("http://localhost:8000/signup", data);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Box width={"100vw"} height={"100vh"} display="grid" placeContent="center">
      <Card maxW={"400px"} width="400px">
        <CardHeader>
          <Heading size={"md"}>Signup</Heading>
        </CardHeader>
        <CardBody>
          <FormControl>
            <FormLabel>Email address</FormLabel>
            <Input type="email" {...register("Email")} />
            <FormLabel mt={2}>Password</FormLabel>
            <Input type="password" {...register("Password")} />
            <FormLabel mt={2}> Confirm Password</FormLabel>
            <Input type="password" {...register("ConfirmPass")} />
            <Button
              onClick={handleSubmit(onSubmit)}
              w={"100%"}
              mt={4}
              colorScheme="teal"
              type="submit"
            >
              Sign up
            </Button>
          </FormControl>
        </CardBody>
        <CardFooter>
          <Text onClick={() => navigate("/signup")}>
            Create new Account here
          </Text>
        </CardFooter>
      </Card>
    </Box>
  );
}

export default Signup;
