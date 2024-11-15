"use client";
import CountUp from "react-countup";
import { dataCounter } from "@/utils/data";

const CounterServices = () => {
  return (
    <div className="grid justify-between max-w-3xl grid-cols-2 gap-3 mx-auto my-8 md:grid-cols-4 md:gap-6">
      {dataCounter.map(
        ({ id, text, endCounter, lineRight, lineRightMobile }) => (
          <div
            key={id}
            className="flex flex-col items-center gap-2 text-center"
          >
            <div className={`${lineRight ? "ltr" : ""}`}>
              <div
                className={`${
                  lineRight
                    ? "px-4 border-2 border-transparent md:border-e-gray-100"
                    : ""
                } ${lineRightMobile ? "border-e-gray-100" : ""}`}
              >
                <p className="flex mb-2 text-2xl font-extrabold md:text-4xl text-secondary">
                  + <CountUp end={endCounter} start={0} duration={5}></CountUp>
                </p>
                <p className="text-xs uppercase max-w-[100px]">{text}</p>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default CounterServices;
