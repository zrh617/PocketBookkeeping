import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Bookkeeping from './views/Bookkeeping';
import Statistics from './views/Statistics';
import Tags from './views/Tags';
import NoMatch from './views/NoMatch';
import styled from 'styled-components';

const AppWrapper = styled.div`
 color: #333;
`;

function App() {
  // @ts-ignore
  return (
    <AppWrapper>
      <Router>
        <Switch>
          <Route path="/tags">
            <Tags/>
          </Route>
          <Route path="/bookkeeping">
            <Bookkeeping/>
          </Route>
          <Route path="/statistics">
            <Statistics/>
          </Route>
          <Redirect exact from="/" to="/bookkeeping"/>
          <Route path="*">
            <NoMatch/>
          </Route>
        </Switch>
      </Router>
    </AppWrapper>
  );
}

export default App;
