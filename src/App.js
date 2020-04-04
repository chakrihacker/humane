import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';
import Login from './Pages/Login';
import Welcome from './Pages/Welcome';

const client = new ApolloClient({
  uri: 'http://localhost:4000',
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="App">
          <Switch>
            <Route path={"/"}>
              <Welcome />
            </Route>
            <Route path={"/login"}>
              <Login />
            </Route>
          </Switch>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
