"use client";
import React from "react";
import Card from "@mui/joy/Card";
import Typography from "@mui/joy/Typography";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Animation from "@/components/Animation/Animation";
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
        <Animation key={index}>
          <a
            href={`${linkOffset ? `${linkOffset}/` : "./"}${project.link}`}
            className={styles.cardLink}
          >
            <Card
              sx={{
                // xsとsmの境目は600px
                gap: 0,
                width: { xs: "155px", sm: "190px" },
                height: { xs: "230px", sm: "290px" },
                padding: { xs: "10px 10px 5px", sm: "10px 15px 10px" },
                marginBottom: "2px",
                img: {
                  objectFit: "cover",
                  borderRadius: "5px",
                  boxShadow: "4px 5px 6px 0px #a3a3a3",
                },
              }}
            >
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

              <CardCover
                sx={{
                  background:
                    "linear-gradient(to top, rgba(0, 0, 0, 0.6), transparent 60%)",
                }}
              />

              <CardContent
                sx={{
                  justifyContent: "flex-end",
                  fontSize: { xs: "16px", sm: "18px" },
                  color: "white",
                  textShadow: "1px 1px 1px rgb(0 0 0)",
                }}
              >
                <Typography level="title-lg" sx={{ color: "#fff" }}>
                  {project.name}
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: "14px", sm: "16px" },
                    textShadow: "1px 1px 1px rgb(57, 57, 57)",
                    color: "neutral.100",
                  }}
                >
                  {project.place}
                </Typography>
              </CardContent>

              {showTime && (
                <CardOverflow
                  variant="soft"
                  sx={{
                    bgcolor: "background.level1",
                    padding: { xs: "0 8px", sm: "0" },
                    marginTop: "5px",
                    marginRight: { xs: "-10px", sm: "-15px" },
                    marginBottom: { xs: "-5px", sm: "-10px" },
                    marginLeft: { xs: "-10px", sm: "-15px" },
                    background:
                      "linear-gradient(to bottom, rgba(30, 30, 30, 0.3), rgba(30, 30, 30, 0.5))",
                    borderRadius: "0 0 5px 5px",
                  }}
                >
                  <CardContent
                    orientation="horizontal"
                    sx={{
                      justifyContent: "center",
                      padding: "6px 0",
                    }}
                  >
                    <Typography
                      level="body-xs"
                      sx={{
                        fontSize: "13px",
                        fontWeight: 600,
                        color: "white",
                      }}
                    >
                      {convertScheduleToSummaryReactNode(project.schedule)}
                    </Typography>
                  </CardContent>
                </CardOverflow>
              )}
            </Card>
          </a>
        </Animation>
      ))}
    </>
  );
}
