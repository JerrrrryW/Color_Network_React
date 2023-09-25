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
  const [nodecolor, setnodecolor] = useState(null);
  const [nodename, setnodename] = useState(null);
  const [noder, setnoder] = useState(null);
  const [nodeg, setnodeg] = useState(null);
  const [nodeb, setnodeb] = useState(null);
  const [bardata, setbardata] = useState(null);
  const [disktreemapdata,setdisktreemapdata] = useState([
    {
      "value": 0,
      "name": "形制",
      "children": [
        {
          "value": 0,
          "name": "立轴",
        },
        {
          "value": 0,
          "name": "团扇",
        },
        {
          "value": 0,
          "name": "册页",
        },
        {
          "value": 0,
          "name": "手卷",
        },
      ]
    },
    {
      "value": 0,
      "name": "材质",
      "children": [
        {
          "value": 0,
          "name": "绢本",
        },
        {
          "value": 0,
          "name": "纸本",
        },
      ]
    },
    {
      "value": 0,
      "name": "类型",
      "path": "类型",
      "children": [
        {
          "value": 0,
          "name": "大青绿",
        },
        {
          "value": 0,
          "name": "浅设色",
        },
        {
          "value": 0,
          "name": "水墨",
        },
        {
          "value": 0,
          "name": "水墨浅绛",
        },
        {
          "value": 0,
          "name": "线描",
        },
        {
          "value": 0,
          "name": "小青绿",
        },
        {
          "value": 0,
          "name": "重设色",
        },
      ]
    },

    {
      "value": 0,
      "name": "朝代",
      "path": "朝代",
      "children": [
        {
          "value": 0,
          "name": "宋朝",
        },
      ]
    },
    {
      "value": 0,
      "name": "题材",
      "path": "题材",
      "children": [
        {
          "value": 0,
          "name": "山水",
        },
      ]
    },
  ]);
  const setSelectedOption = (data) => {
    setOption(data);
  }
  const setSelectedOption2 = () => {
    setOption('2');
  }

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

  // 处理节点点击事件，将节点的value值保存到状态中
  const handleNodeClick = (value) => {
    setnodename(value);
    // setnodecolor(rgbToHex(nodes[value].r, nodes[value].g, nodes[value].b));
    // setnoder(nodes[value].r);
    // setnodeg(nodes[value].g);
    // setnodeb(nodes[value].b);
    // setbardata([nodes[value].degree, nodes[value].BC, nodes[value].CC, nodes[value].EC, nodes[value].weight])
    // setdisktreemapdata([
    //   {
    //     "value": nodes[value].data['立轴']+nodes[value].data['团扇']+nodes[value].data['册页']+nodes[value].data['手卷'],
    //     "name": "形制",
    //     "children": [
    //       {
    //         "value": nodes[value].data['立轴'],
    //         "name": "立轴",
    //       },
    //       {
    //         "value": nodes[value].data['团扇'],
    //         "name": "团扇",
    //       },
    //       {
    //         "value": nodes[value].data['册页'],
    //         "name": "册页",
    //       },
    //       {
    //         "value": nodes[value].data['手卷'],
    //         "name": "手卷",
    //       },
    //     ]
    //   },
    //   {
    //     "value": nodes[value].data['绢本']+nodes[value].data['纸本'],
    //     "name": "材质",
    //     "children": [
    //       {
    //         "value": nodes[value].data['绢本'],
    //         "name": "绢本",
    //       },
    //       {
    //         "value": nodes[value].data['纸本'],
    //         "name": "纸本",
    //       },
    //     ]
    //   },
    //   {
    //     "value": nodes[value].data['大青绿']+nodes[value].data['浅设色']+nodes[value].data['水墨']+nodes[value].data['水墨浅绛']+nodes[value].data['线描']+nodes[value].data['小青绿']+nodes[value].data['重设色'],
    //     "name": "类型",
    //     "path": "类型",
    //     "children": [
    //       {
    //         "value": nodes[value].data['大青绿'],
    //         "name": "大青绿",
    //       },
    //       {
    //         "value": nodes[value].data['浅设色'],
    //         "name": "浅设色",
    //       },
    //       {
    //         "value": nodes[value].data['水墨'],
    //         "name": "水墨",
    //       },
    //       {
    //         "value": nodes[value].data['水墨浅绛'],
    //         "name": "水墨浅绛",
    //       },
    //       {
    //         "value": nodes[value].data['线描'],
    //         "name": "线描",
    //       },
    //       {
    //         "value": nodes[value].data['小青绿'],
    //         "name": "小青绿",
    //       },
    //       {
    //         "value": nodes[value].data['重设色'],
    //         "name": "重设色",
    //       },
    //     ]
    //   },
  
    //   {
    //     "value": nodes[value].data.id.length,
    //     "name": "朝代",
    //     "path": "朝代",
    //     "children": [
    //       {
    //         "value": nodes[value].data.id.length,
    //         "name": "宋朝",
    //       },
    //     ]
    //   },
    //   {
    //     "value": nodes[value].data.id.length,
    //     "name": "题材",
    //     "path": "题材",
    //     "children": [
    //       {
    //         "value": nodes[value].data.id.length,
    //         "name": "山水",
    //       },
    //     ]
    //   },
    // ])
    // console.log(disktreemapdata)
  };

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
            <Node color={nodecolor} text={nodename} rgb={{ r: noder, g: nodeg, b: nodeb }} bardata={bardata}></Node>
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
          <RelationshipGraph Option={Option} onNodeClick={handleNodeClick} />
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
          <TreeMap></TreeMap>
          <ChildCard title="NODE STATISTICS">
            <DiskTreeMap disktreemapdata = {disktreemapdata}></DiskTreeMap>
          </ChildCard>
          <ChildCard title="PAINTING/PIGMENT INFORMATION">
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
