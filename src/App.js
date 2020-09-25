import React from 'react';
import './App.css';
import {BrowserRouter , Route, Switch} from "react-router-dom";

import Landing from './component/Landing';
function App() {
  return (
    <BrowserRouter>
    <Switch>
    <Route exact path="/" component= {Landing} />
    </Switch>
    </BrowserRouter>
  );
}

export default App;
