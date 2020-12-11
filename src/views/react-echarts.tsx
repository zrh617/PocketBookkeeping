import React, {useRef, useEffect} from "react";
import * as echarts from 'echarts';
import styled from 'styled-components';

const Content = styled.div`
`
export function ReactEcharts(props: any) {
  const {option, loading} = props;
  const container = useRef(null);
  const chart = useRef(null);
  useEffect(() => {
    const width = document.documentElement.clientWidth;
    const height = document.documentElement.clientHeight;
    // @ts-ignore
    container.current.style.width = `${(width - 20) * 4.2}px`;
    // @ts-ignore
    container.current.style.height = `${height}px`;
    // @ts-ignore
    chart.current = echarts.init(container.current, 'dark');
  }, []);
  useEffect(() => {
    // @ts-ignore
    chart.current.setOption(option);
  }, [option]);
  useEffect(() => {
    if (loading) {
      // @ts-ignore
      chart.current.showLoading();
    } else {
      // @ts-ignore
      chart.current.hideLoading();
    }
  }, [loading]);
  return (
    <Content>
      <div ref={container}/>
    </Content>
  );
}
