import React from "react";
import {ReactEcharts} from './react-echarts';
import 'echarts/lib/component/tooltip';
import {useRecords} from '../hooks/useRecords';
import _ from 'lodash';
import day from 'dayjs';

export const ReactApp = () => {
  const {records} = useRecords();
  const width = document.documentElement.clientWidth;
  const today = new Date();
  const expendArray: { date: string; value: number; }[] = [];
  const incomeArray: { date: string; value: number; }[] = [];
  for (let i = 0; i <= 29; i++) {
    const date = day(today)
      .subtract(i, 'day').format('YYYY-MM-DD');
    const foundExpend = _.find(records, {
      createdAt: date,
      category: '-'
    })?.amount;
    const foundIncome = _.find(records, {
      createdAt: date,
      category: '+'
    })?.amount;
    expendArray.push({
      date: date, value: foundExpend ? foundExpend : 0
    });
    incomeArray.push({
      date: date, value: foundIncome ? foundIncome : 0
    });
  }
  const dateSort = (variable: { date: string; value: number }[]) => {
    // @ts-ignore
    variable.sort((a: { date: number; }, b: { date: number; }) => {
      if (a.date > b.date) {
        return 1;
      } else if (a.date === b.date) {
        return 0;
      } else {
        return -1;
      }
    });
  }
  dateSort(expendArray)
  dateSort(incomeArray)
  const keys = incomeArray.map(item => item.date);
  const expendValues = expendArray.map(item => item.value);
  console.log('expendValues');
  console.log(expendValues);
  const incomeValues = incomeArray.map(item => item.value);
  console.log('incomeValues');
  console.log(incomeValues);
  const option = {
    title: {
      text: '收入支出图'
    },
    tooltip: {
      trigger: 'axis',
    },
    legend: {
      data: ['支出','收入']
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
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
        position: 'right'
      }
    ],
    series: [
      {
        name: '支出',
        type: 'line',
        stack: '支出',
        data: expendValues
      },
      {
        name: '收入',
        type: 'line',
        stack: '收入',
        data: incomeValues
      }
    ]
  };
  return (
    <div>
      <ReactEcharts option={option} scrollLeft={(width - 20) * 4.2}/>
    </div>
  );
};