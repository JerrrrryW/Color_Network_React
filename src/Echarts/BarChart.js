import React, { useEffect } from 'react';
import * as echarts from 'echarts';

const BarChart = () => {
  useEffect(() => {
    // 创建一个ECharts实例并将其挂载到指定的DOM元素上
    const chartContainer = document.getElementById('echarts-bar-chart');
    const chart = echarts.init(chartContainer);

    // 定义图表配置项
    const option = {
      title: {
        show: false,
      },
      xAxis: {
        type: 'value',
        show: false,
      },
      yAxis: {
        show: false,
        type: 'category',
        data: ['A', 'B', 'C', 'D', 'E', 'A', 'B', 'C', 'D', 'E', 'A', 'B', 'C', 'D', 'E'],
      },
      series: [
        {
          data: [30, 40, 25, 50, 45, 30, 40, 25, 50, 45, 30, 40, 25, 50, 45],
          type: 'bar',
          barWidth: 10,  // 控制柱子宽度
          itemStyle: {
            borderRadius: [0, 10, 10, 0],  // 圆角设置
          },
          label: {
            show: false,
            position: 'right',  // 标签位置
            color: '#333',  // 标签文字颜色
          },
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

export default BarChart;
