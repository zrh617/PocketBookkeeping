import Layout from '../components/Layout';
import React, {useState} from 'react';
import styled from 'styled-components';
import {CategorySection} from './Bookkeeping/CategorySection';
import {NotesSection} from './Bookkeeping/NotesSection';
import {NumberPadSection} from './Bookkeeping/NumberPadSection';
import {TagsSection} from './Bookkeeping/TagsSection';
import {useRecords} from 'hooks/useRecords';

const MyLayout = styled(Layout)`
  display:flex;
  flex-direction: column;
`;

type Category = '-' | '+'

const defaultFormData = {
  tagIds: [] as number[],
  createdAt: new Date(+new Date()+8*3600*1000).toISOString().replace(/T/g, ' ').replace(/\.[\d]{3}Z/, '').split(' ')[0],
  note: '',
  category: '-' as Category,
  amount: 0
};

const CategoryWrapper = styled.div`
  background:cadetblue;
`;

function Bookkeeping() {
  const [selected, setSelected] = useState(defaultFormData);
  const {addRecord} = useRecords();
  const onChange = (obj: Partial<typeof selected>) => {
    setSelected({...selected, ...obj});
  };
  const submit = () => {
    if (addRecord(selected)) {
      alert('保存成功');
      setSelected(defaultFormData);
    }
  };
  const height = document.documentElement.clientHeight;
  return (
    <MyLayout scrollTop={height}>
      <CategoryWrapper>
        <CategorySection value={selected.category}
                         onChange={category => onChange({category})}/>
      </CategoryWrapper>
      <TagsSection value={selected.tagIds}
                   onChange={tagIds => onChange({tagIds})}/>
      <NotesSection createdAt = {selected.createdAt}
                    value={selected.note}
                    onChange={note => onChange({note})}
                    onChangeCreatedAt={createdAt => onChange({createdAt})}
      />
      <NumberPadSection value={selected.amount}
                        onChange={amount => onChange({amount})}
                        onOk={submit}/>
    </MyLayout>
  );
}

export default Bookkeeping;