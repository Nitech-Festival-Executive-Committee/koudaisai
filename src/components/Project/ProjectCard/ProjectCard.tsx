"use client";
import React from "react";
import Card from "@mui/joy/Card";
import Typography from "@mui/joy/Typography";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import { ProjectData } from "@/types/projectInterface";
import Image from "next/image";
import styles from "./ProjectCard.module.scss";

interface ProjectCardProps {
  projectList: ProjectData[];
}

export default function ProjectCard({ projectList }: ProjectCardProps) {
  return (
    <>
      {projectList.map((project, index) => (
        <a
          key={index}
          href={`./${project.link}`}
          style={{ width: "auto", height: "auto", textDecoration: "none" }}
        >
          <Card className={styles.card}>
            <CardCover sx={{ boxShadow: "4px 4px 5px 0px #838383" }}>
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
                style={{ objectFit: "cover" }}
                width={180}
                height={280}
              />
            </CardCover>
            <CardCover
              sx={{
                background:
                  "linear-gradient(to top, rgb(0 0 0 / 60%), rgb(0 0 0 / 0%) 60%)",
              }}
            />
            <CardContent sx={{ justifyContent: "flex-end" }}>
              <Typography level="title-lg" textColor="#fff">
                {project.name}
              </Typography>
              <Typography textColor="neutral.200">{project.place}</Typography>
            </CardContent>
          </Card>
        </a>
      ))}
    </>
  );
}
