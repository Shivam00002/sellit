import { Navbar } from "../components/Navbar";
import { Container, Grid, GridItem, useMediaQuery } from "@chakra-ui/react";
import { ProductCard } from "../components/ProductCard";
import Herosection from "./Mainpage/Herosection";
import { useState ,useEffect} from "react";
import axios from "axios";
import {Toaster} from "react-hot-toast"

function Home() {
  const [isLargerThan600] =
 useMediaQuery('(min-width: 600px)')
  const [isLargerThan800] = useMediaQuery('(min-width: 800px)')

  const[products,setProducts]=useState([])
  const GetData = async () => {
    try {

      let res = await axios.get("http://localhost:8000/products");
      setProducts(res.data);
    } catch (err) {
      console.log(err);
    }
  };



  useEffect(() => {
    GetData();
  }, []);

  const getResponsive=()=>{
    if(isLargerThan600){

      return "repeat(3,1fr)"
    }else if(isLargerThan800){
      return "repeat(2,1fr)"
    }else{
 return "repeat(1,1fr)"
    }
  }
  return (
    <>

    
      <Herosection />
      <Container maxW={"container.xl"} mt={2}>
        <Grid templateColumns={getResponsive()} gap={3}>
          {products.map((item, index) => (
            <GridItem key={index}>
              <ProductCard item={item}/>
            </GridItem>
          ))}
        </Grid>
      </Container>
      <Toaster
  position="top-center"
  reverseOrder={false}
/>
    </>
  );
}

export default Home;
