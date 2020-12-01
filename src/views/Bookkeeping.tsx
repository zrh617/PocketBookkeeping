import Layout from '../components/Layout';
import React, {useState} from 'react';
import styled from 'styled-components';
import {CategorySection} from './Bookkeeping/CategorySection';
import {NotesSection} from './Bookkeeping/NotesSection';
import {NumberPadSection} from './Bookkeeping/NumberPadSection';
import {TagsSection} from './Bookkeeping/TagsSection';

const MyLayout = styled(Layout)`
  display:flex;
  flex-direction: column;
`;

type Category = '-' | '+'

function Bookkeeping() {
  const [selected, setSelected] = useState({
    tags: [] as string[],
    note: '',
    category: '-' as Category,
    amount: 0
  });
  const onChange = (obj: Partial<typeof selected>) => {
    setSelected({...selected, ...obj});
  };
  return (
    <MyLayout>
      <TagsSection value={selected.tags}
                   onChange={tags => onChange({tags})}/>
      <NotesSection value={selected.note}
                    onChange={note => onChange({note})}/>
      <CategorySection value={selected.category}
                       onChange={category => onChange({category})}/>
      <NumberPadSection value={selected.amount}
                        onChange={amount => onChange({amount})}
                        onOk={() => {}}/>
    </MyLayout>
  );
}

export default Bookkeeping;