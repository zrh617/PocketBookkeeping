import React from 'react';
import styled from 'styled-components';

const Head = styled.div`
  line-height: 40px;
  background:cadetblue;
`
const Content = styled.div`
  text-align: center;
  font-size: 20px;
  padding: 10px 0;
  color: #fff;
`

export const Header = () => {
  return(
    <Head>
      <Content>
        口袋记账
      </Content>
    </Head>
  )
}