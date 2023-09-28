import React, { useEffect, useState } from 'react';
import * as echarts from 'echarts';
import './Node.css'; // 引入样式文件

function Node({
  nodedata,
  isNodeChanged,
}) {

  const [color, setcolor] = useState('#ffffff');
  const [text, settext] = useState('C');
  const [rgb, setrgb] = useState({r:255,g:255,b:255});
  const [bardata, setbardata] = useState([1, 1, 1, 1, 1]);

  useEffect(() => {

    setcolor(nodedata.color);
    settext(nodedata.name);
    setrgb(nodedata.rgb);
    setbardata(nodedata.bardata);

    // 创建一个ECharts实例并将其挂载到指定的DOM元素上
    const chartContainer = document.getElementById('node-right');
    const chart = echarts.init(chartContainer);
    // 定义图表配置项
    const option = {
      color:['#b6a789'],
      grid: {
        left: 0,
        right: 0,
        bottom: -10,
        top:5,
        containLabel: true
      },
      xAxis: {
        show:false, 
        type: 'value',
        boundaryGap: [0, 0.01],
        axisTick: {
          show: false
        }
      },
      yAxis: {
        type: 'category',
        data: ['Strength', 'EC', 'BC', 'CC', 'Degree'],
        splitLine: {
          show: false // 设置为false即可隐藏y轴上的网格线
        },
        axisTick: {
          show: false
        },
        axisLine: {
          show: false // 设置为false即可隐藏x轴线
        },
      },
      series: [
        {
          name: '2011',
          type: 'bar',
          data: bardata,
          itemStyle: {
            emphasis: {
              barBorderRadius: 9
            },
            normal: {
              barBorderRadius: 9
            }
          },
        },
      ]
    }

    // 使用配置项渲染图表
    chart.setOption(option);

    // 在组件卸载时销毁图表，防止内存泄漏
    return () => {
      chart.dispose();
    };
  }, [isNodeChanged]);

  return (
    <div className="node">
      <div className='node-left'>
      <div className="circle" style={{ backgroundColor: color }}>
          <div className="circle-text">{text}</div>
        </div>
        <div className="rgb-values">
          <span>R:{rgb.r}</span>
          <span>G:{rgb.g}</span>
          <span>B:{rgb.b}</span>
        </div>
      </div>
      <div id='node-right' style={{ width: '70%', height: '100%' }}>
      </div>
    </div>
  );
}

export default Node;
