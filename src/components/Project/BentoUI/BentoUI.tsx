import React from "react";
import { BentoGrid, BentoGridItem } from "@/lib/bento-grid";
import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { seiyu } from "@/app/project/seiyu/seiyu";
import { artfulCampus } from "@/app/project/artful-campus/artfulCampus";

export function BentoUI() {
  return (
    <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
      {items.map((item, index) => (
        <BentoGridItem
          key={index}
          className={item.className}
          title={item.title}
          description={item.description}
          icon={item.icon}
          style={{
            borderRadius: "10px",
            boxShadow: "8px 6px 8px 0px #dadada",
            background: `url(${item.img}) no-repeat center / cover`,
          }}
        />
      ))}
    </BentoGrid>
  );
}
const items = [
  {
    title: seiyu.name,
    description: "Explore the birth of groundbreaking ideas and inventions.",
    className: "md:col-span-2",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    img: `/62nd/project/${seiyu.link}/brochure.webp`,
  },
  {
    title: "The Digital Revolution",
    description: "Dive into the transformative power of technology.",
    className: "md:col-span-1",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    img: `/62nd/project/${artfulCampus.link}/brochure.webp`,
  },
  {
    title: "The Art of Design",
    description: "Discover the beauty of thoughtful and functional design.",
    className: "md:col-span-1",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    img: `/62nd/project/${seiyu.link}/brochure.webp`,
  },
  {
    title: "The Power of Communication",
    description:
      "Understand the impact of effective communication in our lives.",
    className: "md:col-span-2",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    img: `/62nd/project/${seiyu.link}/brochure.webp`,
  },
];
