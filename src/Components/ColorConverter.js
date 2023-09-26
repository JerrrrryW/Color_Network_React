import React, { useState } from 'react';
import './ColorConverter.css'; // 引入外部 CSS 文件

const ColorConverter = () => {
  const [selectedOption, setSelectedOption] = useState('RGB');

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="color-converter">
      <div className="options">
        <button
          className={`option-button ${selectedOption === 'RGB' ? 'active' : ''}`}
          onClick={() => handleOptionChange('RGB')}
        >
          RGB
        </button>
        <button
          className={`option-button ${selectedOption === 'HSV' ? 'active' : ''}`}
          onClick={() => handleOptionChange('HSV')}
        >
          HSV
        </button>
        <button
          className={`option-button ${selectedOption === 'LAB' ? 'active' : ''}`}
          onClick={() => handleOptionChange('LAB')}
        >
          LAB
        </button>
      </div>
      <div className="content">
        {selectedOption === 'RGB'}
        {selectedOption === 'HSV'}
        {selectedOption === 'LAB'}
      </div>
    </div>
  );
};

export default ColorConverter;
