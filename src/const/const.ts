export const NITFES_DATE = {
  DAY1: "11/16(土)",
  DAY2: "11/17(日)",
} as const;
export type NitfesDate = (typeof NITFES_DATE)[keyof typeof NITFES_DATE];

export const NITFES_EDITION = 62 as const;
export const NITFES_YEAR = 2024 as const;
export const NITFES_DATE_TEXT = "11月16日(土)・17日(日)" as const;
export const NITFES_THEME = "Ignition" as const;
export const NITFES_TIME = "10:00-18:00" as const;
