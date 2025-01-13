import React from "react";
import { Navbar } from "../components/Navbar";
import {
  Button,
  Checkbox,
  Container,
  FormControl,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { BsDatabaseDash } from "react-icons/bs";
import axios from "axios";



function Admin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("data", data);
    PostItem(data);
  };

  const PostItem = async (data) => {
    try {
      let res = await axios.post("http://localhost:8000/products", data);
      console.log("ab hua", res.data);
    } catch (err) {
      console.log(err);
    }
  };


  return (
    <>
      <Container
        maxW={"container.xl"}
        display={"grid"}
        placeContent={"center"}
        mt={3}
      >
        <FormControl minW={600}>
          <FormLabel>Title</FormLabel>
          <Input type="text" {...register("Title")} mb={5} />
          <FormLabel>Product Description</FormLabel>
          <Textarea
            placeholder="Product Description..."
            {...register("ProductDesc")}
            mb={5}
          />
          <FormLabel>Price</FormLabel>
          <Input mb={5} {...register("Price")} />
          <FormLabel>Quantity</FormLabel>
          <Input type="number" {...register("Quantity")} mb={5} />
          <FormLabel>Product Image</FormLabel>
          <Input type="text" {...register("Image")} mb={5} />
          <Checkbox defaultChecked={false}>Cash on delivery</Checkbox>
          <Button
            onClick={handleSubmit(onSubmit)}
            colorScheme="blue"
            mt={2}
            width={"full"}
          >
            Submit
          </Button>
        </FormControl>
      </Container>
    </>
  );
}

export default Admin;
