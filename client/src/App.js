import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

import AuthPage from "./components/Auth";

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Redirect from="/" to="/auth" exact/>
        <Route path="/auth" component={ AuthPage } />
        <Route path="/events" component={null} />
        <Route path="/bookings" component={null} />
      </Switch>

    </BrowserRouter>

  );
}

export default App;
