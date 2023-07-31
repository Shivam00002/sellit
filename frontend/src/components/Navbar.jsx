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
import {
  useNavigate,
  useFetcher,
  useMatch,
  useLocation,
} from "react-router-dom";

import { ThemeSwitch } from "./ThemeSwitch";

export const Navbar = () => {
  const navigate = useNavigate();
  let location = useLocation();
  const { pathname } = location;

  return (
    <Box borderBottom="1px" borderColor="#dbdbdb">
      <Container maxW="container.xl">
        <Flex justifyContent="space-between" p={2} alignItems="center">
          <Text cursor="pointer" size={34}
           onClick={() => navigate("/home")}
           fontWeight={pathname.split("/")[1] === "home" && "bold"}
          >
            SellIt
          </Text>
          <Flex alignItems="center" cursor="pointer" gap={3}>
            <ThemeSwitch />
            <Text
              onClick={() => navigate("/home")}
              fontWeight={pathname.split("/")[1] === "home" && "bold"}
            >
              Home
            </Text>
            <Text
              onClick={() => navigate("/admin")}
              fontWeight={pathname.split("/")[1] === "admin" && "bold"}
            >
              Admin
            </Text>
            <Text
              onClick={() => navigate("/mycart")}
              fontWeight={pathname.split("/")[1] === "mycart" && "bold"}
            >
              Cart
            </Text>

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
