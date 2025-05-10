import React from "react";
import { Vortex } from "@/componets/ui/vortex";
import ExperienceSection from "./ExperienceSection";

export function VortexDemo() {
  return (
    <div className=" mx-auto rounded-md   overflow-hidden">
      <Vortex
        backgroundColor="black"
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      >
         <ExperienceSection/>
      </Vortex>
    </div>
  );
}
