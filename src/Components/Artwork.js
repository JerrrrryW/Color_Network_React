import React from 'react';
import './Artwork.css'
import image1 from '../imgs/吉祥多子图.png';
import image2 from '../imgs/瑞鹤图.png'
import image3 from '../imgs/竹雀双兔图.png'
import image4 from '../imgs/落花游鱼图.png'

function ArtworkUnit({ Image, id, name, author, type}) {
  return (
    <div className="artwork-unit">
      <div className="artwork">
        <img style={{width:'100%',height:'100px'}}
          src={Image} // 替换为你的画作图片地址
          alt="Artwork"
        />
      </div>
      <div className="artwork-info">
        {/* 右侧部分显示属性信息 */}
        <div className="property">
          <div className="property-label">ID:</div>
          <div className="property-value">{id}</div>
        </div>
        <div className="property">
          <div className="property-label">Name:</div>
          <div className="property-value">{name}</div>
        </div>
        <div className="property">
          <div className="property-label">Author:</div>
          <div className="property-value">{author}</div>
        </div>
        <div className="property">
          <div className="property-label">Type:</div>
          <div className="property-value">{type}</div>
        </div>
      </div>
    </div>
  );
}

function Artwork() {
  // 假设artworks是包含多幅画作信息的数组
  const artworks = [
    {
      img: image1,
      id: 'D015891',
      name: '吉祥多子图',
      author: '鲁宗贵',
      type: '花鸟',
    },
    {
      img: image2,
      id: 'D016820',
      name: '瑞鹤图',
      author: '赵佶',
      type: '花鸟',
    },
    {
      img: image3,
      id: 'D016788',
      name: '竹雀双兔图',
      author: '佚名',
      type: '花鸟',
    },
    {
      img: image4,
      id: 'D017110',
      name: '落花游鱼图',
      author: '刘寀',
      type: '花鸟',
    },
    // 添加更多画作信息
  ];

  return (
    <div className="artwork-container">
      <div className="artwork-units">
        {/* 渲染多个画作单位 */}
        {artworks.map((artwork) => (
          <ArtworkUnit
            Image={artwork.img}
            key={artwork.id}
            id={artwork.id}
            name={artwork.name}
            author={artwork.author}
            type={artwork.type}
          />
        ))}
      </div>
    </div>
  );
}



export default Artwork;
