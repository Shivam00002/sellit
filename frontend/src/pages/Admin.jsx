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



function Admin() {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <Navbar />
      <Container
        maxW={"container.xl"}
        display={"grid"}
        placeContent={"center"}
        mt={3}
      >
        <FormControl minW={600}>
          <FormLabel>Title</FormLabel>
          <Input type="text" {...register("Title")} mb={5} />
          <FormLabel>Desc</FormLabel>
          <Textarea
            placeholder="Product Description..."
            {...register("Productdec")}
            mb={5}
          />
          <FormLabel>Price</FormLabel>
          <Input mb={5} {...register("Price")} />
          <FormLabel>Title</FormLabel>
          <Input type="text" {...register("Price")} mb={5} />
          <FormLabel>Quantity</FormLabel>
          <Input type="number" {...register("Quetity")} mb={5} />
          <FormLabel>Product Image</FormLabel>
          <Input type="text" {...register("Image")} mb={5} />
          <Checkbox defaultChecked>Cash on delivery</Checkbox>
          <Button
            method="post"
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
