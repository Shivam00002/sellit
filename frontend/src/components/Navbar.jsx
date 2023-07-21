import {
  Box,
  Container,
  Flex,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Avatar,
  DarkMode,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { ThemeSwitch } from "./ThemeSwitch";

export const Navbar = () => {
  const navigate = useNavigate();
  return (
    <Box borderBottom="1px" borderColor="#dbdbdb">
      <Container maxW="container.xl">

        <Flex justifyContent="space-between" p={2} alignItems="center">
          <Text>SellIt</Text>
          <Flex>
            <ThemeSwitch />

            <Menu>
              <MenuButton
                bg={"white"}
                _hover={{ bg: "white" }}
                as={Button}
                
                rightIcon={<BsChevronDown />}
              >
                <Avatar
                  size="sm"
                  name="Dan Abrahmov"
                  src="https://bit.ly/dan-abramov"
                />
              </MenuButton>
              <MenuList>
                <MenuItem>Sell Item</MenuItem>
                <MenuItem>Profile</MenuItem>
                <MenuItem onClick={() => navigate("/")}>Logout</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};
