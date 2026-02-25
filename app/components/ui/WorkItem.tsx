'use client'


import Image from 'next/image'
import React from 'react'
import * as motion from "motion/react-client"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";

const WorkItem = ({
  ImageUrl = "",
  title,
  date,
  description,
  icons = [],
  caseStudyUrl = "",
  liveUrl = "",
}: {
  ImageUrl: string;
  title: string;
  date: string;
  description: string;
  icons: string[];
  caseStudyUrl?: string;
  liveUrl?: string;
}) => {
  return (
    <div className="flex flex-col gap-2 w-full">
      <div className="w-fit">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onHoverStart={() => console.log("hover started!")}
        >
          <Image
            src={ImageUrl ? ImageUrl : "/works/empty.png"}
            alt="work item"
            width={263.38}
            height={141.63}
          />
        </motion.button>
      </div>
      <div className="w-full flex flex-col justify-start [&>p]:text-left gap-2">
        <p className="font-bold ">{title}</p>
        <p className="font-bold text-[10px]">{date}</p>
        <p className="text-md">{description}</p>
        <span className="flex items-center gap-4 ">
          {caseStudyUrl && (
            <Link target="_blank" href={caseStudyUrl}>
              <p className="text-xs text-[#00FFFF] underline">
                View Case Study
              </p>
            </Link>
          )}
          {liveUrl && (
            <Link target="_blank" href={liveUrl}>
              <p className="text-xs text-[#00FFFF] underline">View Live Site</p>
            </Link>
          )}
        </span>
        <div className="flex gap-4 mt-3 h-5">
          {icons?.map((item, i) => (
            <Tooltip key={i}>
              <TooltipTrigger asChild>
                <Image
                  src={`/Icons/white/${item}-icon.svg`}
                  alt="icon"
                  width={20}
                  height={20}
                />
              </TooltipTrigger>
              <TooltipContent>
                <p>{item}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkItem