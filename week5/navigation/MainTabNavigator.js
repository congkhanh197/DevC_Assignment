import React from "react";
import { Platform } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

import TabBarIcon from "../components/TabBarIcon";
import HomeScreen from "../screens/HomeScreen";
import SearchScreen from "../screens/SearchScreen";
import DiscoveryScreen from "../screens/DiscoveryScreen";
import PublisherScreen from "../screens/PublisherScreen";

const config = Platform.select({
  web: { headerMode: "screen" },
  default: {}
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: "Top Headlines",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-globe" : "md-globe"}
    />
  )
};

HomeStack.path = "";

const SearchStack = createStackNavigator(
  {
    Search: SearchScreen
  },
  config
);

SearchStack.navigationOptions = {
  tabBarLabel: "Search",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-search" : "md-search"}
    />
  )
};

SearchStack.path = "";

const DiscoveryStack = createStackNavigator(
  {
    Discovery: DiscoveryScreen,
    Publisher: PublisherScreen
  },
  config
);

DiscoveryStack.navigationOptions = {
  tabBarLabel: "Discovery",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-albums" : "md-albums"}
    />
  )
};

DiscoveryStack.path = "";

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  SearchStack,
  DiscoveryStack
});

tabNavigator.path = "";

export default tabNavigator;
