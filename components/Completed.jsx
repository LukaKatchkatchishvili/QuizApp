import React from "react";
import { Button } from "./ui/button";
import data from "@/data/data";

const Completed = ({ correctAnswerNum, questionLength }) => {
  const handleRefresh = () => {
    window.location.reload();
  };

  let content;
  if (correctAnswerNum >= 5) {
    content = data.moreThan5;
  } else if (correctAnswerNum >= 3) {
    content = data.moreThan3;
  } else {
    content = data.lessThan3;
  }

  return (
    <>
      <section className=" md:w-3/4 lg:w-1/3 mx-10 md:mx-auto text-center my-10 border px-10">
        <h1 className="text-[#ca3535f9] text-2xl font-bold my-3">
          {content.title}
        </h1>
        <div className="lg:w-1/2  flex items-center justify-center mx-auto gap-5 border py-3 px-10">
          <div className="w-24">
            <div className="text-3xl text-[#47b03bf9]">{correctAnswerNum}</div>
            <p className="text-sm">სწორი</p>
          </div>
          <span className="text-4xl text-[#8a808070]">/</span>
          <div className="w-24">
            <div className="text-3xl">{questionLength}</div>
            <p className="text-sm">კითხვიდან</p>
          </div>
        </div>
        <div>
          <img src="" alt="" />
        </div>
        <div className="py-5">{content.description}</div>
        <div>
          <Button
            onClick={handleRefresh}
            variant="secondary"
            className="my-5 bg-[#e3665df9] text-white hover:bg-[#e3665db7]"
          >
            Start Again
          </Button>
        </div>
      </section>
    </>
  );
};

export default Completed;
