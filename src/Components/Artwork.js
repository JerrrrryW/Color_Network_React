import React from 'react';
import './Artwork.css'

function Artwork({ }) {

    return (
      <div className="artwork-container">
        <div className="artwork">
          {/* 左侧 40% 部分显示一幅画 */}
          <img
            src="画作图片地址" // 替换为你的画作图片地址
            alt="Artwork"
            className="artwork-image"
          />
        </div>
        <div className="artwork-details">
          {/* 右侧 60% 部分分为上下两部分 */}
          <div className="artwork-story">
            {/* 上半部分显示画作的基本信息 */}
            <h3>画作标题</h3>
            <p>作者：画作作者</p>
            {/* 添加更多基本信息 */}
          </div>
          <div className="artwork-story">
            {/* 下半部分显示画作的背景故事 */}
            <h3>背景故事</h3>
            <p>
              这里是画作的背景故事描述。你可以在这里添加有关画作的详细信息和故事。
            </p>
          </div>
        </div>
      </div>
    );
}
  

export default Artwork;
