import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Lobby from "./components/Lobby/Lobby";
import Chat from "./components/Chat/Chat";

const App = () => (
  <Router>
    <Route path="/" exact component={Lobby} />
    <Route path="/chat" component={Chat} />
  </Router>
);

export default App;
