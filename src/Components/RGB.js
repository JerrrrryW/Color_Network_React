import React, { useState } from 'react';
import './RGB.css'
import icon from '../imgs/search.png'

const RGB = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const handleSearch = () => {
    // 在这里执行搜索操作，使用 red、green 和 blue 的值
    const rgbValue = `rgb(${red}, ${green}, ${blue})`;
    console.log('搜索 RGB 值:', rgbValue);
  };

  return (
    <div className="rgb-search-box"> {/* 应用样式类名 */}
      <input
        type="number"
        placeholder="R"
        value={red}
        onChange={(e) => setRed(e.target.value)}
        min="0"
        max="255"
      />
      <input
        type="number"
        placeholder="G"
        value={green}
        onChange={(e) => setGreen(e.target.value)}
        min="0"
        max="255"
      />
      <input
        type="number"
        placeholder="B"
        value={blue}
        onChange={(e) => setBlue(e.target.value)}
        min="0"
        max="255"
      />
      <button onClick={handleSearch}>
        <img src={icon} alt="Search" /> {/* 使用图片 */}
      </button>
    </div>
  );
};

export default RGB;
