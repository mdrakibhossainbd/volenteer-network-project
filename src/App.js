import React, { createContext, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import Volenteers from './components/Volenteers/Volenteers';
import Register from './components/Register/Register';
import LogIn from './components/LogIn/LogIn';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import EventTask from './components/EventTask/EventTask';
import AdminPanel from './components/AdminPanel/AdminPanel';
import AddNewEvent from './components/AdminPanel/AddNewEvent';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Header />
            <Home />
            <Volenteers />
          </Route>
          <PrivateRoute path="/register/:id">
            <Register />
          </PrivateRoute>
          <Route path="/login">
            <LogIn />
          </Route>
          <Route path="/events">
            <EventTask />
          </Route>  
          <Route path="/admin">
            <AdminPanel />
          </Route>   
          <Route path="/addevent">
            <AddNewEvent />
          </Route>                           
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
