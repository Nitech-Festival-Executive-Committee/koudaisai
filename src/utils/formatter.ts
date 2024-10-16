import { Period } from "@/types/types";

export const formatPeriod = (period: Period): string => {
  const startTime = period.startDate.toLocaleTimeString("ja-JP", {
    hour: "2-digit",
    minute: "2-digit",
  });
  const endTime = period.endDate.toLocaleTimeString("ja-JP", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return `${startTime}～${endTime}`;
};
