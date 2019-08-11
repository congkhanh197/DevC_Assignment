import React from "react";
import { TouchableOpacity, Alert, Text, StyleSheet, View } from "react-native";
import { AntDesign, Entypo } from "@expo/vector-icons";
const TodoItem = props => {
  const statusStyle = {
    backgroundColor: props.todo.status === "Done" ? "lightgrey" : "seagreen"
  };
  const onLongPress = (todo, onDeleteTodo) => {
    const prompt = `"${todo.body}"`;
    Alert.alert(
      "Delete your todo?",
      prompt,
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => onDeleteTodo(todo.id) }
      ],
      { cancelable: true }
    );
  };
  return (
    <TouchableOpacity
      key={props.todo.body}
      style={[styles.todoItem, statusStyle]}
      onPress={() => props.onToggleTodo(props.todo.id)}
      onLongPress={() => onLongPress(props.todo, props.onDeleteTodo)}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <Text numberOfLines={1} style={styles.todoText}>
          {props.idx + 1}: {props.todo.body}
        </Text>
        {props.todo.status === "Done" ? (
          <AntDesign name="checkcircle" color="lightcyan" size={30} />
        ) : (
          <View
            style={{
              width: 30,
              height: 30,
              borderRadius: 15,
              borderWidth: 2,
              borderColor: "white"
            }}
          />
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  todoItem: {
    marginBottom: 10,
    borderRadius: 25,
    paddingHorizontal: 10,
    justifyContent: "center",
    width: "95%",
    height: 50,
    color: "white"
  },
  todoText: {
    width: "85%",
    fontSize: 17,
    color: "white",
    fontWeight: "bold"
  }
});

export default TodoItem;
