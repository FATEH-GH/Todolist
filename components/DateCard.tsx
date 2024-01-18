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

  function getPreviousDay(date: Date) {
    const previousDay = new Date(date);
    previousDay.setDate(date.getDate() - 1);
    setDate(previousDay);
    // console.log("previously day ", previousDay);
  }

  function getFuturDay(date: Date) {
    const previousDay = new Date(date);
    previousDay.setDate(date.getDate() + 1);
    setDate(previousDay);
    // console.log("futur day ", previousDay);
  }

  return (
    <div className="flex gap-8 overflow-hidden">
      <Button className="bg-transparent" onClick={() => getPreviousDay(date)}>
        <ArrowLeft className="h-10 w-10 text-white  hover:scale-110 " />
      </Button>

      <div className="flex flex-col gap-4 itmes-center justify-center">
        <h1 className="font-bold text-white text-center text-3xl  ">
          {days[date!.getDay()]}
        </h1>
        <p className="p-2 text-white font-semibold text-nowrap">
          {format(date!, "MMMM do yyyy")}
        </p>
      </div>
      <Button className="bg-transparent" onClick={() => getFuturDay(date)}>
        <ArrowRight className="h-10 w-10 text-white  hover:scale-110 " />
      </Button>
    </div>
  );
};

export default DateCard;
