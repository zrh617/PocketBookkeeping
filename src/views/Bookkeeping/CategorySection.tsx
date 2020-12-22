import styled from 'styled-components';
import React, {useState} from 'react';

const Category = styled.section`
background:cadetblue;
font-size: 24px;
line-height: 16px;
  >ul{
    display: flex;
    >li{
      width: 50%;
      text-align: center;
      padding: 16px 0;
      position: relative;
      &.selected::after{
        content: '';
        display: block;
        height: 3px;
        background:#333;
        position:absolute;
        bottom: 0;
        width: 50px;
        left: 50%;
        margin-left: -25px;
      }
    }
  }
`;

type Props = {
  value: '-' | '+',
  onChange: (value: '-' | '+') => void
}
const CategorySection: React.FC<Props> = (props) => {
  const categoryMap = {'-': '支出', '+': '收入'};
  type Keys = keyof typeof categoryMap
  const [categoryList] = useState<Keys[]>(['-', '+']);
  const category = props.value;
  return (
    <Category>
      <ul>
        {categoryList.map(c =>
          <li className={category === c ? 'selected' : ''}
              onClick={() => {props.onChange(c);}} key={c}
          >
            {categoryMap[c]}
          </li>
        )}
      </ul>
    </Category>
  );
};

export {CategorySection};