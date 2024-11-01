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
  const dateObj = new Date(
    Date.UTC(
      NITFES_YEAR,
      NITFES_MONTH - 1,
      date === 1 ? NITFES_DATE1 : NITFES_DATE2,
      hour,
      minute,
      0,
      0
    )
  );
  return dateObj;
};
