"use client"; // Menandai file ini sebagai Client Component

import Head from "next/head";
import { useState } from "react";
import BasicCalculator from "./components/BasicCalculator";
import ScientificCalculatorComponent from "./components/ScientificCalculator";

export default function Home() {
  const [isScientific, setIsScientific] = useState(false);

  const handleSwitch = () => {
    setIsScientific(!isScientific);
  };

  return (
    <>
      <Head>
        <title>Calculator App</title>
        <meta
          name="description"
          content="A scientific calculator built with Next.js"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {isScientific ? (
        <ScientificCalculatorComponent onSwitch={handleSwitch} />
      ) : (
        <BasicCalculator onSwitch={handleSwitch} />
      )}
    </>
  );
}
