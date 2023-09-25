import React, { useEffect, useRef, useState } from 'react';
import ReactEcharts from 'echarts-for-react';


function RelationshipGraph({ Option ,onNodeClick}) {
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
      fetch('/data/nodes4.json')
        .then((response) => response.json())
        .then((data) => {
          setNodes(data);
        })
        .catch((error) => {
          console.error('Error loading nodes JSON:', error);
        });

      // Fetch links data
      fetch('/data/links4.json')
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
      animationDurationUpdate: 1500,
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
      if (params.data.name) {
        onNodeClick(params.data.name);
      }
    });
  }, []);

  return (
    <ReactEcharts ref={chartRef} option={ecOption} style={{ width: '100%', height: '100%' }} />
  );
}

export default RelationshipGraph;
