import React, { useEffect, useState } from 'react';
import * as echarts from 'echarts';

function DiskTreeMap({
  disktreemapdata, 
  isNodeChanged
}) {
  const [diskdata, setdiskdata] = useState([
    {
      "value": 20,
      "name": "形制",
      itemStyle: {
        color: '#7a8645', 
      },
      "children":[
        {
          "value": 20,
          "name": "形",
        },
      ]
    },

    {
      "value": 10,
      "name": "材质",
      "children": [
        {
          "value": 5,
          "name": "绢本1",
        },
        {
          "value": 5,
          "name": "绢本2",
        },
      ]
    },
    {
      "value": 2,
      "name": "类型",
      "children": [
        {
          "value": 2,
          "name": "重设色",
        },
      ]
    },

    {
      "value": 10,
      "name": "朝代",
      "children": [
        {
          "value": 10,
          "name": "朝代",
        },
      ]
    },
    {
      "value": 10,
      "name": "题材",
      "children": [
        {
          "value": 10,
          "name": "山水",
        },
      ]
    },
  ])
  useEffect(() => {
    // 创建一个ECharts实例并将其挂载到指定的DOM元素上
    const chartContainer = document.getElementById('echarts-disktreemap');
    const chart = echarts.init(chartContainer);

    setdiskdata(disktreemapdata)

    // 定义图表配置项
    const option = {
      legend: {
        show: false // 将legend的show属性设置为false以隐藏索引条
      },
      series: [
        {
          breadcrumb: {
            show: false // 将breadcrumb的show属性设置为false以隐藏层次结构黑条
          },
          left: 0,
          right: 1,
          top: 1,
          bottom: 0,
          name: 'Disk Usage',
          type: 'treemap',
          label: {
            show: true,
            formatter: '{b}'
          },
          upperLabel: {
            show: true,
            height: 15
          },
          itemStyle: {
            borderColor: '#fff'
          },
          levels: [
            {
              itemStyle: {
                borderColor: '#fff',
                borderWidth: 0,
                gapWidth: 0.1
              },
              upperLabel: {
                show: false
              }
            },
            {
              itemStyle: {
                borderColor: '#efe3d0',
                borderWidth: 5,
                gapWidth: 0.5
              },
              emphasis: {
                itemStyle: {
                  borderColor: '#ddd'
                }
              }
            },
            {
              colorSaturation: [0.35, 0.5],
              itemStyle: {
                borderWidth: 5,
                gapWidth: 0.5,
                borderColorSaturation: 0.6
              }
            }
          ],
          data: diskdata
        }
      ]
    }

    // 使用配置项渲染图表
    chart.setOption(option);
    console.log("option", option.series);
    // console.log('data:',option);
    // 在组件卸载时销毁图表，防止内存泄漏
    return () => {
      chart.dispose();
    };
  }, [isNodeChanged]);

  return (
    <div id="echarts-disktreemap" style={{ width: '100%', height: '200px' }}></div>
  );
};

export default DiskTreeMap;
