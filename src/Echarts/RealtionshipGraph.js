import React, { useEffect, useRef, useState } from 'react';
import ReactEcharts from 'echarts-for-react';
import jsondata from '../nodes.json'


const RelationshipGraph = React.memo(({ 
  Option , 
  setIsNodeChanged,
  setNodeData,
  setdisktreemapdata,
}) => {
  function rgbToHex(r, g, b) {
    // 使用toString(16)将数值转换为十六进制，并确保结果为两位数
    const toHex = (value) => {
      const hex = value.toString(16);
      return hex.length === 1 ? `0${hex}` : hex;
    };

    const redHex = toHex(r);
    const greenHex = toHex(g);
    const blueHex = toHex(b);

    // 返回带有 "#" 前缀的十六进制字符串
    return `#${redHex}${greenHex}${blueHex}`;
  }

  const chartRef = useRef(null);
  const [nodes, setNodes] = useState([]);
  const [links, setLinks] = useState([]);
  const getChartData = (option) => {
    // 根据不同选项返回相应数据
    if (option === '3') {
      // Fetch nodes data
      fetch('/data/nodes3.json')
        .then((response) => response.json())
        .then((data) => {
          setNodes(data);
        })
        .catch((error) => {
          console.error('Error loading nodes JSON:', error);
        });

      // Fetch links data
      fetch('/data/links3.json')
        .then((response) => response.json())
        .then((data) => {
          setLinks(data);
        })
        .catch((error) => {
          console.error('Error loading links JSON:', error);
        });
    } else if (option === '2') {
      // Fetch nodes data
      fetch('/data/nodes5.json')
        .then((response) => response.json())
        .then((data) => {
          setNodes(data);
        })
        .catch((error) => {
          console.error('Error loading nodes JSON:', error);
        });

      // Fetch links data
      fetch('/data/links5.json')
        .then((response) => response.json())
        .then((data) => {
          setLinks(data);
        })
        .catch((error) => {
          console.error('Error loading links JSON:', error);
        });
    }
    else {
      // Fetch nodes data
      fetch('/data/nodes1.json')
        .then((response) => response.json())
        .then((data) => {
          setNodes(data);
        })
        .catch((error) => {
          console.error('Error loading nodes JSON:', error);
        });

      // Fetch links data
      fetch('/data/links1.json')
        .then((response) => response.json())
        .then((data) => {
          setLinks(data);
        })
        .catch((error) => {
          console.error('Error loading links JSON:', error);
        });
    }
  };

  

  const ecOption = {
      tooltip: {},
      animationDurationUpdate: 500,
      animationEasingUpdate: 'quinticInOut',
      series: [
        {
          type: 'graph',
          layout: 'force',
          roam: true,
          force: {
            repulsion: 400,
            gravity: 0.1,
          },
          label: {
            show: true,
            fontSize: 6,
            color: "rgba(0, 0, 0, 0.7)",
            formatter: function (params) {
              if (params.data.symbolSize === 0) {
                return params.data.value;
              }

            }
          },
          symbolSize: 50,
          edgeSymbol: ['circle'],
          edgeSymbolSize: [4, 10],
          edgeLabel: {
            normal: { show: false },
          },
          data: nodes, // Use the loaded nodes data here
          links: links, // Use the loaded links data here
        },
      ],
  };

  useEffect(() => {
    getChartData(Option);
  }, [Option]);

  useEffect(() => {
    const chart = chartRef.current.getEchartsInstance();
    chart.on('click', (params) => {
      // console.log("CLICKED:",params)
      if (params.data.name) {
        setIsNodeChanged(current => !current)
        console.log("CLICKED:",jsondata[params.data.name])
        const nodeData = {
          name: params.data.name,
          color: rgbToHex(jsondata[params.data.name].r, jsondata[params.data.name].g, jsondata[params.data.name].b),
          rgb: {r: jsondata[params.data.name].r, g: jsondata[params.data.name].g, b: jsondata[params.data.name].b},
          bardata: [jsondata[params.data.name].degree, jsondata[params.data.name].BC, jsondata[params.data.name].CC, jsondata[params.data.name].EC, jsondata[params.data.name].weight],
        }
        const disktreemapdata = 
        [
                {
                  "value": jsondata[params.data.name].data['立轴']+jsondata[params.data.name].data['团扇']+jsondata[params.data.name].data['册页']+jsondata[params.data.name].data['手卷'],
                  "name": "形制",
                  "children": [
                    {
                      "value": jsondata[params.data.name].data['立轴'],
                      "name": "立轴",
                    },
                    {
                      "value": jsondata[params.data.name].data['团扇'],
                      "name": "团扇",
                    },
                    {
                      "value": jsondata[params.data.name].data['册页'],
                      "name": "册页",
                    },
                    {
                      "value": jsondata[params.data.name].data['手卷'],
                      "name": "手卷",
                    },
                  ]
                },
                {
                  "value": jsondata[params.data.name].data['绢本']+jsondata[params.data.name].data['纸本'],
                  "name": "材质",
                  "children": [
                    {
                      "value": jsondata[params.data.name].data['绢本'],
                      "name": "绢本",
                    },
                    {
                      "value": jsondata[params.data.name].data['纸本'],
                      "name": "纸本",
                    },
                  ]
                },
                {
                  "value": jsondata[params.data.name].data['大青绿']+jsondata[params.data.name].data['浅设色']+jsondata[params.data.name].data['水墨']+jsondata[params.data.name].data['水墨浅绛']+jsondata[params.data.name].data['线描']+jsondata[params.data.name].data['小青绿']+jsondata[params.data.name].data['重设色'],
                  "name": "类型",
                  "children": [
                    {
                      "value": jsondata[params.data.name].data['大青绿'],
                      "name": "大青绿",
                    },
                    {
                      "value": jsondata[params.data.name].data['浅设色'],
                      "name": "浅设色",
                    },
                    {
                      "value": jsondata[params.data.name].data['水墨'],
                      "name": "水墨",
                    },
                    {
                      "value": jsondata[params.data.name].data['水墨浅绛'],
                      "name": "水墨浅绛",
                    },
                    {
                      "value": jsondata[params.data.name].data['线描'],
                      "name": "线描",
                    },
                    {
                      "value": jsondata[params.data.name].data['小青绿'],
                      "name": "小青绿",
                    },
                    {
                      "value": jsondata[params.data.name].data['重设色'],
                      "name": "重设色",
                    },
                  ]
                },
            
                {
                  "value": jsondata[params.data.name].data.id.length,
                  "name": "朝代",
                  "children": [
                    {
                      "value": jsondata[params.data.name].data.id.length,
                      "name": "宋朝",
                    },
                  ]
                },
                {
                  "value": jsondata[params.data.name].data.id.length,
                  "name": "题材",
                  "children": [
                    {
                      "value": jsondata[params.data.name].data.id.length,
                      "name": "山水",
                    },
                  ]
                },
        ];
        console.log("SENT:",disktreemapdata)
        setNodeData(nodeData)
        setdisktreemapdata(disktreemapdata)
      }
    });
  }, []);

  return (
    <ReactEcharts ref={chartRef} option={ecOption} style={{ width: '100%', height: '100%' }} />
  );
});

export default RelationshipGraph;
