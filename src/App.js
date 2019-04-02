import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { PrivateRoute } from './components';
import Welcome from './containers/Welcome';
import Error404 from './containers/Errors/Error404';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Welcome} />
          {/*<PrivateRoute exact path="/home" component={Home} />*/}
          <Route exact path="/404" component={Error404} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
