import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router} from 'react-router-dom';
import './index.css';
import { createBrowserHistory } from 'history';
import Home from './View/home';
import * as serviceWorker from './serviceWorker';

var history = createBrowserHistory();

const routing = (
  <Router>
    <div>
      <Route exact path="/" component={Home} history={history}/>
    </div>
  </Router>
)


ReactDOM.render(routing , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
