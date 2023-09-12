import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react';

class RelationshipGraph extends Component {
  getOption = () => {
    return {
      title: {
        text: '社交网络关系图',
        left: 'center',
      },
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
          edgeSymbol: ['circle', 'arrow'],
          edgeSymbolSize: [4, 10],
          edgeLabel: {
            normal: {
              show: true,
              textStyle: {
                fontSize: 10,
              },
              formatter: '{c}',
            },
          },
          data: [
            {
              name: 'Alice',
              draggable: true,
            },
            {
              name: 'Bob',
              draggable: true,
            },
            {
              name: 'Charlie',
              draggable: true,
            },
            {
              name: 'David',
              draggable: true,
            },
            {
              name: 'Eva',
              draggable: true,
            },
          ],
          links: [
            { source: 'Alice', target: 'Bob', label: '朋友' },
            { source: 'Alice', target: 'Charlie', label: '朋友' },
            { source: 'Bob', target: 'David', label: '家人' },
            { source: 'Charlie', target: 'Eva', label: '同事' },
          ],
        },
      ],
    };
  };

  render() {
    return (
      <div style={{ width: '100%', height: '100%' }}>
        <ReactEcharts option={this.getOption()} />
      </div>
    );
  }
}

export default RelationshipGraph;
