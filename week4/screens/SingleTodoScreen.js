import React from "react";
import { View, Text, StyleSheet } from "react-native";

const SingleTodoScreen = props => {
  const { id, status, body } = props.navigation.state.params.updatedTodo;
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>
        {id}. {status}
      </Text>
      <Text style={styles.bodyText}>{body}</Text>
    </View>
  );
};

SingleTodoScreen.navigationOptions = {
  title: "Todo Detail"
};

export default SingleTodoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  headerText: {
    fontSize: 30
  },
  bodyText: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 50,
    marginHorizontal: 15
  }
});
