import React from "react";

const Button = ({ btnName }) => {
  return (
    <div className="flex flex-row items-center">
      <button className="rounded-lg p-3 m-3 bg-gradient-to-t from-cyan-600 to-cyan-500 hover:from-cyan-700 hover:to-cyan-600 w-full">
        {btnName}
      </button>
    </div>
  );
};

export default Button;
