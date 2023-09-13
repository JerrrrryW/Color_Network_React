import React from 'react';
import './App.css';
import './Components/select.css';

import Toolbar from './Components/Toolbar';
import RelationshipGraph from './Echarts/RealtionshipGraph';
import ChildCard from './Components/ChildCard';

function App() {
  return (
    <div className="App">
      <div className="header">
        <h2>CHINESE PAINTING COLOR VISUALIZATION PLATFORM</h2>
      </div>
      <Toolbar />
      <div className="main-content">
        <div id='node-attributes' className='card'>
          <h3>Node Attributes</h3>
          <ChildCard title="CURRENT NODE" />
        </div>
        <div id='color-network' className='card'>
          <h3>Color Network</h3>
          <RelationshipGraph className='chart'/>
        </div>
        <div id='node-heatmap' className='card'>
          <h3>Node Heatmap</h3>
        </div>
        <div id='color-space' className='card'>
          <h3>Color Space</h3>
        </div>
        <div id='color-search' className='card'>
          <h3>Color Search</h3>
          <ChildCard title="NODE STATISTICS">
            <p>TreeMap Chart</p>
          </ChildCard>
          <ChildCard title="PAINTING/PIGMENT INFORMATION">
            <p>Details of Paintings</p>
          </ChildCard>
        </div>
        <div id='multidimensional-linkage-view' className='card'>
          <h3>Multidimensional Linkage View</h3>
        </div>
      </div>
    </div>
  );
}

export default App;
