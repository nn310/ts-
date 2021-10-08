import * as React from 'react';
import ReactEchart from 'echarts-for-react';
import { EChartsOption } from 'echarts';
import { Card } from 'antd';

interface IPieProps {}

const Pie: React.FunctionComponent<IPieProps> = (props) => {
  const MyChartOption1: EChartsOption = {
    title: {
      text: '用户骑行订单',
    },
    legend: {
      //标签---需要写name
      data: ['Search Engine', 'Direct', 'Email', 'Union Ads', 'Video Ads'],
    },
    tooltip: {
      //浮框
      trigger: 'item',
    },
    toolbox: {
      //小控件
      show: true,
      feature: {
        restore: {}, //还原
        saveAsImage: {}, //下载
      },
    },
    series: [
      {
        type: 'pie',
        radius: ['40%', '70%'], //环形图内径外径

        label: {
          //去掉标签
          show: false,
          position: 'center',
        },
        labelLine: {
          //去掉引出的线
          show: false,
        },
        itemStyle: {
          //每一个数据的特性
          borderRadius: 10,
          borderColor: '#fff',
          borderWidth: 2,
        },
        emphasis: {
          //滑到那个添加特性
          label: {
            show: true,
            fontSize: '25',
            fontWeight: 'bold',
          },
        },
        data: [
          { value: 1048, name: 'Search Engine' },
          { value: 735, name: 'Direct' },
          { value: 580, name: 'Email' },
          { value: 484, name: 'Union Ads' },
          { value: 300, name: 'Video Ads' },
        ],
      },
    ],
  };
  return (
    <div className="Pie">
      <Card style={{ marginBottom: 10 }}>
        <ReactEchart option={MyChartOption1} style={{ height: 500 }} />
      </Card>
    </div>
  );
};

export default Pie;
