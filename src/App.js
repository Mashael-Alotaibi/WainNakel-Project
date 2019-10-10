import React from 'react';
import './App.css';
import FrontPage from "./FrontPage"
import OptionPage from "./OptionPage"
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/"  component={FrontPage}/>
          <Route  path="/frontpage"  component={FrontPage} />
          <Route  path="/optionpage" component={OptionPage} />
        </Switch>
       
      </div>
    </Router>
  );
}

export default App;
