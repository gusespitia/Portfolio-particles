"use client";
import CountUp from "react-countup";
import { dataCounter } from "@/utils/data";

const CounterServices = () => {
  return (
    <div className="justify-center items-center gap-3 md:gap-6 grid grid-cols-2 md:grid-cols-4 mx-auto my-8 max-w-3xl">
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
                <p className="flex justify-center mx-auto mb-2 font-extrabold text-2xl text-center text-secondary md:text-4xl ju">
                  + <CountUp end={endCounter} start={0} duration={5}></CountUp>
                </p>
                <p className="max-w-[100px] text-xs uppercase">{text}</p>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default CounterServices;
