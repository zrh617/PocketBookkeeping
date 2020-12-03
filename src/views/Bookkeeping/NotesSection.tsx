import styled from 'styled-components';
import React, {ChangeEventHandler, useRef} from 'react';
import {Input} from 'components/Input';

const Notes = styled.section`
  background: #f5f5f5;
  padding: 0 16px;
  font-size: 14px;
`;

type Props = {
  value: string;
  onChange: (value: string) => void;
}
const NotesSection: React.FC<Props> = (props) => {
  const note = props.value;
  const onChange:ChangeEventHandler<HTMLInputElement> = (e) => {
    props.onChange(e.target.value);
  };
  return (
    <Notes>
      <Input label="备注" type="text" value={note} onChange={onChange} />
    </Notes>
  );
};

export {NotesSection};