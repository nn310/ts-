import * as React from 'react';
import ReactEchart from 'echarts-for-react';
import { EChartsOption } from 'echarts';
import { Card } from 'antd';
interface IBarProps {}

const Bar: React.FunctionComponent<IBarProps> = (props) => {
  const MyChartOption1: EChartsOption = {
    title: {
      text: '用户骑行订单',
    },
    xAxis: {
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {
      type: 'value',
    },
    tooltip: {
      //浮框
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
      },
    },
    series: [
      {
        name: '橘子',
        type: 'bar', //类型
        data: [120, 200, 150, 80, 70, 110, 130], //数据
        showBackground: true, //背景
        backgroundStyle: {
          //背景
          color: 'rgba(180, 180, 180, 0.2)',
        },
      },
    ],
  };
  const MyChartOption2: EChartsOption = {
    title: {
      text: '用户骑行订单',
    },
    xAxis: {
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {
      type: 'value',
    },
    tooltip: {
      //浮框
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
      },
    },
    legend: {
      //标签---需要写name
      data: ['ofo', '摩拜', '小蓝'],
    },
    series: [
      {
        name: 'ofo',
        type: 'bar', //类型
        data: [120, 200, 150, 80, 70, 110, 130], //数据
        showBackground: true, //背景
        backgroundStyle: {
          //背景
          color: 'rgba(180, 180, 180, 0.2)',
        },
        color: ['#9f9'],
      },
      {
        name: '摩拜',
        type: 'bar', //类型
        data: [90, 150, 80, 200, 70, 110, 130], //数据
        showBackground: true, //背景
        backgroundStyle: {
          //背景
          color: 'rgba(180, 180, 180, 0.2)',
        },
        color: ['#99f'],
      },
      {
        name: '小蓝',
        type: 'bar', //类型
        data: [120, 70, 110, 200, 150, 80, 130], //数据
        showBackground: true, //背景
        backgroundStyle: {
          //背景
          color: 'rgba(180, 180, 180, 0.2)',
        },
        color: ['#f99'],
      },
    ],
  };
  return (
    <div className="bak">
      <Card style={{ marginBottom: 10 }}>
        <ReactEchart option={MyChartOption1} style={{ height: 500 }} />
      </Card>
      <Card>
        <ReactEchart option={MyChartOption2} style={{ height: 500 }} />
      </Card>
    </div>
  );
};

export default Bar;
