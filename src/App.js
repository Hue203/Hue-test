import React from "react";
import { Switch, Route } from "react-router-dom";
import "App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom";
import Homepage from "./Containers/pages/Homepage";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={Homepage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
