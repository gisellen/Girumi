import React from "react";

//server imports
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import client from './utils/ApolloClient'

//components
import Navbar from "./components/Navbar";
import AddNewList from "./pages/AddNewList";

//pages
import Home from "./pages/Home";
import Anime from "./pages/Anime";
import Books from "./pages/Books";
import Games from "./pages/Games";
import Movies from "./pages/Movies";

import "./App.css";

function App() {
  return (
    <>
    <ApolloProvider client={client}>
      <Router>
          {/* <FetchData /> */}
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/anime" component={Anime} />
            <Route path="/books" component={Books} />
            <Route path="/games" component={Games} />
            <Route path="/movies" component={Movies} />
            <Route path="/addnewlist" component={AddNewList} />
          </Switch>
      </Router>
      </ApolloProvider>
    </>
  );
}

export default App;
