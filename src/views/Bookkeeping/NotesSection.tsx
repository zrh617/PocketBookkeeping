import styled from 'styled-components';
import React, {ChangeEventHandler} from 'react';
import {Input} from 'components/Input';
import day from 'dayjs';

const Notes = styled.section`
  background: #f5f5f5;
  padding: 0 16px;
  font-size: 14px;
`;

type Props = {
  createdAt: string;
  value: string;
  onChange: (value: string) => void;
  onChangeCreatedAt: (value: string) => void;
}
const NotesSection: React.FC<Props> = (props) => {
  const createdAt = day(props.createdAt).format('YYYY-MM-DD');
  const note = props.value;
  const onChangeCreateAt: ChangeEventHandler<HTMLInputElement> = (e) => {
    props.onChangeCreatedAt(e.target.value);
  };
  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    props.onChange(e.target.value);
  };
  // @ts-ignore
  return (
    <Notes>
      <Input label="备注" placeholder="请填写备注" type="text" value={note} onChange={onChange}/>
      <Input label="日期" placeholder="请填写日期" type="date" value={createdAt} onChange={onChangeCreateAt}/>
    </Notes>
  );
};

export {NotesSection};