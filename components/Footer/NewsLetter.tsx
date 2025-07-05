import React from "react";
import { BsSend } from "react-icons/bs";

const NewsLetter = () => {
  return (
    <form className="relative w-full max-w-[30rem] mt-5 px-4 mx-auto">
      <input
        type="text"
        placeholder="Enter your email"
        className="w-full py-4 px-4 text-sm rounded-[15px] pr-32"
      />
      <button
        className="absolute top-1/2 -translate-y-1/2 right-2 flex items-center space-x-2 px-4 py-4 bg-primary text-white rounded-[10px] text-sm"
        type="submit"
      >
        <span>Subscribe Now</span>
        <BsSend />
      </button>
    </form>
  );
};

export default NewsLetter;
