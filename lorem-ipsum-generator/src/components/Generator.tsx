import React, { useState } from "react";
import { LoremIpsum } from "lorem-ipsum";
import { FaCopy } from "react-icons/fa";

const lorem = new LoremIpsum();

const Generator: React.FC = () => {
  const [paragraphs, setParagraphs] = useState<string[]>([]);
  const [numParagraphs, setNumParagraphs] = useState<number>(1);

  const generateLoremIpsum = () => {
    const loremIpsumText = [];
    for (let i = 0; i < numParagraphs; i++) {
      let paragraph = lorem.generateParagraphs(1);
      loremIpsumText.push(paragraph);
    }
    setParagraphs(loremIpsumText);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    setNumParagraphs(value);
  };

  const handleCopyToClipboard=()=>{
    const textToCopy = paragraphs.join('\n');
    navigator.clipboard.writeText(textToCopy);
  }

  return (
    <div className="px-20 pt-5">
      <div className="flex flex-col justify-start sm:flex-row mb-4">
        <label className="py-2 pr-2">Paragraphs:</label>
        <input
          type="number"
          min="1"
          value={numParagraphs}
          onChange={handleInputChange}
          className="mr-2 p-2 border border-gray-300"
        />
        <div className="flex flex-row mt-3 sm:mt-0">
        <button onClick={generateLoremIpsum} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-400">
          Generate
        </button>
        <button onClick={handleCopyToClipboard} className="bg-green-500 text-white px-4 py-2 ml-2 rounded hover:bg-green-400">
          <FaCopy size={20} />
        </button></div>
      </div>
      <div className="mb-20">
        {paragraphs.map((paragraph, index)=>(
            <p key={index} className="my-3">{paragraph}</p>
        ))}
      </div>
    </div>
  );
};

export default Generator;
