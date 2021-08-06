import React from "react";
import "./css/tailwind.css";
import Login from "./components/Login.jsx";
import Todo from "./components/Todo.jsx";
import List from "./components/Todo/List.jsx";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/todo/list" exact component={List} />
      <Route path="/todo/:id?" exact component={Todo} />
    </Switch>
  );
}

export default App;
