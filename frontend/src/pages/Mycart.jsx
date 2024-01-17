import React, { useContext } from 'react';
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
} from '@chakra-ui/react';
import { CartContext } from '../ContextProvider';


const Mycart = () => {
  const { cartItem, setCartItem } = useContext(CartContext);

  const handleDelete = (productId) => {
    const updatedCart = cartItem.filter((product) => product.id !== productId);
    setCartItem(updatedCart);
  };

  return (
    <Card w="full">
      {cartItem.map((product) => (
        <CardBody key={product.id}>
          <Image
            src={product.cod}
            alt={product.title}
            borderRadius="lg"
            height={100}
            width={100}
          />
          <Stack mt="6" spacing="3">
            <Heading size="md">{product.title}</Heading>
            <Text>
              <b>Description:</b> {product.description}
            </Text>
            <Text color="blue.600" fontSize="2xl">
              Rs.{product.price}
            </Text>
          </Stack>
          <Divider />

          <CardFooter>
            <ButtonGroup spacing="2">
              <Button
                variant="ghost"
                colorScheme="red"
                onClick={() => handleDelete(product.id)} 
              >
                Delete from cart
              </Button>
            </ButtonGroup>
          </CardFooter>
        </CardBody>
      ))}
    </Card>
  );
};

export default Mycart;
