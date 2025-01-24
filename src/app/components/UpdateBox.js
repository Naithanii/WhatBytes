import React, { useState } from "react";
import logo from "../assets/logo.png";
import Image from "next/image";


const UpdateBox = ({ data, setShowModal, updateData }) => {
  const [formData, setFormData] = useState({
    rank: data.rank,
    percentile: data.percentile,
    correctAnswers: data.correctAnswers,
  });

  const handleChange = (e) => {
    const value = e.target.value;
    
    if (e.target.name === "percentile" && /^\d+(\.\d+)?$/.test(value)) {
      setFormData({ ...formData, [e.target.name]: value });
    } else if (/^\d*$/.test(value)) { 
      setFormData({ ...formData, [e.target.name]: value });
    }
  };

  const handleSubmit = () => {
    const hasErrors = Object.values(formData).some((value) => value === '');

    if (hasErrors) {
      alert('Please fill in all fields.');
      return;

    }

    const percentile = parseFloat(formData.percentile);
    if (percentile < 0 || percentile > 100) {
      alert('Percentile must be between 0 and 100.');
      return;
    }

    if (parseInt(formData.correctAnswers, 10) > 15) {
      alert('Score cannot be greater than 15.');
      return;
    }

    updateData({
      rank: parseInt(formData.rank, 10) || 4,
      percentile: percentile,
      correctAnswers: parseInt(formData.correctAnswers, 10) || 12,
    });
    setShowModal(false);
  };

  const handleCancel = () => {
    setShowModal(false);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[45%]">
        <div className="flex flex-row justify-between">
          <h2 className="text-xl font-bold mb-4">Update Scores</h2>
          <Image src={logo} className="h-12 w-12 mb-4 mr-3" />
        </div>

        <div className="space-y-4">
          <div className="flex flex-col">
            <div className="flex flex-row justify-between">
              <div className="text-lg text-gray-600">Update Your <span className="font-bold">Rank</span></div>
              <input
                className={`p-2 border rounded border-blue-400 ${
                  formData.rank === '' ? 'border-red-500' : ''
                }`}
                type="number" 
                name="rank"
                placeholder="Update Rank"
                value={formData.rank}
                onChange={handleChange}
              />
            </div>
            {formData.rank === '' && (
              <span className="text-xs ml-auto text-red-500">Required | Enter a number!</span>
            )}
          </div>

          <div className="flex flex-col">
            <div className="flex flex-row justify-between">
              <div className="text-gray-600 text-lg">Update your <span className="font-bold">Percentile</span> </div>
              <input
                className={`p-2 border rounded border-blue-500 ${
                  formData.percentile === '' ? 'border-red-500' : ''
                }`}
                type="number" 
                step="0.01" 
                name="percentile"
                placeholder="Update Percentile"
                value={formData.percentile}
                onChange={handleChange}
              />
            </div>
            {formData.percentile === '' && (
              <span className="text-xs ml-auto text-red-500">
                Required | Please enter a percentile.
              </span>
            )}
            {parseFloat(formData.percentile) < 0 ||
              parseFloat(formData.percentile) > 100 && (
                <span className="text-xs text-red-500">
                  Percentile must be between 0 and 100.
                </span>
              )}
          </div>

          <div className="flex flex-col">
            <div className="flex flex-row justify-between">
              <div className="text-gray-600 text-lg">Update your <span className="font-bold">Current Score (Out of 15)</span></div>
              <input
                className={`p-2 border rounded border-blue-500 ${
                  formData.correctAnswers === '' ? 'border-red-500' : ''
                }`}
                type="number" 
                name="correctAnswers"
                placeholder="Update Correct Answers"
                value={formData.correctAnswers}
                onChange={handleChange}
              />
            </div>
            {formData.correctAnswers === '' && (
              <span className="text-xs ml-auto text-red-500">
                Required | Please enter a score.
              </span>
            )}
            {parseInt(formData.correctAnswers, 10) > 15 && (
              <span className="text-xs ml-auto text-red-500">
                Score cannot be greater than 15.
              </span>
            )}
          </div>
        </div>
        <div className="mt-4 flex justify-end space-x-2">
          <button
            className="px-4 py-2 bg-gray-500 text-white rounded"
            onClick={handleCancel}
          >
            Cancel
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded" onClick={handleSubmit}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateBox;