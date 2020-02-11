import React from 'react';
import './App.css';
import Landing from "./Components/Landing"
import NewContact from "./Components/NewContact"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={NewContact}/>
        </Switch>
      </div>
    </Router>
    // <div className="App">
    //   {/* <Landing/> */}
    //   <NewContact/>
    // </div>
  );
}

export default App;
