import React, { useState } from 'react';
import './App.css';
import './Components/select.css';

import Toolbar from './Components/Toolbar';
import ChildCard from './Components/ChildCard';
import RelationshipGraph from './Echarts/RealtionshipGraph';
//import BarChart from './Echarts/BarChart';
import HeatMap from './Echarts/HeatMap';
import Sankey from './Echarts/Sankey';
import Scatter from './Echarts/Scatter';
import Node from './Components/Node';
import TreeMap from './Echarts/TreeMap';
import DiskTreeMap from './Echarts/DiskTreeMap';
import nodes from './nodes.json'
//import BarChart from './Echarts/BarChart'

function App() {
  const [Option, setOption] = useState(null);
  const [nodename, setnodename] = useState('C41');
  const [nodeData, setNodeData] = useState({
    color: '#7f0000',
    name: 'C41',
    rgb: { r: 127, g: 0, b: 0 },
    bardata: [10, 0.01, 0.47, 1, 7.14],
  });
  const [disktreemapdata,setdisktreemapdata] = useState(        [
    {
      "value": 4,
      "name": "形制",
      "children": [
        {
          "value":1,
          "name": "立轴",
        },
        {
          "value": 1,
          "name": "团扇",
        },
        {
          "value": 1,
          "name": "册页",
        },
        {
          "value": 1,
          "name": "手卷",
        },
      ]
    },
    {
      "value": 2,
      "name": "材质",
      "children": [
        {
          "value": 1,
          "name": "绢本",
        },
        {
          "value": 1,
          "name": "纸本",
        },
      ]
    },
    {
      "value": 7,
      "name": "类型",
      "children": [
        {
          "value": 1,
          "name": "大青绿",
        },
        {
          "value": 1,
          "name": "浅设色",
        },
        {
          "value": 1,
          "name": "水墨",
        },
        {
          "value": 1,
          "name": "水墨浅绛",
        },
        {
          "value": 1,
          "name": "线描",
        },
        {
          "value": 1,
          "name": "小青绿",
        },
        {
          "value": 1,
          "name": "重设色",
        },
      ]
    },

    {
      "value": 1,
      "name": "朝代",
      "children": [
        {
          "value": 1,
          "name": "宋朝",
        },
      ]
    },
    {
      "value": 1,
      "name": "题材",
      "children": [
        {
          "value": 1,
          "name": "山水",
        },
      ]
    },
]);
  const [isNodeChanged, setIsNodeChanged] = useState(false);

  const setSelectedOption = (data) => {
    setOption(data);
  }
  const setSelectedOption2 = () => {
    setOption('2');
  }



  return (
    <div className="App">
      <div className="header">
        <h2>CHINESE PAINTING COLOR VISUALIZATION PLATFORM</h2>
      </div>
      <Toolbar setSelectedOption={setSelectedOption}></Toolbar>
      <div className="main-content">
        <div id='node-attributes' className='card'>
          <h3>Node Attributes</h3>
          <ChildCard title="CURRENT NODE">
            <Node nodedata={nodeData} isNodeChanged={isNodeChanged}/>
          </ChildCard>
          <div className="horizontal-flex">
            <ChildCard title="DEGREE" style={{ flex: '1', marginTop: '0', marginRight: '5px' }}>
            </ChildCard>
            <ChildCard title="CENTRALITY" style={{ flex: '1', marginTop: '0', marginLeft: '5px' }}>
            </ChildCard>
          </div>
        </div>
        <div id='color-network' className='card'>
          <div id="color-network-2">
            <h3>Color Network</h3><button onClick={setSelectedOption2}>Transform</button>
          </div>
          <RelationshipGraph Option={Option} setIsNodeChanged={setIsNodeChanged} setNodeData={setNodeData} setdisktreemapdata={setdisktreemapdata}/>
        </div>
        <div id='node-heatmap' className='card'>
          <div id="node-heatmap-2">
            <h3>Node Heatmap</h3><button>Compute</button>
          </div>
          <HeatMap color={nodename} />
        </div>
        <div id='color-space' className='card'>
          <h3>Color Space</h3>
          <Scatter />
        </div>
        <div id='color-search' className='card'>
          <h3>Color Search</h3>
          <TreeMap id = "tree-map"/>
          <ChildCard title="NODE STATISTICS" contentStyle={{height:200}}>
            <DiskTreeMap 
              disktreemapdata = {disktreemapdata}
              isNodeChanged = {isNodeChanged}
            />
          </ChildCard>
          <ChildCard title="PAINTING/PIGMENT INFORMATION" id = "info-card">
          </ChildCard>
        </div>
        <div id='multidimensional-linkage-view' className='card'>
          <h3>Multidimensional Linkage View</h3>
          <Sankey />
        </div>
      </div>
    </div>
  );
}

export default App;
