import React from "react";
import { ImageBackground, View, StyleSheet, ScrollView } from "react-native";
import { connect } from "react-redux";
import Constants from "expo-constants";
import TodoItem from "./TodoItem";

function CompleteScreen(props) {
  return (
    <ImageBackground
      style={styles.container}
      source={require("../assets/images/background.jpg")}
    >
      {/* <KeyboardAvoidingView enabled behavior="padding" style={{}}> */}
      <ScrollView style={{}}>
        <View style={styles.container}>
          {props.todoList.filter(todo => todo.status == 'Done').map((todo, idx) => {
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

CompleteScreen.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    alignItems: "center",
    justifyContent: "center"
  },
  todoItem: {
    margin: 5,
    padding: 10,
    minHeight: 50,
    width: "95%",
    color: "white",
    borderRadius: 5,
    flexWrap: "wrap"
  },
  todoText: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold"
  },
  todoInput: {
    width: "95%",
    minHeight: 30,
    color: "white",
    borderWidth: 1,
    marginTop: "20%",
    marginBottom: "5%",
    borderColor: "grey"
  },
  inputContainer: {
    flex: 1,
    width: "90%",
    marginTop: 20,
    marginBottom: "10%",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 100
  },
  button: {
    height: 50,
    width: "50%",
    borderRadius: 10,
    alignItems: "center",
    backgroundColor: "blue",
    justifyContent: "center"
  },
  buttonText: {
    color: "white",
    fontWeight: "bold"
  },
  scrollView: {
    flex: 1,
    paddingTop: 1000
  }
});

const mapStateToProps = state => ({
  todoList: state.todoList
});
export default connect(mapStateToProps)(CompleteScreen);
