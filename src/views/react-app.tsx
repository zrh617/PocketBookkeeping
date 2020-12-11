import React, {useRef, useState} from "react";
import {ReactEcharts} from './react-echarts';
import 'echarts/lib/component/tooltip';
import {EChartOption} from 'echarts';

export function ReactApp() {
  const xData = useRef(['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']);
  const values = useRef([820, 932, 901, 934, 1290, 1330, 1320]);
  const [option, setOption] = useState({
    title: {
      text: '堆叠区域图'
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
      data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
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
        data: [
          '周一', '周二', '周三', '周四', '周五', '周六', '周日',
          '周一', '周二', '周三', '周四', '周五', '周六', '周日',
          '周一', '周二', '周三', '周四', '周五', '周六', '周日',
          '周一', '周二', '周三', '周四', '周五', '周六', '周日',
        ]
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: [
      {
        name: '邮件营销',
        type: 'line',
        stack: '总量',
        data: [120, 132, 101, 134, 90, 230, 210]
      },
      {
        name: '联盟广告',
        type: 'line',
        stack: '总量',
        data: [220, 182, 191, 234, 290, 330, 310]
      },
      {
        name: '视频广告',
        type: 'line',
        stack: '总量',
        data: [150, 232, 201, 154, 190, 330, 410]
      },
      {
        name: '直接访问',
        type: 'line',
        stack: '总量',
        data: [320, 332, 301, 334, 390, 330, 320]
      },
      {
        name: '搜索引擎',
        type: 'line',
        stack: '总量',
        label: {
          normal: {
            show: true,
            position: 'top'
          }
        },
        data: [-820, 932, -901, 934, 1290, 1330, 1320]
      }
    ]
  });
  const [loading, setLoading] = useState(false);
  const onClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      // @ts-ignore
      setOption<EChartOption>({
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
      <ReactEcharts option={option} loading={loading}/>
      {/*<button onClick={onClick}>点击加载更多</button>*/}
    </div>
  );
}