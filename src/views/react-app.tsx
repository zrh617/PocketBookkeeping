import React, {useState} from "react";
import {ReactEcharts} from './react-echarts';
import 'echarts/lib/component/tooltip';
import {useRecords} from '../hooks/useRecords';
import _ from 'lodash';
import day from 'dayjs';

export const ReactApp = () => {
  const {records} = useRecords();
  const today = new Date();
  const array: { date: string; value: number; }[] = [];
  for (let i = 0; i <= 29; i++) {
    const date = day(today)
      .subtract(i, 'day').format('YYYY-MM-DD');
    const found = _.find(records, {
      createdAt: date
    })?.amount;
    array.push({
      date: date, value: found ? found : 0
    });
  }
  array.sort((a, b) => {
    if (a.date > b.date) {
      return 1;
    } else if (a.date === b.date) {
      return 0;
    } else {
      return -1;
    }
  });
  const keys = array.map(item => item.date);
  const values = array.map(item => item.value);
  const [option] = useState({
    title: {
      text: '收入支出图'
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#6a7985'
        }
      }
    },
    legend: {
      data: ['总和']
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    grid: {
      left: '4%',
      right: '2%',
      bottom: '5%',
      containLabel: false
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: keys,
        axisLabel: {
          // 使用函数模板，函数参数分别为刻度数值（类目），刻度的索引
          formatter: function (value: string, index: number) {
            return value.substr(5)
          }
        }
      }
    ],
    yAxis: [
      {
        type: 'value',
        show: false
      }
    ],
    series: [
      {
        name: '总和',
        type: 'line',
        stack: '总量',
        data: values
      }
    ]
  });
  const width = document.documentElement.clientWidth;
  return (
    <div>
      <ReactEcharts option={option} scrollLeft={(width - 20) * 4.2}/>
    </div>
  );
};