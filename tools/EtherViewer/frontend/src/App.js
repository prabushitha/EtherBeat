import React, { Component } from 'react';
//import ReactRouter from 'react-router-component';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { Provider } from 'react-redux';
import store from './store';
import Dashboard from './components/Dashboard';
import Layout from "./components/Layout";
import Block from "./components/Block";

//const Locations = ReactRouter.Locations;
//const Location = ReactRouter.Location;

class App extends Component {
  render() {
    return (
        <Layout>
            <Provider store={store}>
                <Router>
                    <div>
                        <Route exact component={Dashboard} path="/" />
                        <Route component={Dashboard} path="/dashboard" />
                        <Route component={Block} path="/block/:num" />
                    </div>
                </Router>
            </Provider>
        </Layout>
    );
  }
}

export default App;
