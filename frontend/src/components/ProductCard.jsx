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
import { useEffect,useContext } from "react";
import { CartContext } from "../ContextProvider";
import {toast} from "react-hot-toast"


export const ProductCard = ({item}) => {
  const {setCartItem,cartItem}=useContext(CartContext)

const handleAddToCart=()=>{
  if(cartItem.includes(item)){
    return toast.error("already added to cart")
  }else{

    setCartItem([...cartItem,item])
  toast.success("added to cart");
  }
}


console.log(item);
  return (
    <Card w="full">
      <CardBody>
        <Image
          src={item?.cod}
          alt="Green double couch with wooden legs"
          borderRadius="lg"
          height={100}
          width={100}
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">{item?.title}</Heading>
<Text><b>Description</b> {item?.description}</Text>
          <Text color="blue.600" fontSize="2xl">
            Rs.{item.price}
          </Text>
        </Stack>
      </CardBody>

      <Divider />


      <CardFooter>
        <ButtonGroup spacing="2">
          <Button variant="solid" colorScheme="blue">
            Buy now
          </Button>
          <Button onClick={handleAddToCart} variant="ghost" colorScheme="blue">
            Add to cart
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};
