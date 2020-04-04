import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import NoSsr from "@material-ui/core/NoSsr";
import { createMuiTheme } from "@material-ui/core/styles";
import Login from "./Pages/Login";
import Welcome from "./Pages/Welcome";
import Dashboard from "./Pages/Dashboard";
import Signup from "./Pages/Signup";

const client = new ApolloClient({
  uri: "http://localhost:4000",
});

const theme = createMuiTheme();

function App() {
  return (
    <ApolloProvider client={client}>
      <NoSsr>
        <ThemeProvider theme={theme}>
          <Router>
            <div className="App">
              <Switch>
                <Route path={"/"} exact>
                  <Welcome />
                </Route>
                <Route path={"/login"}>
                  <Login />
                </Route>
                <Route path={"/signup"}>
                  <Signup />
                </Route>
                <Route path={"/dashboard"}>
                  <Dashboard />
                </Route>
              </Switch>
            </div>
          </Router>
        </ThemeProvider>
      </NoSsr>
    </ApolloProvider>
  );
}

export default App;
