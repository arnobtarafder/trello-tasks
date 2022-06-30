import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";

import LoginScreen from "./Components/LoginScreen";
import ToDoList from "./Components/TodoList";

export const firebaseConfig = {
  apiKey: "AIzaSyAgHnSiVIlyuILRvjXyFWOtQYfWrCypKSA",
  authDomain: "trello-tasks.firebaseapp.com",
  projectId: "trello-tasks",
  storageBucket: "trello-tasks.appspot.com",
  messagingSenderId: "935339031707",
  appId: "1:935339031707:web:a8c0037c120e1bd47f1a3e"
};

firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged((user) => {
  if (user != null) {
    console.log("We are authenticated now!");
  }
});

const MainNavigator = createStackNavigator(
  {
    LoginScreen: LoginScreen,
    ToDoList: ToDoList,
  },
  {
    initialRouteName: "LoginScreen",
    defaultNavigationOptions: {
      headerShown: false,
    },
  }
);

const AppContainer = createAppContainer(MainNavigator);

export default function App() {
  return <AppContainer />;
}