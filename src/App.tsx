import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Bookkeeping from './views/Bookkeeping';
import Statistics from './views/Statistics';
import Charts from './views/Charts';
import Tags from './views/Tags';
import NoMatch from './views/NoMatch';
import styled from 'styled-components';
import {Tag} from './views/Tag';
import {Detail} from './views/Statistics/Detail';

const AppWrapper = styled.div`
 color: #333;
`;

function App() {
  // @ts-ignore
  return (
    <AppWrapper>
      <Router>
        <Switch>
          <Route exact path="/tags">
            <Tags/>
          </Route>
          <Route exact path="/tags/:id">
            <Tag/>
          </Route>
          <Route exact path="/bookkeeping">
            <Bookkeeping/>
          </Route>
          <Route exact path="/statistics">
            <Statistics/>
          </Route>
          <Route exact path="/statistics/:id">
            <Detail/>
          </Route>
          <Route exact path="/charts">
            <Charts/>
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
