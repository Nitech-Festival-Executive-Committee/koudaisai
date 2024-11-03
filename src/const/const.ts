import { createDate } from "@/utils/date";

export const NITFES_EDITION = 62 as const;
export const NITFES_YEAR = 2024 as const;
export const NITFES_MONTH = 11 as const;
export const NITFES_DATE1 = 16 as const;
export const NITFES_DATE2 = 17 as const;
export const NITFES_THEME = "Ignition" as const;
export const NITFES_TIME_DATE1 = "10:00~18:30" as const;
export const NITFES_TIME_DATE2 = "10:00~18:10" as const;

// 曜日
const days = ["日", "月", "火", "水", "木", "金", "土"];
export const NITFES_DAY1 =
  days[createDate({ date: 1, hour: 16, minute: 0 }).getUTCDay()];
export const NITFES_DAY2 =
  days[createDate({ date: 2, hour: 16, minute: 0 }).getUTCDay()];

export const NITFES_DATE_TEXT = {
  // n月n日(曜日)
  DAY1: `${NITFES_MONTH}月${NITFES_DATE1}日(${NITFES_DAY1})`,
  DAY2: `${NITFES_MONTH}月${NITFES_DATE2}日(${NITFES_DAY2})`,
  // n月n日(曜日)・n月n日(曜日)
  BOTH: `${NITFES_MONTH}月${NITFES_DATE1}日(${NITFES_DAY1})・${NITFES_DATE2}日(${NITFES_DAY2})`,
  // n/n(曜日)
  DAY1_SLASH: `${NITFES_MONTH}/${NITFES_DATE1}(${NITFES_DAY1})`,
  DAY2_SLASH: `${NITFES_MONTH}/${NITFES_DATE2}(${NITFES_DAY2})`,
  // n/n(曜日)・n/n(曜日)
  BOTH_SLASH: `${NITFES_MONTH}/${NITFES_DATE1}(${NITFES_DAY1})・${NITFES_MONTH}/${NITFES_DATE2}(${NITFES_DAY2})`,
} as const;
export type NitfesDate =
  (typeof NITFES_DATE_TEXT)[keyof typeof NITFES_DATE_TEXT];
