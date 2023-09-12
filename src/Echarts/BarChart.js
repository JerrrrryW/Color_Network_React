import React, { useEffect } from 'react';
import * as echarts from 'echarts';

const EChartsBarChart = () => {
  useEffect(() => {
    // 创建一个ECharts实例并将其挂载到指定的DOM元素上
    const chartContainer = document.getElementById('echarts-bar-chart');
    const chart = echarts.init(chartContainer);

    // 定义图表配置项
    const option = {
      title: {
        text: '柱状图示例',
      },
      tooltip: {},
      xAxis: {
        data: ['项目1', '项目2', '项目3', '项目4', '项目5'],
      },
      yAxis: {},
      series: [
        {
          name: '销量',
          type: 'bar',
          data: [150, 230, 224, 218, 135],
        },
      ],
    };

    // 使用配置项渲染图表
    chart.setOption(option);

    // 在组件卸载时销毁图表，防止内存泄漏
    return () => {
      chart.dispose();
    };
  }, []);

  return (
    <div id="echarts-bar-chart" style={{ width: '100%', height: '400px' }}></div>
  );
};

export default EChartsBarChart;
