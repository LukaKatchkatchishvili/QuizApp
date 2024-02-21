"use client";
import React, { useState, useEffect } from "react";
import useGetData from "../{hooks}/useGetData";
import { Button } from "@/components/ui/button";
import Completed from "@/components/Completed";
import { Progress } from "@/components/ui/progress";

const Page = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [progressBar, setProgressBar] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [loading, setLoading] = useState(true);
  const [correctAnswerNum, setCorrectAnswerNum] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const Questions = useGetData();
  const question =
    Questions && Questions.length > currentQuestion
      ? Questions[currentQuestion].question
      : null;

  useEffect(() => {
    if (Questions && Questions.length > 0) {
      setLoading(false);
      setProgressBar(((currentQuestion + 1) / Questions.length) * 100);
    }
  }, [Questions, currentQuestion]);

  const handleNext = () => {
    if (selectedAnswer === null) {
      return;
    }

    if (currentQuestion + 1 !== Questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setProgressBar(((currentQuestion + 2) / Questions.length) * 100);
    }

    if (
      Questions[currentQuestion].answers[selectedAnswer] ===
      Questions[currentQuestion].correctAnswer
    ) {
      setCorrectAnswerNum(correctAnswerNum + 1);
    }

    setSelectedAnswer(null);

    if (currentQuestion + 1 === Questions.length) {
      setCompleted(true);
      setProgressBar(100);
    }
  };

  const handleAnswerSelection = (index) => {
    setSelectedAnswer(index);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (completed) {
    return (
      <Completed
        correctAnswerNum={correctAnswerNum}
        questionLength={Questions.length}
      />
    );
  }

  return (
    <div className="mx-5 md:mx-auto md:w-1/2 lg:w-1/4 text-center my-10 ">
      <Progress value={progressBar} />
      <h1 className="text-xl text-start my-5 font-bold">{question}</h1>
      <div>
        <div className="items-center gap-5">
          {Questions[currentQuestion].answers.map((answer, index) => (
            <div
              key={index}
              className={`flex flex-start p-2 border my-1 cursor-pointer transition-colors ${
                selectedAnswer === index
                  ? "bg-gray-400 hover:bg-gray-600 text-white"
                  : "hover:bg-gray-300"
              }`}
              onClick={() => handleAnswerSelection(index)}
            >
              <label className="flex gap-2">
                <input
                  type="radio"
                  checked={selectedAnswer === index}
                  onChange={() => {}}
                />
                {answer}
              </label>
            </div>
          ))}
        </div>
        <Button onClick={handleNext} className="my-5">
          Next
        </Button>
      </div>
    </div>
  );
};

export default Page;
