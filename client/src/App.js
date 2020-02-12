import React from 'react';
import './App.css';
import Landing from "./Components/Landing"
import NewContact from "./Components/NewContact"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Details from "./Components/Details"

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Landing}/>
          <Route exact path="/new" component={NewContact}/>
          <Route exact path="/details/:id" component={Details}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
