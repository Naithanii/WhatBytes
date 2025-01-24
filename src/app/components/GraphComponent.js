"use client";

import React from "react";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

const GraphComponent = ({ stats }) => {
  const percentileValue = stats?.percentile || 75;

  const data = {
    labels: ["0", "25", "50", "75", "100"],
    datasets: [
      {
        label: "Percentile Score",
        data: [10, 30, 50, percentileValue, 90], 
        borderColor: "blue",
        backgroundColor: "transparent", 
        tension: 0.4,
        pointBackgroundColor: ["blue", "blue", "blue", "red", "blue"],
        pointBorderColor: ["blue", "blue", "blue", "red", "blue"],
        pointRadius: [6, 6, 6, 8, 6], 
        pointHoverRadius: [8, 8, 8, 10, 8], 
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
      },
    },
    scales: {
      x: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Performance Level",
        },
        grid: {
          display: false, 
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Percentile Score",
        },
        grid: {
          display: false, 
        },
      },
    },
  };

  return (
    <div className="mt-6 bg-white p-4 rounded shadow h-[450px] relative">
      <h2 className="text-lg font-bold">Comparison Graph</h2>
      <Line data={data} options={options} />
      <div className="absolute top-[50%] left-[65%] text-red-500 font-bold text-sm">
        Your Percentile ({percentileValue}%)
      </div>
    </div>
  );
};

export default GraphComponent;
