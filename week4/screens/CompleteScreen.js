import React from "react";
import { ImageBackground, View, StyleSheet, ScrollView } from "react-native";
import { connect } from "react-redux";
import Constants from "expo-constants";
import TodoItem from "./TodoItem";

function CompleteScreen(props) {
  return (
    <ImageBackground
      style={styles.container}
      source={require("../assets/images/background.png")}
    >
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.contentScrollView}
      >
        {props.todoList
          .filter(todo => todo.status == "Done")
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
      </ScrollView>
    </ImageBackground>
  );
}

CompleteScreen.navigationOptions = {
  title: "Complete",
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
    paddingTop: Constants.statusBarHeight + 35,
    alignItems: "center",
    justifyContent: "center"
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
export default connect(mapStateToProps)(CompleteScreen);
