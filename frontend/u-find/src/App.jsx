
import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navbar from "./components/Navbar"

import Home from "./pages/Home";
import LostAndFound from "./pages/LostAndFound";
import AddSelf from "./pages/AddSelf";

import "antd/dist/antd.css"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/lost-and-found" component={LostAndFound} />
          <Route exact path="/add-self" component={AddSelf} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
