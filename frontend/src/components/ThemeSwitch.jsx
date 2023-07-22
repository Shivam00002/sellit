import { FormControl, FormLabel, Switch, useColorMode } from "@chakra-ui/react";
import React from "react";

export const ThemeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <FormControl display="flex" alignItems="center">
      <FormLabel htmlFor="email-alerts" mb="0">
        Dark Mode
      </FormLabel>
      

      <Switch

        id="email-alerts"
        colorScheme="green"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      />
    </FormControl>
  );
};
