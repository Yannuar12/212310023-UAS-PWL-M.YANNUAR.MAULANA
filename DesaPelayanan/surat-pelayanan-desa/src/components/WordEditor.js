// src/components/WordEditor.js
import React, { useState } from 'react';
import Mammoth from 'mammoth';

const WordEditor = () => {
  const [content, setContent] = useState('');

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    const arrayBuffer = await file.arrayBuffer();
    const { value } = await Mammoth.extractRawText({ arrayBuffer });
    setContent(value);
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  return (
    <div>
      <input type="file" accept=".docx" onChange={handleFileChange} />
      <textarea
        value={content}
        onChange={handleContentChange}
        rows="20"
        cols="80"
      />
    </div>
  );
};

export default WordEditor;
