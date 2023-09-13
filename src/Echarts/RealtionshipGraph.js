import React, { useEffect, useRef, useState } from 'react';
import ReactEcharts from 'echarts-for-react';

function RelationshipGraph() {
  const chartRef = useRef(null);
  const [nodes, setNodes] = useState([]);
  const [links, setLinks] = useState([]);

  const getOption = () => {
    return {
      tooltip: {},
      animationDurationUpdate: 1500,
      animationEasingUpdate: 'quinticInOut',
      series: [
        {
          type: 'graph',
          layout: 'force',
          roam: true,
          force: {
            repulsion: 100,
            gravity: 0.1,
          },
          symbolSize: 50,
          edgeSymbol: ['circle'],
          edgeSymbolSize: [4, 10],
          edgeLabel: {
            normal: {show: false},
          },
          data: nodes, // Use the loaded nodes data here
          links: links, // Use the loaded links data here
        },
      ],
    };
  };

  useEffect(() => {
    // Fetch nodes data
    fetch('/data/nodes.json')
      .then((response) => response.json())
      .then((data) => {
        setNodes(data);
      })
      .catch((error) => {
        console.error('Error loading nodes JSON:', error);
      });

    // Fetch links data
    fetch('/data/links.json')
      .then((response) => response.json())
      .then((data) => {
        setLinks(data);
      })
      .catch((error) => {
        console.error('Error loading links JSON:', error);
      });
  }, []);

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <ReactEcharts ref={chartRef} option={getOption()} />
    </div>
  );
}

export default RelationshipGraph;
