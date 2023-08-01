import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import { useEffect } from "react";

export const ProductCard = () => {
  const GetData = async () => {
    try {
      let res = await axios.get("http://localhost:8000/products");
      console.log("item aaya bhai", res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    GetData();
  }, []);

  return (
    <Card w="full">
      <CardBody>
        <Image
          src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          alt="Green double couch with wooden legs"
          borderRadius="lg"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">Living room Sofa</Heading>

          <Text color="blue.600" fontSize="2xl">
            Rs.450
          </Text>
        </Stack>
      </CardBody>

      <Divider />

      <CardFooter>
        <ButtonGroup spacing="2">
          <Button variant="solid" colorScheme="blue">
            Buy now
          </Button>
          <Button variant="ghost" colorScheme="blue">
            Add to cart
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};
