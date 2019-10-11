import React from 'react';
import './App.css';
import HomePage from "./HomePage"
import SecondPage from "./SecondPage"
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route path="/home" component={HomePage} />
          <Route  path="/option" component={SecondPage} />
        </Switch>
       
      </div>
    </Router>
  );
}

export default App;
