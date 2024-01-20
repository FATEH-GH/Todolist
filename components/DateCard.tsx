import { DateCardProps } from "@/types";
import { Button } from "./ui/button";
import ArrowLeft from "./ArrowLeft";
import ArrowRight from "./ArrowRight";
import { format } from "date-fns";

const DateCard = ({ setDate, date }: DateCardProps) => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return (
    <div className="flex gap-8 overflow-hidden">
      <div className="flex flex-col gap-4 itmes-center justify-center">
        <h1 className="font-bold text-white text-center text-3xl sm:text-5xl  ">
          {days[date!.getDay()]}
        </h1>
        <p className="p-2 text-white text-center font-semibold text-nowrap">
          {format(date!, "MMMM do yyyy")}
        </p>
      </div>
    </div>
  );
};

export default DateCard;
