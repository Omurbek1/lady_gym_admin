// Tabs.js

import React, { useState } from 'react';

const Tabs = ({ tabs, defaultTab }) => {
  const [activeTab, setActiveTab] = useState(defaultTab || 0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div style={{width: '40%'}}>
      <div className="tab-buttons" >
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={index === activeTab ? 'active' : ''}
            onClick={() => handleTabClick(index)}
            style={{backgroundColor:activeTab===index?"transparent":"transparent",width:"20%",margin:0,alignSelf:'center',color:activeTab===index?"white":"white",border:'none'}}
          >
          
          </button>
        ))}
      </div>
      <div className="tab-content">
        {tabs[activeTab].content}
      </div>
    </div>
  );
};

export default Tabs;
