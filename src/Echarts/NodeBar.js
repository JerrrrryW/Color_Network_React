import React, { useEffect } from 'react';
import * as echarts from 'echarts';

const NodeBar = () => {
  useEffect(() => {
    // 创建一个ECharts实例并将其挂载到指定的DOM元素上
    const chartContainer = document.getElementById('echarts-nodebar');
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
      xAxis: {
        show:false, 
        type: 'value',
        boundaryGap: [0, 0.01]
      },
      yAxis: {
        type: 'category',
        data: ['Strength', 'EC', 'BC', 'CC', 'Degree']
      },
      series: [
        {
          name: '2011',
          type: 'bar',
          data: [18203, 23489, 29034, 104970, 131744]
        },
      ]
    }

    // 使用配置项渲染图表
    chart.setOption(option);

    // 在组件卸载时销毁图表，防止内存泄漏
    return () => {
      chart.dispose();
    };
  }, []);

  return (
    <div id="echarts-nodebar" style={{ width: '70%', height: '100%' }}></div>
  );
};

export default NodeBar;
