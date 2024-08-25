"use client";

import React, { useState } from "react";
import Image from "next/image";
import SkillCard from "./SkillCard";
import SelectFilter from "./SelectFilter";
import skills from "./skills";


const HardSkills = () => {
  const [filter, setFilter] = useState([
    "Current",
    // "Heard of",
    "New/Exploring",
    "Old",
  ]);

  const handleSelectedChanged = (event: any) => {
    const { checked, value } = event.target;

    console.log(checked, value)
    if (checked) {
      setFilter(prevFilter => ([...prevFilter, value]))
    } else {
      setFilter(prevFilter => prevFilter.filter(f => f !== value))
    }
  }
  return (
    <section id="Skills" className="mt-[16px] px-4 xs:px-0">
      <div className="flex flex-row-reverse mb-8 place-items-center jutify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="font-bold text-right">Hard Skills</h1>
          <p className="mt-3 text-right text-gray-500 dark:text-gray-400">
            These are the skills I have at the moment. you will notice some of
            them have dashed-border, that is because I'm still
            exploring those tools.
          </p>
          <SelectFilter value={filter} onSelectedChanged={handleSelectedChanged} />
        </div>
        <div className="max-[600px]:hidden">
          <Image
            alt="learning"
            src="/assets/illustrations/casual-life-3d-notebook-with-glasses-and-pencil.png"
            width={250}
            height={250}
          />
        </div>
      </div>
      <div className="relative grid max-w-lg grid-cols-2 gap-2 mx-auto md:grid-cols-3 md:max-w-3xl lg:grid-cols-4 lg:max-w-6xl place-items-center">
        {skills.filter(skill => filter.includes(skill.type)).map((skill, index) => (
          <SkillCard key={`skill-${skill.label}`} {...skill} />
        ))}
      </div>
    </section>
  );
};

export default HardSkills;
