import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";

import Profile from "./Profile";
import ImageDetail from "./ImageDetail";
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
