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
import { Navigate, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";

function Login() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("ramm");
    PostEmialPass(data);
  };

  const PostEmialPass = async (data) => {
    try {
      let res = await axios.get(`http://localhost:8000/signup/${data.Email}`);
      console.log(res.data);
      let password = res.data[0];

      if (res.data.length >= 1) {
        if (password.password == data.Password) {
          alert("Login Success!");
          navigate("/home");
        } else {
          alert("Password not found");
        }
      } else {
        alert("Email not found");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Box width={"100vw"} height={"100vh"} display="grid" placeContent="center">
      <Card maxW={"400px"} width="400px">
        <CardHeader>
          <Heading size={"md"}>Login</Heading>
        </CardHeader>
        <CardBody>
          <FormControl>
            <FormLabel>Email address</FormLabel>
            <Input type="email" {...register("Email")} />
            <FormLabel mt={2}>Password</FormLabel>
            <Input type="password" {...register("Password")} />

            <Button
              onClick={handleSubmit(onSubmit)}
              w={"100%"}
              mt={4}
              colorScheme="teal"
              type="submit"
            >
              Login
            </Button>
          </FormControl>
        </CardBody>
        <CardFooter>
          <Text onClick={() => navigate("/signup")}>
            You don't have an Account <p className="text-[blue]">click here </p>{" "}
          </Text>
        </CardFooter>
      </Card>
    </Box>
  );
}

export default Login;
