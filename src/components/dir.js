import React from 'react';
import FileItem from './file';

const DirectoryTree = ({ data }) => {
  const renderTree = (items) => {
    return (
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <FileItem name={item.name} type={item.type} />
            {item.children && renderTree(item.children)}
          </li>
        ))}
      </ul>
    );
  };

  return <div>{renderTree(data)}</div>;
};

export default DirectoryTree;
