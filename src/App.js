import React, { useState } from 'react';
import './App.css';
import FileItem from './components/file';

const folderData = {
  name: 'Folder 1',
  type: 'folder',
  children: [
    {
      name: 'Folder 1-1',
      type: 'folder',
      children: [
        {
          name: 'Folder 1-1-1',
          type: 'folder',
          children: [
            { name: 'Folder 1-1-1-1', type: 'folder', children: [] },
            { name: 'Folder 1-1-1-2', type: 'folder', children: [] },
          ],
        },
        {
          name: 'Folder 1-1-2',
          type: 'folder',
          children: [{ name: 'File 1-1-2-1', type: 'file' }],
        },
      ],
    },
    {
      name: 'Folder-2',
      type: 'folder',
      children: [
        {
          name: 'Projects',
          type: 'folder',
          children: [
            { name: 'Project1', type: 'folder', children: [] },
            { name: 'Project2', type: 'folder', children: [] },
          ],
        },
        { name: 'Reports', type: 'folder', children: [] },
      ],
    },
    
    {
      name: 'Folder 3',
      type: 'folder',
      children: [
        { name: 'File 3-1', type: 'file', children: [] },
        { name: 'File 3-2', type: 'file', children: [] },
        { name: 'File 3-3', type: 'file', children: [] },
      ],
    },
  ],
};
function App() {
  const [selectedItems, setSelectedItems] = useState([]);
  const [selectedPaths, setSelectedPaths] = useState([]);

  const handleCheckboxChange = (itemName, isChecked) => {
    if (isChecked) {
      setSelectedItems((prevSelectedItems) => [...prevSelectedItems, itemName]);
    } else {
      setSelectedItems((prevSelectedItems) =>
        prevSelectedItems.filter((item) => item !== itemName)
      );
    }
  };

  const handleGeneratePaths = () => {
    const paths = selectedItems.join(' > ');
    setSelectedPaths([paths]);
  };

  return (
    <div className="App">
      <h1>Directory Structure</h1>
      <FileItem
        name={folderData.name}
        type={folderData.type}
        children={folderData.children}
        indentLevel={0}
        onCheckboxChange={handleCheckboxChange}
      />
      <button onClick={handleGeneratePaths}>Generate Selected Paths</button>
      {selectedPaths.length > 0 && (
        <div className="selected-paths">
          <h2>Selected Paths:</h2>
          <ul>
            {selectedPaths.map((path, index) => (
              <li key={index}>{path}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;