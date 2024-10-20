import { SwiperCardProps } from "@/components/Swiper/SwiperCard/SwiperCard";
import { NITFES_DATE_TEXT } from "@/const/const";
import { ProjectData } from "@/types/projectInterface";
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

export const convertScheduleToSummaryReactNode = (
  schedule: Schedule
): ReactNode => {
  return (
    <>
      {schedule.day1 && (
        <>
          {NITFES_DATE_TEXT.DAY1}: {formatPeriod(schedule.day1)}
          <br />
        </>
      )}
      {schedule.day2 && (
        <>
          {NITFES_DATE_TEXT.DAY2}: {formatPeriod(schedule.day2)}
          <br />
        </>
      )}
    </>
  );
};

export const convertProjectDataToSwiperCardProps = (
  project: ProjectData
): SwiperCardProps => {
  const props: SwiperCardProps = {
    title: project.name,
    href: `/project/${project.link}/`,
    imageUrl: `/62nd/project/${project.link}/brochure.webp`,
    imageAlt: project.name,
    projectTag: project.tags,
    schedule: convertScheduleToSummaryReactNode(project.schedule),
    place: project.place,
  };

  if (!project.swiperOption) return props; // オプションがなければそのまま返す

  // オプションがある場合は上書き
  const {
    title,
    dayTag,
    projectTag: swiperProjectTag,
    place,
    schedule,
  } = project.swiperOption;

  if (title) props.title = title;
  if (dayTag) {
    props.day1 = dayTag.day1;
    props.day2 = dayTag.day2;
  }
  if (swiperProjectTag) props.projectTag = swiperProjectTag;
  if (place) props.place = place;
  if (schedule) {
    props.schedule = (
      <span>
        {schedule.day1 && (
          <>
            {NITFES_DATE_TEXT.DAY1}: {schedule.day1}
            <br />
          </>
        )}
        {schedule.day2 && (
          <>
            {NITFES_DATE_TEXT.DAY2}: {schedule.day2}
          </>
        )}
      </span>
    );
  }

  return props;
};
