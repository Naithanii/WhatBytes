"use client";
import { useState } from "react";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";

// Define the type for the data state
type Data = {
  rank: number;
  percentile: number;
  correctAnswers: number;
  totalQuestions: number;
  syllabusAnalysis: {
    htmlTools: number;
    tagsReferences: number;
    tablesReferences: number;
    cssBasics: number;
  };
};

export default function Page() {
  // Set the type for the data state
  const [data, setData] = useState<Data>({
    rank: 4,
    percentile: 90,
    correctAnswers: 12,
    totalQuestions: 15,
    syllabusAnalysis: {
      htmlTools: 80,
      tagsReferences: 60,
      tablesReferences: 24,
      cssBasics: 96,
    },
  });

  // Explicitly type the parameter for updateData
  const updateData = (newData: Data) => setData(newData);

  return (
    <div>
      <Navbar />
      <HomePage data={data} updateData={updateData} />
    </div>
  );
}
