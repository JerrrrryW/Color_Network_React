import React, { useEffect } from 'react';
import * as echarts from 'echarts';

const BarChart = () => {
  useEffect(() => {
    // 创建一个ECharts实例并将其挂载到指定的DOM元素上
    const chartContainer = document.getElementById('echarts-bar-chart');
    const chart = echarts.init(chartContainer);

    // 定义图表配置项
    const option = {
      grid: {
        left: 0,
        right: 0,
        bottom: 0,
        top:0,
        containLabel: true
      },
      title: {
        show: false,
      },
      xAxis: {
        type: 'value',
        show: false,
      },
      yAxis: {
        show: true,
        type: 'category',
        splitLine: {
          show: false // 设置为false即可隐藏y轴上的网格线
        },
        axisTick: {
          show: false
        },
        axisLine: {
          show: false // 设置为false即可隐藏x轴线
        },
        data: ['A', 'B', 'C', 'D', 'E', 'A', 'B', 'C', 'D', 'E', 'A', 'B', 'C', 'D', 'E'],
      },
      series: [
        {
          data: [30, 40, 25, 50, 45, 30, 40, 25, 50, 45, 30, 40, 25, 50, 45],
          type: 'bar',
          barWidth: 10,  // 控制柱子宽度
          itemStyle: {
            emphasis: {
              barBorderRadius: 9
            },
            normal: {
              barBorderRadius: 9
            }
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
