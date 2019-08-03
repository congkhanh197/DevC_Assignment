import React from "react";
import { Text, View } from "react-native";

function CountResult({ title, count, percent }) {
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <View
        style={{
          width: 10,
          height: 10,
          borderRadius: 5,
          backgroundColor:
            title === "Win" ? "green" : title === "Lose" ? "red" : "yellow",
          marginRight: 10
        }}
      />
      <View>
        <Text>{title + ": " + count}</Text>
        <Text>{percent + "%"}</Text>
      </View>
    </View>
  );
}

export default CountResult;
