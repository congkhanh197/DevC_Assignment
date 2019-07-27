import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";

import Profile from "./src/screens/Profile";
import ImageDetail from "./src/screens/ImageDetail";
const AppNavigator = createStackNavigator(
  {
    Profile,
    ImageDetail
  },
  {
    headerMode: "none"
  }
);
export default createAppContainer(AppNavigator);
