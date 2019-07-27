import React from "react";
import { View, StyleSheet } from "react-native";

import { Ionicons, EvilIcons, AntDesign } from "@expo/vector-icons";

export default function BottomTab() {
  return (
    <View style={styles.bottomTab}>
      <AntDesign name="home" color="gray" size={28} />
      <Ionicons name="ios-add-circle-outline" color="gray" size={30} />
      <EvilIcons name="user" color="gray" size={38} />
    </View>
  );
}
const styles = StyleSheet.create({
  bottomTab: {
    paddingHorizontal: 30,
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly"
  }
});
