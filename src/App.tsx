import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import styled from 'styled-components';
import Nav from './components/Nav';

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`
const Main = styled.div`
  flex-grow: 1;
  overflow: auto;
`

function App() {
  // @ts-ignore
  return (
    <Router>
      <Wrapper>
        <Main>
          <Switch>
            <Redirect exact from="/" to="/bookkeeping"/>
            <Route path="/tags">
              <Tags />
            </Route>
            <Route path="/bookkeeping">
              <Bookkeeping />
            </Route>
            <Route path="/statistics">
              <Statistics />
            </Route>
            <Route path="*">
              <NoMatch />
            </Route>
          </Switch>
        </Main>
        <Nav/>
      </Wrapper>
    </Router>
  );
}

function NoMatch(){
  return(
    <h2>页面不存在</h2>
  )
}

function Statistics() {
  return <h2>统计页面</h2>;
}

function Tags() {
  return <h2>标签页面</h2>;
}

function Bookkeeping() {
  return <h2>记账页面</h2>;
}
export default App;
