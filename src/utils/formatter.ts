import { Period } from "@/types/types";

export const formatPeriod = (period: Period): string => {
  const formatTime = (date: Date): string => {
    const hours = date.getUTCHours().toString().padStart(2, "0");
    const minutes = date.getUTCMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  };

  const startTime = formatTime(period.startDate);
  const endTime = formatTime(period.endDate);

  return `${startTime}～${endTime}`;
};
