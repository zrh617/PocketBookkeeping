import Layout from '../components/Layout';
import React from 'react';
import styled from 'styled-components';
import {CategorySection} from './Bookkeeping/CategorySection';
import {NotesSection} from './Bookkeeping/NotesSection';
import {NumberPadSection} from './Bookkeeping/NumberPadSection';
import {TagsSection} from './Bookkeeping/TagsSection';

const MyLayout = styled(Layout)`
  display:flex;
  flex-direction: column;
`;

function Bookkeeping() {
  return (
    <MyLayout>
      <TagsSection />
      <NotesSection />
      <CategorySection />
      <NumberPadSection />
    </MyLayout>
  );
}

export default Bookkeeping;