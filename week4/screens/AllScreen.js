import React, { Component } from "react";
import {
  Text,
  View,
  Alert,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  ImageBackground,
  KeyboardAvoidingView,
  Keyboard
} from "react-native";
import { addTodo, removeTodo, toggleTodo } from "../store";
// import { TODOS } from "../utils/data.js";

import Constants from "expo-constants";
import { connect } from "react-redux";

import TodoItem from "./TodoItem";

class AllScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoBody: ""
    };
  }

  setTodoBody = todoBody => {
    this.setState({ todoBody });
  };

  componentWillMount() {
    this.keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      this.keyboardDidShow
    );
    this.keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      this.keyboardDidHide
    );
  }

  componentWillUnmount() {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }
  keyboardDidShow = e => {
    this.setState({
      marginKeyboard: e.endCoordinates.height - 49
    });
  };

  keyboardDidHide = e => {
    this.setState({
      marginKeyboard: 0
    });
  };
  onToggleTodo = id => {
    this.props.onToggleTodo(id);
    setTimeout(() => {
      this.props.navigation.navigate("SingleTodo", {
        updatedTodo: this.props.todoList.find(todo => todo.id === id)
      });
    }, 500);
  };
  onSubmitTodo = () => {
    if (this.state.todoBody) {
      this.setTodoBody("");
      this.props.onAddTodo(this.state.todoBody);
      Keyboard.dismiss();
    }
  };

  render() {
    return (
      <ImageBackground
        style={[styles.container, { marginBottom: this.state.marginKeyboard }]}
        source={require("../assets/images/background.png")}
      >
        {/* <KeyboardAvoidingView enabled behavior="padding" style={{}}> */}
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.scrollView}
          contentContainerStyle={{
            alignItems: "center",
            backgroundColor: "rgba(0,0,0,0.3)",
            borderRadius: 20
          }}
        >
          <Text
            style={{
              color: "white",
              textAlign: "center",
              fontSize: 20,
              fontWeight: "bold",
              marginVertical: 5
            }}
          >
            Todo List ({this.props.todoList.length})
          </Text>
          {this.props.todoList.map((todo, idx) => {
            return (
              <TodoItem
                idx={idx}
                todo={todo}
                key={todo.body}
                onToggleTodo={this.onToggleTodo}
                onDeleteTodo={this.props.onDeleteTodo}
              />
            );
          })}
        </ScrollView>
        <View style={styles.inputContainer}>
          <TextInput
            value={this.state.todoBody}
            style={styles.todoInput}
            onChangeText={text => this.setTodoBody(text)}
          />
          <TouchableOpacity style={styles.button} onPress={this.onSubmitTodo}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}

AllScreen.navigationOptions = {
  header: null
};

const mapStateToProps = state => {
  // console.log(state);
  return {
    todoList: state.todoList
  };
};
const mapDispatchToProps = dispatch => ({
  onAddTodo: todoBody => dispatch(addTodo(todoBody)),
  onDeleteTodo: todoId => dispatch(removeTodo(todoId)),
  onToggleTodo: todoId => dispatch(toggleTodo(todoId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white"
  },
  inputContainer: {
    width: "100%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: "rgba(0,0,0,0.1)",
    marginHorizontal: "5%",
    alignItems: "center"
  },
  todoInput: {
    marginVertical: 10,
    width: "95%",
    minHeight: 30,
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 10,
    paddingHorizontal: 10
  },
  button: {
    height: 30,
    width: "80%",
    marginBottom: 10,
    borderRadius: 20,
    alignItems: "center",
    backgroundColor: "lightseagreen",
    justifyContent: "center"
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16
  },
  scrollView: {
    flex: 1,
    marginTop: 20
  }
});
