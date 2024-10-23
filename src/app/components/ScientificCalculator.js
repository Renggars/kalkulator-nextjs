"use client"; // Menandai komponen ini sebagai Client Component

import React, { useState } from "react";
import CalculatorInterface from "./CalculatorInterface";

class ScientificCalculator extends CalculatorInterface {
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

  squareRoot(a) {
    if (a < 0) {
      throw new Error("Cannot calculate square root of a negative number");
    }
    return Math.sqrt(a);
  }

  power(a, b) {
    return Math.pow(a, b);
  }

  sine(a) {
    return Math.sin(a);
  }

  cosine(a) {
    return Math.cos(a);
  }

  tangent(a) {
    return Math.tan(a);
  }

  logarithm(a) {
    return Math.log(a);
  }
}

const ScientificCalculatorComponent = ({ onSwitch }) => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const calculator = new ScientificCalculator();

  const handleClick = (value) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput("");
    setResult("");
  };

  const handleCalculate = () => {
    try {
      const parsedInput = input.split(" "); // Memisahkan input berdasarkan spasi

      // Contoh sederhana untuk kalkulasi
      let a = parseFloat(parsedInput[0]);
      let operator = parsedInput[1];
      let b = parseFloat(parsedInput[2]);

      let res = 0;

      // Kalkulasi berdasarkan operator
      switch (operator) {
        case "+":
          res = calculator.add(a, b);
          break;
        case "-":
          res = calculator.subtract(a, b);
          break;
        case "*":
          res = calculator.multiply(a, b);
          break;
        case "/":
          res = calculator.divide(a, b);
          break;
        case "sqrt":
          res = calculator.squareRoot(a);
          break;
        case "pow":
          res = calculator.power(a, b);
          break;
        case "sin":
          res = calculator.sine(a);
          break;
        case "cos":
          res = calculator.cosine(a);
          break;
        case "tan":
          res = calculator.tangent(a);
          break;
        case "log":
          res = calculator.logarithm(a);
          break;
        default:
          throw new Error("Operator tidak valid");
      }

      setResult(res);
    } catch (error) {
      setResult("Error");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-gray-100 p-8 rounded-lg shadow-md w-full max-w-md">
        <div className="text-2xl mb-4 text-center">Scientific Calculator</div>
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
            onClick={() => handleClick(" sqrt ")}
            className="p-2 bg-blue-300 rounded"
          >
            √
          </button>
          <button
            onClick={() => handleClick(" pow ")}
            className="p-2 bg-blue-300 rounded"
          >
            x²
          </button>
          <button
            onClick={() => handleClick(" sin ")}
            className="p-2 bg-blue-300 rounded"
          >
            sin
          </button>
          <button
            onClick={() => handleClick(" cos ")}
            className="p-2 bg-blue-300 rounded"
          >
            cos
          </button>
          <button
            onClick={() => handleClick(" tan ")}
            className="p-2 bg-blue-300 rounded"
          >
            tan
          </button>
          <button
            onClick={() => handleClick(" log ")}
            className="p-2 bg-blue-300 rounded"
          >
            log
          </button>
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
          Switch to Basic Calculator
        </button>
      </div>
    </div>
  );
};

export default ScientificCalculatorComponent;
