import Layout from 'components/Layout';
import React, {ReactNode, useState} from 'react';
import {CategorySection} from './Bookkeeping/CategorySection';
import styled from 'styled-components';
import {RecordItem, useRecords} from 'hooks/useRecords';
import {useTags} from 'hooks/useTags';
import day from 'dayjs';

const CategoryWrapper = styled.div`
  background:white;
`;
const Item = styled.div`
  display: flex;
  justify-content: space-between;
  background:white;
  font-size: 18px;
  line-height: 20px;
  padding: 10px 16px;
  >.note{
    margin-right: auto;
    margin-left: 16px;
    color: #999;
  }
`;
const Header = styled.h3`
  font-size: 18px;
  line-height: 20px;
  padding: 10px 16px;
`;
const Content = styled.h4`
  font-size: 18px;
  text-align: center;
  margin-top: 10px;
`;

function Statistics() {
  const [category, setCategory] = useState<'-' | '+'>('-');
  const {records} = useRecords();
  const {getName} = useTags();
  const hash: { [k: string]: RecordItem[] } = {}; //  {'YYYY-MM-DD': [item,item]}
  const selectedRecords = records.filter(r => r.category === category);
  selectedRecords.forEach(r => {
    const key = day(r.createdAt).format("YYYY年MM月DD日");
    if (!(key in hash)) {
      hash[key] = [];
    }
    hash[key].push(r);
  });
  const array = Object.entries(hash).sort((a, b) => {
    if (a[0] === b[0]) return 0;
    if (a[0] > b[0]) return -1;
    if (a[0] < b[0]) return 1;
    return 0;
  });
  type Props = [string, RecordItem[]][]
  const findItem = (array: Props) => (
    array.map(([date, records]) =>
      <div>
        <Header>{date}</Header>
        <div>
          {records.map(r => {
            return (
              <Item>
                <div className="tags oneLine">
                  {r.tagIds.map(tagId => <span key={tagId}>{getName(tagId)}</span>)
                    .reduce((result, span, index, array) =>
                      result.concat(index < array.length - 1 ? [span, '，'] : [span]), [] as ReactNode[])
                  }
                </div>
                <div className="note">
                  {r.note && <div className="note">
                    {r.note}
                  </div>}
                </div>
                <div className="amount">
                  ￥{r.amount}
                </div>
              </Item>
            );
          })}
        </div>
      </div>
    )
  );
  return (
    <Layout>
      <CategoryWrapper>
        <CategorySection value={category}
                         onChange={value => setCategory(value)}/>
      </CategoryWrapper>
      {array.length !== 0 ? findItem(array) : <Content>当前没有数据，点击记账页面开始记账吧</Content>}
    </Layout>
  );
}


export default Statistics;