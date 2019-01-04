//react
import React from "react";
import ReactDOM from "react-dom";
//redux
import { increment, decrement, reset } from './src/redux/actions/counter';
import store from './src/redux/store';
import { Provider } from 'react-redux';
//路由
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'
//components
import Home from './src/components/home/home';
import Counter from './src/components/counter/counter';
ReactDOM.render(
  (
    <Provider store={store}>
      <Router>
        <div>
          <nav>
            |
          <Link to="/home">Home</Link>
            |
          <Link to="/counter">Counter</Link>
            |
        </nav>
          <hr />
          <div>
            <Switch>
              <Route exact path="/home" component={Home} />
              <Route path="/counter" component={Counter} />
              <Redirect to="/home" />
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  ), document.getElementById('app')
);
