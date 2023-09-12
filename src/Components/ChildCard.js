import React from 'react';
import './ChildCard.css'; // 引入样式文件

function ChildCard({ title, children }) {
  return (
    <div className="childcard">
      <div className="childcard-header">
        {title}
      </div>
      <div className="childcard-content">
        {children}
      </div>
    </div>
  );
}

export default ChildCard;
