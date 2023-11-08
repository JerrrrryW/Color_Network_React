import React, { useEffect } from 'react';
import * as echarts from 'echarts';

const TreeMap = () => {
  useEffect(() => {
    // 创建一个ECharts实例并将其挂载到指定的DOM元素上
    const chartContainer = document.getElementById('echarts-treemap');
    const chart = echarts.init(chartContainer);

    const data = {
      "name": "C104",
      itemStyle: {
        color: 'rgb(69,130,96)', 
      },
      "children": [
       {
        "name": "C96",
        itemStyle: {
          color: 'rgb(101,123,100)', 
        },
        "children": [
         {
          "name": "C46",
          itemStyle: {
            color: 'rgb(127,131,108)', 
          },
         },
         {
          "name": "C119",
          itemStyle: {
            color: 'rgb(91,106,77)', 
          },
         },
         {
          "name": "C136",
          itemStyle: {
            color: 'rgb(96,120,82)', 
          },
         },
        ]
       },
       {
        "name": "C99",
          itemStyle: {
            color: 'rgb(70,120,116)', 
          },
        "children": [
          {
            "name": "C152",
            itemStyle: {
              color: 'rgb(96,129,133)', 
            },
           },
           {
            "name": "C162",
            itemStyle: {
              color: 'rgb(62,99,100)', 
            },
           },
        ]
       },
       {
        "name": "C101",
        itemStyle: {
          color: 'rgb(56,102,76)', 
        },
        "children": [
          {
            "name": "C97",
            itemStyle: {
              color: 'rgb(75,96,78)', 
            },
           },
           {
            "name": "C135",
            itemStyle: {
              color: 'rgb(60,90,60)', 
            },
           },
        ]
       },
       {
        "name": "C136",
        itemStyle: {
          color: 'rgb(96,120,82)', 
        },
        "children": [
          {
            "name": "C133",
            itemStyle: {
              color: 'rgb(103,116,61)', 
            },
           },
        ]
       },
      ]
     }
    // 定义图表配置项
    const option = {
      tooltip: {
        trigger: 'item',
        triggerOn: 'mousemove'
      },
      series: [
        {
          label: {
            show: true
          },
          roam: true, // 启用缩放和平移功能
          type: 'tree',
          data: [data],
          top: 20,
          bottom: 50,
          layout: 'radial',
          symbolSize: 15,
          initialTreeDepth: 3,
          animationDurationUpdate: 750,
          emphasis: {
            focus: 'descendant'
          },
          symbol:"circle",
        }
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
    <div id="echarts-treemap" style={{ width: '100%', height: '100%' }}></div>
  );
};

export default TreeMap;
