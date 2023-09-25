import React, { useEffect } from 'react';
import * as echarts from 'echarts';

import data from './rgb.json'
const Scatter = () => {
  useEffect(() => {
    // 在组件加载后初始化ECharts实例
    const chart = echarts.init(document.getElementById('echarts-scatter'));

    // 定义图表配置
    const option = {
      trigger: "axis",
      axisPointer: {
        type: "cross",
      },
      grid3D: {
        axisLine: {
          lineStyle: {
            color: "#000000",
          },
        },
        axisPointer: {
          lineStyle: {
            color: "#000000",
          },
        },
      },
      xAxis3D: {
        name: "R",
        type: "value",
        scale: true,
        min: 0,
        max: 256,
      },
      yAxis3D: {
        name: "G",
        type: "value",
        scale: true,
        min: 0,
        max: 256,
      },
      zAxis3D: {
        name: "B",
        type: "value",
        scale: true,
        min: 0,
        max: 256,
      },
      tooltip: {
        show: true,
        trigger: "item",
        formatter: function (params) {
          return `颜色:${params.data.name}<br>朝代:${params.data.chaodai}<br>作者:${params.data.zuozhe}<br>作品:${params.data.zuoping}<br>主题:${params.data.fenlei}`;
        },
      },

      series: [
        {
          top:0,
          type: "scatter3D",
          data: data,
          encode: {
            x: "x",
            y: "y",
            z: "高度",
            tooltip: [0, 1, 2, 3, 4],
          },
          itemStyle: {
            // borderWidth: 1,
            // borderColor: ""
            color: "#19FFF2",
          },
        },
      ],
    };

    // 设置图表配置项
    chart.setOption(option);

    // 清理资源
    return () => {
      chart.dispose();
    };
  }, []);

  return <div id="echarts-scatter" style={{ width: '100%', height: '100%' }} />;
};

export default Scatter;
