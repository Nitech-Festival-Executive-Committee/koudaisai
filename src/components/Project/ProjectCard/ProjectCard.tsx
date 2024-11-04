"use client";
import React from "react";
import Card from "@mui/joy/Card";
import Typography from "@mui/joy/Typography";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import { ProjectData } from "@/types/projectInterface";
import Image from "next/image";
import styles from "./ProjectCard.module.scss";
import { convertScheduleToSummaryReactNode } from "@/utils/converter";

interface ProjectCardProps {
  projectList: ProjectData[];
  linkOffset?: string;
  showTime?: boolean;
}

export default function ProjectCard({
  projectList,
  linkOffset,
  showTime = false,
}: ProjectCardProps) {
  return (
    <>
      {projectList.map((project, index) => (
        <a
          key={index}
          href={`${linkOffset ? `${linkOffset}/` : "./"}${project.link}`}
          className={styles.cardLink}
        >
          <Card className={styles.card}>
            <CardCover>
              <Image
                src={`/62nd/project/${project.link}/brochure.webp`}
                alt={project.name}
                onError={(e) => {
                  const target = e.currentTarget;
                  if (target.src.includes("brochure.webp")) {
                    // brochure.webpがエラーの場合、logoBrochure.webpに切り替え
                    target.src = `../62nd/project/${project.link}/logoBrochure.webp`;
                  } else if (target.src.includes("logoBrochure.webp")) {
                    // logoBrochure.webpがエラーの場合、最終的にnoImage.webpに切り替え
                    target.src = `../62nd/project/noImage.webp`;
                  }
                }}
                width={180}
                height={280}
              />
            </CardCover>

            <CardCover className={styles.cardOverlay} />

            {/* 企画名と場所を表示 */}
            <CardContent className={styles.cardContent}>
              <Typography level="title-lg" textColor="#fff">
                {project.name}
              </Typography>
              <Typography className={styles.sub} textColor="neutral.100">
                {project.place}
              </Typography>
            </CardContent>

            {/* 開催時間を表示 */}
            <div>
              {showTime && (
                <CardOverflow
                  variant="soft"
                  sx={{ bgcolor: "background.level1" }}
                  className={styles.cardDetail}
                >
                  <CardContent
                    orientation="horizontal"
                    className={styles.cardOverflowContent}
                  >
                    <Typography level="body-xs" className={styles.typography}>
                      {convertScheduleToSummaryReactNode(project.schedule)}
                    </Typography>
                  </CardContent>
                </CardOverflow>
              )}
            </div>
          </Card>
        </a>
      ))}
    </>
  );
}
