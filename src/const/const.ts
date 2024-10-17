import { createDate } from "@/utils/date";

export const NITFES_EDITION = 62 as const;
export const NITFES_YEAR = 2024 as const;
export const NITFES_MONTH = 11 as const;
export const NITFES_DATE1 = 16 as const;
export const NITFES_DATE2 = 17 as const;
export const NITFES_THEME = "Ignition" as const;
export const NITFES_TIME = "10:00-18:00" as const;

const days = ["日", "月", "火", "水", "木", "金", "土"];
const date1 = createDate({ date: 1, hour: 16, minute: 0 });
const date2 = createDate({ date: 2, hour: 16, minute: 0 });

const NITFES_DAY1 = days[date1.getDay()];
const NITFES_DAY2 = days[date2.getDay()];

export const NITFES_DATE_TEXT = {
  DAY1: `${NITFES_MONTH}/${NITFES_DATE1}(${NITFES_DAY1})`,
  DAY2: `${NITFES_MONTH}/${NITFES_DATE2}(${NITFES_DAY2})`,
  BOTH: `${NITFES_MONTH}月${NITFES_DATE1}日(${NITFES_DAY1})・${NITFES_DATE2}日(${NITFES_DAY2})`,
} as const;
export type NitfesDate =
  (typeof NITFES_DATE_TEXT)[keyof typeof NITFES_DATE_TEXT];
