import React from 'react'
import { Navbar } from '../components/Navbar'
import { Button, Checkbox, Container, FormControl, FormLabel, Input, Textarea } from '@chakra-ui/react'



function Admin() {
  return (
    <>
   <Navbar/>
   <Container maxW={"container.xl"} display={"grid"} placeContent={"center"} mt={3} >
   <FormControl minW={600}>
  <FormLabel>Title</FormLabel>
  <Input type='text'  mb={5}/>
  <FormLabel>Desc</FormLabel>
  <Textarea placeholder='Product Description...' mb={5}/>
  <FormLabel>Price</FormLabel>
  <Input  mb={5}/>
  <FormLabel>Title</FormLabel>
  <Input type='text'  mb={5}/>
  <FormLabel>Quantity</FormLabel>
  <Input type='number'  mb={5}/>
<FormLabel>Product Image</FormLabel>
<Input type='file' mb={5} />
<Checkbox defaultChecked>Cash on delivery</Checkbox>
<Button colorScheme='blue' mt={2} width={'full'}>Submit</Button>
</FormControl>
   </Container>
    </>
  )
}

export default Admin