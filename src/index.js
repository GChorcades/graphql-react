import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "react-apollo";
import apolloClient from "./services/apollo";
import TodoList from "./componets/Todolist";

import "./styles.css";

function App() {
  return (
    <ApolloProvider client={apolloClient}>
    <h1> TODOLIST!</h1>
      <TodoList />
    </ApolloProvider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
