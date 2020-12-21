import React, {useRef, useEffect} from "react";
import * as echarts from 'echarts';
import styled from 'styled-components';

const Main = styled.div`
  flex-grow: 1;
  overflow: auto;
`;
type Props = {
  option: any
  scrollLeft?: number
}
export const ReactEcharts: React.FC<Props> = (props) => {
  const {option} = props;
  const container = useRef(null);
  const chart = useRef(null);
  const chartWrapper = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const width = document.documentElement.clientWidth;
    const height = document.documentElement.clientHeight;
    // @ts-ignore
    container.current.style.width = `${(width - 20) * 4.2}px`!;
    // @ts-ignore
    container.current.style.height = `${height - 56}px`;
    // @ts-ignore
    chart.current = echarts.init(container.current, 'dark');
  }, []);
  useEffect(() => {
    // @ts-ignore
    chart.current.setOption(option);
  }, [option]);
  useEffect(() => {
    if (!chartWrapper.current) {return;}
    chartWrapper.current.scrollLeft = props.scrollLeft!;
  }, [props.scrollLeft]);
  return (
    <Main ref={chartWrapper}>
      <div ref={container}/>
    </Main>
  );
};