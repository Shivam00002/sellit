import { Navbar } from "../components/Navbar";
import { Container, Grid, GridItem, useMediaQuery } from "@chakra-ui/react";
import { ProductCard } from "../components/ProductCard";
import Herosection from "./Mainpage/Herosection";

function Home() {
  const [isLargerThan600] = useMediaQuery('(min-width: 600px)')
  const [isLargerThan800] = useMediaQuery('(min-width: 800px)')

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
          {[...new Array(20)].map((item, index) => (
            <GridItem key={index}>
              <ProductCard />
            </GridItem>
          ))}
        </Grid>
      </Container>
    </>
  );
}

export default Home;
