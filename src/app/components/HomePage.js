"use client";

import React, { useState } from "react";
import Image from "next/image";
import { PieChart, Pie, Cell, Tooltip } from "recharts";
import UpdateBox from "./UpdateBox";
import GraphComponent from "./GraphComponent";
import logo from "../assets/logo.png";
import trophyIcon from "../assets/trophy2.avif";
import clipboardIcon from "../assets/clipboard.png";
import checkIcon from "../assets/checklist.webp";
import bullseye from "../assets/bullseye.webp";
import upw from "../assets/upward.webp";

const HomePage = ({ data, updateData }) => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenUpdateBox = () => {
    setShowModal(true);
  };

  const syllabusData = [
    { title: "HTML Tools, Forms, History", percentage: 80, color: "#2563eb" },
    { title: "Tags & References in HTML", percentage: 60, color: "#f97316" },
    { title: "Tables & References in HTML", percentage: 24, color: "#ef4444" },
    { title: "Tables & CSS Basics", percentage: 96, color: "#10b981" },
  ];

  const correctAns = data.correctAnswers;
  const inCorrectAns = 15 - correctAns;

  const pieData = [
    { name: "Correct Answers", value: correctAns, color: "#3a6cea" },
    { name: "Incorrect Answers", value: inCorrectAns, color: "#c2ccf4" },
  ];

  return (
    <div className="min-h-screen p-6">
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/6 bg-white shadow-md rounded-lg p-6 mb-6 lg:mb-0">
          <h1 className="text-xl font-bold mb-6">Navigation</h1>
          <ul className="space-y-4">
            <li className="text-lg font-medium hover:text-blue-600">Dashboard</li>
            <li className="text-lg font-medium text-blue-600 bg-blue-100 p-2 rounded-lg">
              Skill Test
            </li>
            <li className="text-lg font-medium hover:text-blue-600">Internship</li>
          </ul>
        </div>

        <div className="w-full lg:w-5/6 bg-white shadow-md rounded-lg p-6">
          <h1 className="text-2xl font-bold mb-4">Skill Test</h1>

          <div className="flex flex-col lg:flex-row gap-6">
            <div className="w-full lg:w-3/5 flex flex-col gap-6">
              <div className="flex flex-row justify-evenly mb-6 border border-gray-300 rounded-md p-4">
                <Image src={logo} alt="Logo" className="h-16 w-16 mb-4 mr-3" />
                <div className="flex flex-col">
                  <h2 className="text-lg font-bold">
                    Hypertext Markup Language (HTML)
                  </h2>
                  <h3 className="text-lg font-semibold text-slate-500 font-thin mb-4">
                    Questions: 15 | Duration: 15 mins | Submitted on 5 June 2021
                  </h3>
                </div>
                <button
                  className="px-6 h-10 w-auto mt-3 text-xl font-bold bg-blue-900 text-white rounded ml-auto hover:bg-blue-800 transition-colors duration-300"
                  onClick={handleOpenUpdateBox}
                >
                  Update
                </button>
              </div>

              <div className="p-4 border border-gray-300 rounded-md">
                <h2 className="text-lg font-bold mb-4">Quick Statistics</h2>

                <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between lg:justify-start gap-4 lg:gap-0">
                  <div className="flex items-center justify-between lg:w-1/3 w-full">
                    <div className="flex justify-center items-center rounded-full bg-gray-200 h-12 w-12 mr-3">
                      <Image
                        src={trophyIcon}
                        alt="Trophy"
                        className="h-7 w-7"
                      />
                    </div>
                    <div className="flex flex-col items-start">
                      <p className="text-2xl font-bold">{data.rank}</p>
                      <p className="font-semibold text-slate-400 font-thin uppercase">
                        Your Rank
                      </p>
                    </div>
                  </div>

                  <div className="h-16 border-l border-gray-300 mx-4 lg:block hidden" />

                  <div className="flex items-center justify-between lg:w-1/3 w-full">
                    <div className="flex justify-center items-center rounded-full bg-gray-200 h-12 w-12 mr-3">
                      <Image
                        src={clipboardIcon}
                        alt="Clipboard"
                        className="h-6 w-6"
                      />
                    </div>
                    <div className="flex flex-col items-start">
                      <p className="text-2xl font-bold">{data.percentile}%</p>
                      <p className="font-semibold text-slate-400 font-thin uppercase">
                        Percentile
                      </p>
                    </div>
                  </div>

                  <div className="h-16 border-l border-gray-300 mx-4 lg:block hidden" />

                  <div className="flex items-center justify-between lg:w-1/3 w-full">
                    <div className="flex justify-center items-center rounded-full bg-gray-200 h-12 w-12 mr-3">
                      <Image src={checkIcon} alt="Check" className="h-6 w-6" />
                    </div>
                    <div className="flex flex-col items-start">
                      <p className="text-2xl font-bold">{data.correctAnswers}/15</p>
                      <p className="font-semibold text-slate-400 font-thin uppercase">
                        Correct Answers
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-md border border-gray-300">
                <h2 className="text-lg font-bold mb-4">Comparison Graph</h2>
                <div className="flex flex-row justify-between">
                  <div className="w-[80%] text-lg text-gray-600 ">
                    <span className="font-bold">You scored 30% percentile</span>{" "}
                    which is lower than the average percentile 72% of all the
                    engineers who took this assessment
                  </div>
                  <div className="flex justify-center items-center rounded-full bg-gray-200 h-12 w-12 mr-3">
                    <Image src={upw} alt="Check" className="h-6 w-6" />
                  </div>
                </div>

                <GraphComponent stats={data} />
              </div>
            </div>

            <div className="w-full lg:w-2/5">
              <div className="mb-6 p-4 rounded-md border border-gray-300">
                <h2 className="text-lg font-bold mb-4">Syllabus Wise Analysis</h2>
                {syllabusData.map((item, index) => (
                  <div key={index} className="mb-2 my-10">
                    <div className="flex flex-row justify-between my-4 text-gray-600 text-lg">
                      <span className=" font-medium">{item.title}</span>
                    </div>

                    <div className="flex flex-row justify-between">
                      <div className="w-[80%] flex h-3 border bg-gray-200 rounded-full mt-1">
                        <div
                          className="h-3 rounded-full"
                          style={{
                            width: `${item.percentage}%`,
                            backgroundColor: item.color,
                          }}
                        ></div>
                      </div>
                      <span
                        className=" font-bold"
                        style={{ color: item.color }}
                      >
                        {item.percentage}%
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col p-4 rounded-md border border-gray-300">
                <div className="flex flex-row justify-between">
                  <h2 className="text-lg font-bold mb-4">Question Analysis</h2>
                  <span className="text-lg text-blue-700 font-bold">
                    {correctAns}/15
                  </span>
                </div>

                <div className="text-lg text-gray-600">
                  <span className="font-bold">
                    You scored {correctAns} questions correct out of 15.{" "}
                  </span>
                  However it still needs some improvements.
                </div>

                <div className="relative flex flex-col items-center">
                  <PieChart width={300} height={300}>
                    <Pie
                      data={pieData}
                      cx="50%"
                      cy="50%"
                      innerRadius={65}
                      outerRadius={100}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>

                  <div className="flex justify-center items-center mt-4">
                    <Image
                      src={bullseye}
                      alt="Bullseye"
                      className="h-14 w-14 absolute"
                      style={{
                        top: "40%",
                        left: "52%",
                        transform: "translate(-50%, -50%)",
                      }}
                    />
                  </div>

                  <div className="flex gap-4 mt-4">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-[#3a6cea] rounded-full"></div>
                      <span className="text-sm">Correct Answers</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-[#c2ccf4] rounded-full"></div>
                      <span className="text-sm">Incorrect Answers</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showModal && (
        <UpdateBox
          data={data}
          setShowModal={setShowModal}
          updateData={updateData}
        />
      )}
    </div>
  );
};

export default HomePage;
