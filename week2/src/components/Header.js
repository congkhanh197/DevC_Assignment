import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";

import { Ionicons, Entypo } from "@expo/vector-icons";

export default function Header(props) {
  return (
    <View
      style={[props.transparent ? styles.headerTransparent : {}, styles.header]}
    >
      <TouchableOpacity
        onPress={props.onPressBack}
        style={styles.headerBtnWrapper}
      >
        <Ionicons name="md-arrow-back" color={props.color} size={30} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={props.onPressFilter}
        style={styles.headerBtnWrapper}
      >
        <Entypo name="dots-three-horizontal" color={props.color} size={30} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    marginTop: 15,
    paddingHorizontal: 15,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  headerTransparent: {
    position: "absolute",
    zIndex: 1
  },
  headerBtnWrapper: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center"
  }
});
