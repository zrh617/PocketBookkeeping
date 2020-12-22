import React from 'react';
import {useHistory} from 'react-router-dom';
import Layout from '../../components/Layout';

export const Detail: React.FC = () => {
  const history = useHistory()
  const onClickBack = () => {
    history.goBack();
  };
  return(
    <Layout>
      hi
    </Layout>
  )
}