import React, { useEffect } from 'react';
import * as echarts from 'echarts';

const BarChart2 = () => {
  useEffect(() => {
    // 创建一个ECharts实例并将其挂载到指定的DOM元素上
    const chartContainer = document.getElementById('echarts-bar-chart2');
    const chart = echarts.init(chartContainer);

    // 定义图表配置项
    const option = {
      grid: {
        left: 0,
        right: 0,
        bottom: -10,
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
        data: ['C47', 'C48', 'C45', 'C43', 'C20', 'C56', 'C34', 'C37', 'C36', 'C40', 'C42', 'C35', 'C38', 'C41', 'C33'],
      },
      series: [
        {
          data: [
            {
              value: 0.15,
              itemStyle: {
                color: '#59410a'
              }
            },
            {
              value: 0.15,
              itemStyle: {
                color: '#7f3f00'
              }
            },
            {
              value: 0.25,
              itemStyle: {
                color: '#362509'
              }
            },
            {
              value: 0.25,
              itemStyle: {
                color: '#555500'
              }
            },
            {
              value: 0.47,
              itemStyle: {
                color: '#464b36'
              }
            },
            {
              value: 0.47,
              itemStyle: {
                color: '#835943'
              }
            },
            {
              value: 0.9,
              itemStyle: {
                color: '#152826'
              }
            },
            {
              value: 0.9,
              itemStyle: {
                color: '#5b6347'
              }
            },
            {
              value: 0.9,
              itemStyle: {
                color: '#458260'
              }
            },
            {
              value: 0.9,
              itemStyle: {
                color: '#1b5862'
              }
            },
            {
              value: 0.98,
              itemStyle: {
                color: '#be9448'
              }
            },
            {
              value: 1,
              itemStyle: {
                color: '#144238'
              }
            },
            {
              value: 1,
              itemStyle: {
                color: '#123c4c'
              }
            },
            {
              value: 1,
              itemStyle: {
                color: '#7f0000'
              }
            },
            {
              value: 1,
              itemStyle: {
                color: '#38664c'
              }
            }
          ],
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
    <div id="echarts-bar-chart2" style={{ width: '100%', height: '350px' }}></div>
  );
};

export default BarChart2;
