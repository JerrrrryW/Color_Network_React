import React, { useState } from 'react';
import './Slider.css'; // 引入外部 CSS 文件

const Slider = ({setSelected}) => {
  const [sliderValue, setSliderValue] = useState(1);

  const handleSliderChange = (event) => {
    const newValue = parseFloat(event.target.value);
    setSliderValue(newValue);
    setSelected(newValue);
  };

  return (
    <div className="slider-container">
      <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        value={sliderValue}
        onChange={handleSliderChange}
        className="slider"
      />
      <div className="value-display">{sliderValue.toFixed(2)}</div>
    </div>
  );
};

export default Slider;
