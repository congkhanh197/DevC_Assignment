import React from "react";
import { ImageBackground, View, StyleSheet, ScrollView } from "react-native";
import { connect } from "react-redux";
import Constants from "expo-constants";
import TodoItem from "./TodoItem";

function ActiveScreen(props) {
  return (
    <ImageBackground
      style={styles.container}
      source={require("../assets/images/background.jpg")}
    >
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.contentScrollView}
      >
        <View style={styles.container}>
          {props.todoList
            .filter(todo => todo.status === "Active")
            .map((todo, idx) => {
              return (
                <TodoItem
                  idx={idx}
                  todo={todo}
                  key={todo.body}
                  onToggleTodo={() => {}}
                  onDeleteTodo={() => {}}
                />
              );
            })}
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

ActiveScreen.navigationOptions = {
  title: "Active",
  headerTitleStyle: {
    color: "white",
    textAlign: "center",
    alignSelf: "center",
    width: "90%"
  },
  headerTransparent: true
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight + 5,
    alignItems: "center"
  },
  scrollView: {
    flex: 1,
    marginTop: 20
  },
  contentScrollView: {
    alignItems: "center"
  }
});

const mapStateToProps = state => ({
  todoList: state.todoList
});
export default connect(mapStateToProps)(ActiveScreen);
