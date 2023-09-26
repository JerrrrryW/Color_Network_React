import React from 'react';
import './ChildCard.css'; // 引入样式文件

function ChildCard({ title, children, style, contentStyle}) {

  return (
    <div className="childcard" style={style}>
      <div className="childcard-header">
        {title}
      </div>
      <div className="childcard-content" style={contentStyle}>
        {children}
      </div>
    </div>
  );
}

export default ChildCard;
