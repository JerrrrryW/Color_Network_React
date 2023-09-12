import React from 'react';
import './toolbar.css'

function Toolbar() {
    return (
      <div className="toolbar">
        <input type="text" placeholder="Search" className="search-input" />
        <div className="restriction">
            <div className="custom-select">
                <select >
                    <option>题材 Theme　　▼</option>
                    <option>Option 1</option>
                    <option>Option 2</option>
                    <option>Option 3</option>
                    <option>Option 4</option>
                </select>
                <select>
                    <option>设色 Rendering method　▼</option>
                    <option>Option A</option>
                    <option>Option B</option>
                    <option>Option C</option>
                    <option>Option D</option>
                </select>
                <select>
                    <option>材质 Material　　▼</option>
                    <option>Option A</option>
                    <option>Option B</option>
                    <option>Option C</option>
                    <option>Option D</option>
                </select>
                <select>
                    <option>形制 Shape　　▼</option>
                    <option>Option A</option>
                    <option>Option B</option>
                    <option>Option C</option>
                    <option>Option D</option>
                </select>    
            </div>
            <button>Search</button>
        </div>
      </div>
    );
}
  

export default Toolbar;
