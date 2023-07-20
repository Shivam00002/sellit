import { Box, Button, Container, Flex, Link, Text } from '@chakra-ui/react'
import React from 'react'
import {useNavigate} from "react-router-dom"

export  const Navbar = () => {
    const navigate=useNavigate()
  return (
   <>

   <Box shadow={"10px 10px 10px rgba(0,0,0,.1)"} padding={2} >
    <Container maxW="container.xl">
      
     <Flex justifyContent="space-between" alignItems="center">
        <Text fontWeight="semibold" fontSize={30}>Sellit</Text>
        <Flex gap={5} fontWeight="semibold" fontSize={18} alignItems={"center"}>
            <Link  _hover={{color:"green.700"}}  href='#'>Home</Link>
            <Link   _hover={{color:"green.700"}}  href='#'>Admin</Link>
            <Link  _hover={{color:"green.700"}}  href='#'>About</Link>
            <Button onClick={()=>navigate("/login")} colorScheme='blue' size={"md"}>Login</Button>

        </Flex>
     </Flex>
    </Container>
   </Box>
   </> 
  )
}

