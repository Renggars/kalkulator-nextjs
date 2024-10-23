"use client"; // Menandai komponen ini sebagai Client Component

import React, { useState } from "react";
import CalculatorInterface from "./CalculatorInterface";

class BasicCalculator extends CalculatorInterface {
  add(a, b) {
    return a + b;
  }

  subtract(a, b) {
    return a - b;
  }

  multiply(a, b) {
    return a * b;
  }

  divide(a, b) {
    if (b === 0) {
      throw new Error("Cannot divide by zero");
    }
    return a / b;
  }
}

const BasicCalculatorComponent = ({ onSwitch }) => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const calculator = new BasicCalculator();

  const handleClick = (value) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput("");
    setResult("");
  };

  const handleCalculate = () => {
    try {
      const res = eval(input); // Evaluasi ekspresi matematika dari input
      setResult(res);
    } catch (error) {
      setResult("Error");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-gray-100 p-8 rounded-lg shadow-md w-full max-w-md">
        <div className="text-2xl mb-4 text-center">Basic Calculator</div>
        <div className="bg-white p-4 rounded-lg shadow-md mb-4">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full text-right p-2 border rounded"
            placeholder="Enter calculation"
            readOnly
          />
        </div>
        <div className="grid grid-cols-4 gap-2">
          {["7", "8", "9", "/"].map((char) => (
            <button
              key={char}
              onClick={() => handleClick(char)}
              className="p-2 bg-blue-300 rounded"
            >
              {char}
            </button>
          ))}
          {["4", "5", "6", "*"].map((char) => (
            <button
              key={char}
              onClick={() => handleClick(char)}
              className="p-2 bg-blue-300 rounded"
            >
              {char}
            </button>
          ))}
          {["1", "2", "3", "-"].map((char) => (
            <button
              key={char}
              onClick={() => handleClick(char)}
              className="p-2 bg-blue-300 rounded"
            >
              {char}
            </button>
          ))}
          {["0", ".", "=", "+"].map((char) => (
            <button
              key={char}
              onClick={() =>
                char === "=" ? handleCalculate() : handleClick(char)
              }
              className="p-2 bg-blue-300 rounded"
            >
              {char}
            </button>
          ))}
          <button
            onClick={handleClear}
            className="col-span-4 p-2 bg-red-500 text-white rounded"
          >
            Clear
          </button>
        </div>
        <div className="mt-4">
          <div className="text-lg">Result: {result}</div>
        </div>
        <button
          onClick={onSwitch}
          className="mt-4 w-full p-2 bg-green-500 text-white rounded"
        >
          Switch to Scientific Calculator
        </button>
      </div>
    </div>
  );
};

export default BasicCalculatorComponent;
