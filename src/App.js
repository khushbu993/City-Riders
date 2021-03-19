import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Component/Home/Home";
import NotFound from "./Component/NotFound/NotFound";
import Login from "./Component/Login/Login";
import CreateAccount from "./Component/CreateAccount/CreateAccount";
import Search from "./Component/Search/Search";
import SearchResult from "./Component/SearchResult/SearchResult";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/createAccount">
          <CreateAccount />
        </Route>
        <Route path="/search">
          <Search />
        </Route>
        <Route path="/searchResult">
          <SearchResult />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
