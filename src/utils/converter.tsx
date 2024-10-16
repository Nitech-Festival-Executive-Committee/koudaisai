import { NITFES_DATE_TEXT } from "@/const/const";
import { Schedule } from "@/types/types";
import { formatPeriod } from "@/utils/formatter";
import React from "react";
import { ReactNode } from "react";

export const convertScheduleToReactNode = (schedule: Schedule): ReactNode => {
  return (
    <>
      {schedule.day1 && (
        <p>
          <span>
            1日目({NITFES_DATE_TEXT.DAY1}): {formatPeriod(schedule.day1)}
          </span>
        </p>
      )}
      {schedule.day2 && (
        <p>
          <span>
            2日目({NITFES_DATE_TEXT.DAY2}): {formatPeriod(schedule.day2)}
          </span>
        </p>
      )}
    </>
  );
};
