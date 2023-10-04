import React, { useState, useEffect } from 'react';import logo from './logo.svg';
import Checkbox from './components/Checkbox';
import TestComponent from './components/TestComponent.js'
import { saveData, getData } from './utils/localStorage';
import './App.css';

function App() {
  const [selectedOptions, setSelectedOptions] = useState(getData("options") || {});
  const [text, setText] = useState('');

  useEffect(() => {
    // Generate text based on selected options
    let generatedText = '';
    for (const [key, value] of Object.entries(selectedOptions)) {
      if (value) {
        generatedText += `${key} is selected. `;
      }
    }
    setText(generatedText);

    // Save to local storage
    saveData("options", selectedOptions);
  }, [selectedOptions]);

  const handleToggle = (label) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  return (
    <div>
      <h1>Checkbox App</h1>

      <div>
        <Checkbox label="Option 1" isChecked={selectedOptions["Option 1"]} onToggle={handleToggle} />
        <Checkbox label="Option 2" isChecked={selectedOptions["Option 2"]} onToggle={handleToggle} />
        {/* Add more checkboxes as needed */}
      </div>

      <div>
        <h2>Generated Text:</h2>
        <textarea readOnly value={text} />
      </div>
    </div>
  );
}

export default App;
