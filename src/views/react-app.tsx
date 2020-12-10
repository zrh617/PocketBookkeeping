import React, {useRef, useState} from "react";
import {ReactEcharts} from './react-echarts';
import 'echarts/lib/component/tooltip';
import Layout from 'components/Layout';

export function ReactApp() {
  const xData = useRef(['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']);
  const values = useRef([820, 932, 901, 934, 1290, 1330, 1320]);
  const [option, setOption] = useState({
    xAxis: {
      type: 'category',
      data: xData.current
    },
    yAxis: {
      type: 'value'
    },
    tooltip: {
      show: true
    },
    series: [{
      lineStyle: {
        color: 'blue'
      },
      itemStyle: {
        borderWidth: 10
      },
      data: values.current,
      type: 'line'
    }]
  });
  const [loading, setLoading] = useState(false);
  const onClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      // @ts-ignore
      setOption<any>({
        xAxis: {
          data: [...xData.current, 'new']
        },
        series: [{
          data: [...values.current, 1100]
        }]
      });
    }, 3000);
  };
  return (
    <div>
      <Layout>
      <ReactEcharts option={option} loading={loading}/>
      <button onClick={onClick}>点击加载更多</button>
      </Layout>
    </div>
  );
}