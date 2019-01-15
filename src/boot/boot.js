import React from "react";
import AppNavigator from "./AppNavigator";
import { Root, StyleProvider } from "native-base";

const Boot = () => {
  return (
    <Root>
      <AppNavigator />
    </Root>
  );
};
export default Boot;
