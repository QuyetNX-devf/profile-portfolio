"use client";
import CountUp from "react-countup";

const stast = [
  {
    num: 5,
    text: "Years of Experience",
  },
  {
    num: 20,
    plus: true,
    text: "Projects Completed",
  },
  {
    num: 20,
    text: "Happy Clients",
  },
  {
    num: 500,
    plus: true,
    text: "Code Commits",
  },
];
export const Stats = () => {
  return (
    <section className="mt-10 lg:mt-18">
      <div className="container flex flex-wrap gap-4 items-center justify-between ">
        {stast.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-center text-center mb-8 w-[]"
          >
            <h2 className="text-5xl font-bold text-white">
              <CountUp end={item.num} duration={2} delay={2} />
              {item.plus && "+"}
            </h2>
            <p
              className={`${
                item.text.length > 15 ? "max-w-[100px]" : "max-w-[150px]"
              } text-white/80 pl-2 leading-snug`}
            >
              {item.text}
            </p>
          </div>
        ))}
        {/* <CountUp end={5} duration={2}></CountUp> */}
      </div>
    </section>
  );
};
