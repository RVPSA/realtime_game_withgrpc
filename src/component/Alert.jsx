import React from "react";
import Button from "./Button";
import { check, cross } from "../assests";

const Alert = ({ object }) => {
  return (
    <div className="flex flex-row justify-center items-center bg-[#020617] bg-opacity-50 inset-0 absolute">
      <div className="bg-cyan-50 w-96 h-96 m-10 rounded-md flex flex-col relative">
        <div
          className="w-12 h-12 rounded-full bg-[#f3f3f3] bg-opacity-80 absolute -top-5 -right-5 flex flex-row items-center justify-center z-20"
          onClick={object.btnfunction}
        >
          <img src={cross} className="w-3 h-3" alt="cross mark"/>
        </div>
        <div className="w-full h-full relative overflow-hidden">
          <div
            className={`w-96 h-96 rounded-full ${
              !object.isError ? "bg-cyan-800" : "bg-red-800"
            } absolute bottom-52`}
          ></div>
          <div
            className={`w-72 h-72 rounded-full ${
              !object.isError ? "bg-cyan-700" : "bg-red-700"
            } absolute bottom-64 left-24`}
          ></div>
          <div
            className={`w-52 h-52 rounded-full ${
              !object.isError ? "bg-cyan-600" : "bg-red-600"
            } absolute bottom-72 left-44`}
          ></div>
          <div
            className={`w-12 h-12 rounded-full ${
              !object.isError ? "bg-cyan-500" : "bg-red-500"
            } absolute bottom-52 left-[170px] flex flex-row items-center justify-center`}
          >
            <img src={!object.isError ? check : cross} className="w-6 h-6" alt="check mark or cross mark" />
          </div>
        </div>

        <h1 className="absolute bottom-44 w-full text-center">
          {object.status}
        </h1>
        <div className="absolute bottom-36 w-full text-center">
          {object.msg1}
        </div>
        <div className="absolute bottom-28 w-full text-center">
          {object.msg2}
        </div>
        <div className="absolute bottom-7 w-full">
          <Button
            btnName="Ok"
            btnfunction={object.btnfunction}
            isError={object.isError}
          ></Button>
        </div>
      </div>
    </div>
  );
}; /*  */

export default Alert;
