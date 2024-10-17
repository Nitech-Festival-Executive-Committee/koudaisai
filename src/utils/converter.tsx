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
  if (project.swiperOption.title) props.title = project.swiperOption.title;
  if (project.swiperOption.dayTag) {
    props.day1 = project.swiperOption.dayTag.day1;
    props.day2 = project.swiperOption.dayTag.day2;
  }
  if (project.swiperOption.projectTag)
    props.projectTag = project.swiperOption.projectTag;
  if (project.swiperOption.place) props.place = project.swiperOption.place;
  if (project.swiperOption.schedule) {
    props.schedule = (
      <span>
        {project.swiperOption.schedule.day1 && (
          <>
            {NITFES_DATE_TEXT.DAY1}: {project.swiperOption.schedule.day1}
            <br />
          </>
        )}
        {project.swiperOption.schedule.day2 && (
          <>
            {NITFES_DATE_TEXT.DAY2}: {project.swiperOption.schedule.day2}
          </>
        )}
      </span>
    );
  }

  return props;
};
