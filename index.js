import React from 'react';
import ReactDOM from 'react-dom';
import { Route,Switch, Link, BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Documentation from './Documentation';
import Source from './Source';
const routing =(
   
<Router>
      <div className="links">
      
                <a href="/">Home</a>
                <a href="/Documentation">Documentation</a>
                <a href="/Source">Source</a>
      
      <Switch>
         <Route exact path="/" component={App} ></Route>
         <Route path="/Documentation" component={Documentation} ></Route>
         <Route path="/Source" component={Source} ></Route>
      </Switch>      
      </div>
</Router>
)
ReactDOM.render(
  routing,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
