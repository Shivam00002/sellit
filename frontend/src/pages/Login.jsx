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

function Login() {
  const navigate = useNavigate();

  return (
    <Box width={"100vw"} height={"100vh"} display="grid" placeContent="center">
      <Card maxW={"400px"} width="400px">
        <CardHeader>
          <Heading size={"md"}>Login</Heading>
        </CardHeader>
        <CardBody>
          <FormControl>
            <FormLabel>Email address</FormLabel>
            <Input type="email" />
            <FormLabel mt={2}>Password</FormLabel>
            <Input type="password" />
            <Button w={"100%"} mt={4} colorScheme="teal" type="submit">
              Login
            </Button>
          </FormControl>
        </CardBody>
        <CardFooter>
          <Text onClick={() => navigate("/home")}>
            Don't have an account ? Signup
          </Text>
        </CardFooter>
      </Card>
    </Box>
  );
}

export default Login;
