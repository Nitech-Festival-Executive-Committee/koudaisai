"use client";
import React from "react";
import Card from "@mui/joy/Card";
import Typography from "@mui/joy/Typography";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import { ProjectData } from "@/types/projectInterface";
import Image from "next/image";

interface ProjectCardProps {
  projectList: ProjectData[];
}

export default function ProjectCard({ projectList }: ProjectCardProps) {
  return (
    <>
      {projectList.map((project, index) => (
        <Card
          key={index}
          sx={{
            minHeight: "300px",
            width: "200px",
            marginBottom: 2,
            padding: "10px 15px",
          }}
        >
          <CardCover sx={{ boxShadow: "4px 4px 5px 0px #838383" }}>
            <Image
              src={`/62nd/project/${project.link}/brochure.webp`}
              alt={project.name}
              layout="fill"
              objectFit="cover"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
          </CardCover>
          <CardCover
            sx={{
              background:
                "linear-gradient(to top, rgb(0 0 0 / 60%), rgb(0 0 0 / 10%) 60%)",
            }}
          />
          <CardContent sx={{ justifyContent: "flex-end" }}>
            <Typography level="title-lg" textColor="#fff">
              {project.name}
            </Typography>
            <Typography textColor="neutral.100">{project.place}</Typography>
          </CardContent>
        </Card>
      ))}
    </>
  );
}
