import React from 'react';
import './toolbar.css'

function Toolbar({ setSelectedOption }) {

    let selectedOption = '';

    const handleOptionChange = (event) => {
        selectedOption = event.target.value;
    };

    const handleButtonClick = (event) => {
        setSelectedOption(selectedOption); // 通过 props 调用父组件的 setSelectedOption 更新函数
    };

    return (
      <div className="toolbar">
        <input type="text" placeholder="Search" className="search-input" />
        <div className="restriction">
            <div className="custom-select">
                <select >
                    <option>题材 Theme　　▼</option>
                    <option>山水</option>
                    <option>人物</option>
                    <option>花鸟</option>
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
                <select value={selectedOption} onChange={handleOptionChange}>
                    <option>ΔE　　▼</option>
                    <option>1</option>
                    <option>3</option>
                    <option>5</option>
                    <option>7</option>
                    <option>9</option>
                </select>   
            </div>
            <button onClick={handleButtonClick}>Search</button>
        </div>
      </div>
    );
}
  

export default Toolbar;
