import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { convertUpperFirst } from "../utils";
const Button = props => (
  <TouchableOpacity
    style={styles.buttonStyle}
    onPress={() => {
      props.onPress(props.name);
    }}
  >
    <Text style={styles.buttonText}>{convertUpperFirst(props.name)}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  buttonStyle: {
    width: 200,
    margin: 10,
    height: 50,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#640D14"
  },
  buttonText: { fontSize: 25, color: "white", fontWeight: "bold" }
});

export default Button;
