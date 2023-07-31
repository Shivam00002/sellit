import { Navbar } from "../components/Navbar";
import { Container, Grid, GridItem } from "@chakra-ui/react";
import { ProductCard } from "../components/ProductCard";
import Herosection from "./Mainpage/Herosection";

function Home() {
  return (
    <>

      <Navbar />
      <Herosection/>
      <Container maxW={"container.xl"} mt={2}>
        <Grid templateColumns="repeat(3, 1fr)" gap={3}>
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
