import 'bootstrap/dist/css/bootstrap.min.css';
import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,

  Route, Switch
} from "react-router-dom";
import './App.css';
import CreateAccount from "./Component/CreateAccount/CreateAccount";
import Home from "./Component/Home/Home";
import Login from "./Component/Login/Login";
import NotFound from "./Component/NotFound/NotFound";
import PrivateRoute from "./Component/PrivateRoute/PrivateRoute";
import Rides from "./Component/Rides/Rides";
import Search from "./Component/Search/Search";
import SearchResult from "./Component/SearchResult/SearchResult";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      {/* <p>Name: {loggedInUser.name}</p> */}
      <Router>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/ride/:id">
            <Rides/>
          </Route>
          <PrivateRoute path="/search">
            <Search/>
          </PrivateRoute>
          <Route path="/searchResult">
            <SearchResult/>
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/createAccount">
            <CreateAccount/>
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
