import React, { Component } from 'react';
import ReactRouter from 'react-router-component';
import { Provider } from 'react-redux';
import store from './store';
import Dashboard from './components/Dashboard';

const Locations = ReactRouter.Locations;
const Location = ReactRouter.Location;

class App extends Component {
  render() {
    return (
        <Provider store={store}>
          <Locations contextual>
            <Location path="/" handler={Dashboard} />
            <Location path="/Dashboard" handler={Dashboard} />
          </Locations>
        </Provider>
    );
  }
}

export default App;
