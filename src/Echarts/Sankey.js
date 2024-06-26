import React, { useState, useEffect } from 'react';
import * as echarts from 'echarts';
import jsondata from '../nodes.json'

const Sankey = ({colors}) => {
  const [nodes, setNodes] = useState([]);
  const [links, setLinks] = useState([]);

  useEffect(() => {
    console.log(colors.length)
    fetch('/data/'+colors.length+'_nodes.json')
    .then((response) => response.json())
    .then((data) => {
      console.log("nodes:",data)
      setNodes(data);
    })
    .catch((error) => {
      console.error('Error loading nodes JSON:', error);
    });
    fetch('/data/'+colors.length+'_links.json')
    .then((response) => response.json())
    .then((data) => {
      console.log("links:",data)
      setLinks(data);
    })
    .catch((error) => {
      console.error('Error loading links JSON:', error);
    });
  }, [colors]);
  
  useEffect(() => {

    // 在组件加载后初始化ECharts实例
    const chart = echarts.init(document.getElementById('echarts-sankey'));
    
    const option = {
      tooltip: {
        trigger: 'item',
        triggerOn: 'mousemove'
      },
      series: [
        {
          right: "5%",
          type: 'sankey',
          data: nodes,
          links: links,
          emphasis: {
            focus: 'adjacency'
          },
          levels: [
            {
              depth: 0,
              itemStyle: {
                color: '#fbb4ae'
              },
              lineStyle: {
                color: 'source',
                opacity: 0.2
              }
            },
            {
              depth: 1,
              itemStyle: {
                color: '#b3cde3'
              },
              lineStyle: {
                color: 'source',
                opacity: 0.6
              }
            },
            {
              depth: 2,
              itemStyle: {
                color: '#ccebc5'
              },
              lineStyle: {
                color: 'source',
                opacity: 0.2
              }
            },
            {
              depth: 3,
              itemStyle: {
                color: '#decbe4'
              },
              lineStyle: {
                color: 'source',
                opacity: 0.2
              }
            }
          ],
          lineStyle: {
            curveness: 0.5
          }
        }
      ]
    }

    // 设置图表配置项
    chart.setOption(option);

    // 清理资源
    return () => {
      chart.dispose();
    };
  },[nodes, links, colors]);

  return <div id="echarts-sankey" style={{ width: '100%', height: '100%' }} />;
};

export default Sankey;
