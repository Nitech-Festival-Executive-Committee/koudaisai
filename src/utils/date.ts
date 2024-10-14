import {
  NITFES_DATE1,
  NITFES_DATE2,
  NITFES_MONTH,
  NITFES_YEAR,
} from "@/const/const";

export const createDate = (
  dayNumber: 1 | 2,
  hour: number,
  minute: number
): Date => {
  const date = new Date();

  date.setFullYear(NITFES_YEAR);
  date.setMonth(NITFES_MONTH);
  date.setDate(dayNumber === 1 ? NITFES_DATE1 : NITFES_DATE2);
  date.setHours(hour);
  date.setMinutes(minute);
  date.setSeconds(0);
  date.setMilliseconds(0);
  return date;
};
