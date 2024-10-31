import {
  NITFES_DATE1,
  NITFES_DATE2,
  NITFES_MONTH,
  NITFES_YEAR,
} from "@/const/const";

export const createDate = ({
  date,
  hour,
  minute,
}: {
  date: 1 | 2;
  hour: number;
  minute: number;
}): Date => {
  const dateObj = new Date(0);

  dateObj.setFullYear(NITFES_YEAR);
  dateObj.setMonth(NITFES_MONTH - 1);
  dateObj.setDate(date === 1 ? NITFES_DATE1 : NITFES_DATE2);
  dateObj.setHours(hour);
  dateObj.setMinutes(minute);
  dateObj.setSeconds(0);
  dateObj.setMilliseconds(0);
  return dateObj;
};
