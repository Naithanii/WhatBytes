"use client";
import { useState } from "react";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";

export default function Page() {
  const [data, setData] = useState({
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

  const updateData = (newData) => setData(newData);

  return (
    <div>
      <Navbar />
      <HomePage data={data} updateData={updateData} />
    </div>
  );
}
