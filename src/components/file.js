// src/components/FileItem.js
import React, { useState, useEffect } from 'react';

const FileItem = ({ name, type, children, onCheckboxChange }) => {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    if (onCheckboxChange) {
      onCheckboxChange(name, isChecked);
    }
  }, [isChecked, onCheckboxChange, name]);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  const handleChildCheckboxChange = (childName, childChecked) => {
    if (type === 'folder' && children) {
      const allChildrenChecked = children.every((child) => child.isChecked === true);
      setIsChecked(allChildrenChecked);
    }
    if (!childChecked) {
      setIsChecked(false);
    }
  };

  return (
    <div className={`file-item ${type}`}>
      <div className="item-container">
        <input
          type="checkbox"
          className="checkbox"
          checked={isChecked}
          onChange={toggleCheckbox}
        />
        {type === 'folder' && <span className="folder-icon">📁</span>}
        {type === 'file' && <span className="folder-icon">📄</span>}
        <span>{name}</span>
      </div>
      {children && (
        <div className="children-container">
          {children.map((child) => (
            <FileItem
              key={child.name}
              name={child.name}
              type={child.type}
              children={child.children}
              onCheckboxChange={handleChildCheckboxChange}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default FileItem;
