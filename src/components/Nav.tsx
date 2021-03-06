import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import React from 'react';
import Icon from './Icon';

const NavWrapper = styled.nav`
  background: #fff;
  line-height: 24px;
  box-shadow: 0 0 3px rgba(0,0,0,0.25);
  > ul {
    display:flex;
    > li{
      width: 33.3333%;
      text-align:center;
      >a {
        display: flex;
        flex-direction: column;
        padding: 4px 0;
        justify-content: center;
        align-items: center;
        .icon {
          width: 24px;      
          height: 24px;
        }
        &.selected{
          color: cadetblue;
          .icon{
            fill: cadetblue;
          }
        }
      }
    }
  }
`;

const Nav = () => {
  return (
    <NavWrapper>
      <ul>
        <li>
          <NavLink to="/tags" activeClassName="selected">
            <Icon name="tags"/>
            标签页
          </NavLink>
        </li>
        <li>
          <NavLink to="/bookkeeping" activeClassName="selected">
            <Icon name="bookkeeping"/>
            记账页
          </NavLink>
        </li>
        <li>
          <NavLink to="/statistics" activeClassName="selected">
            <Icon name="statistics"/>
            统计页
          </NavLink>
        </li>
        <li>
          <NavLink to="/charts" activeClassName="selected">
            <Icon name="charts"/>
            图表页
          </NavLink>
        </li>
      </ul>
    </NavWrapper>
  );
};

export default Nav;