import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

import { convertUpperFirst } from "../utils";

const ChoiceCard = ({ player, choice: { name, image } }) => {
  const title = name && name.charAt(0).toUpperCase() + name.slice(1);

  return (
    <View style={styles.choiceContainer}>
      <Text style={styles.choiceDescription}>{player}</Text>
      <Image source={image} resizeMode="contain" style={styles.choiceImage} />
      <Text style={styles.choiceCardTitle}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  choiceContainer: { flex: 1, alignItems: "center" },
  choiceDescription: {
    fontSize: 25,
    color: "#250902",
    fontWeight: "bold",
    textDecorationLine: "underline"
  },
  choiceCardTitle: { fontSize: 30, color: "#250902" },
  choiceImage: { width: 150, height: 150, padding: 10 }
});

export default ChoiceCard;
