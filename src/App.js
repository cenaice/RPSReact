import React from "react";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Game from "./components/Game.js";
import Modal from "./components/Modal.js";
import Play from "./components/Play.js";
import { useState } from "react";
import { Switch, Route } from "react-router-dom";

import React from "react";

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <Switch>
          <Route exact path="/">
            <Play />
          </Route>
          <Route exact path="/game">
            <Game />
          </Route>
        </Switch>
      </div>
      <Footer />
    </>
  );
}

export default App;
