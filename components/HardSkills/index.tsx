"use client";

import React, { useState } from "react";
import Image from "next/image";
import SkillCard from "./SkillCard";
import SelectFilter from "./SelectFilter";
import { SkillCardProp, TSkillType } from "./types";

const skills: SkillCardProp[] = [
  {
    imageUrl: "/assets/icons/icons8-html-5.svg",
    label: "HTML",
    learning: false,
    background: "rgba(255, 98, 0, 0.055)",
    type: "Current",
  },
  {
    imageUrl: "/assets/icons/icons8-css3.svg",
    label: "CSS",
    learning: false,
    background: "rgba(0, 157, 230, 0.055)",
    type: "Current",
  },
  {
    imageUrl: "/assets/icons/icons8-javascript.svg",
    label: "JavaScript",
    learning: false,
    background: "rgba(254, 221, 35, 0.15)",
    type: "Current",
  },
  {
    imageUrl: "/assets/icons/icons8-nodejs.svg",
    label: "Node JS",
    learning: false,
    background: "rgba(94, 170, 98.055, 0.077)",
    type: "Old",
  },
  {
    imageUrl: "/assets/icons/icons8-react-native.svg",
    label: "React",
    learning: false,
    background: "rgba(77, 223, 236, 0.055)",
    type: "Current",
  },
  {
    imageUrl: "/assets/icons/icons8-graphql.svg",
    label: "GraphQL",
    learning: false,
    background: "rgba(255, 35, 119, 0.055)",
    type: "Current",
  },
  {
    imageUrl: "/assets/icons/icons8-apollo.svg",
    label: "Apollo Client",
    learning: false,
    background: "rgba(85, 44, 167, 0.055)",
    type: "Current",
  },
  {
    imageUrl: "/assets/icons/icons8-material-ui.svg",
    label: "Material UI",
    learning: false,
    background: "rgba(0, 157, 230, 0.055)",
    type: "Current",
  },
  {
    imageUrl: "/assets/icons/icons8-tailwind-css.svg",
    label: "Tailwind",
    learning: true,
    background: "rgba(0, 157, 230, 0.055)",
    type: "New/Exploring",
  },
  {
    imageUrl: "/assets/icons/icons8-typescript.svg",
    label: "TypeScript",
    learning: true,
    background: "rgba(0, 157, 230, 0.055)",
    type: "New/Exploring",
  },
  {
    imageUrl: "/assets/icons/nextjs-2.svg",
    label: "Next JS",
    learning: true,
    background: "rgba(0, 0, 0, 0.055)",
    type: "New/Exploring",
  },
  {
    imageUrl: "/assets/icons/icons8-flutter.svg",
    label: "Flutter",
    learning: false,
    background: "rgba(0, 199, 255, 0.077)",
    type: "Heard of",
  },
  {
    imageUrl: "/assets/icons/icons8-jquery.svg",
    label: "jQuery",
    learning: false,
    background: "rgba(110, 135, 184, 0.077)",
    type: "Old",
  },
  {
    imageUrl: "/assets/icons/icons8-php.svg",
    label: "PHP",
    learning: false,
    background: "rgba(110, 135, 184, 0.077)",
    type: "Old",
  },
  {
    imageUrl: "/assets/icons/icons8-redux.svg",
    label: "Redux",
    learning: false,
    background: "rgba(132, 85, 192, 0.077)",
    type: "Heard of",
  },
  {
    imageUrl: "/assets/icons/icons8-sass.svg",
    label: "Sass",
    learning: false,
    background: "rgba(255, 87, 139, 0.077)",
    type: "Old",
  },
  {
    imageUrl: "/assets/icons/icons8-git.svg",
    label: "Git",
    learning: false,
    background: "rgba(255, 65, 0, 0.066)",
    type: "Current",
  },
];

const HardSkills = () => {
  const [filter, setFilter] = useState([
    "Current",
    "Heard of",
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
    <section className="mt-[16px]">
      <div className="flex place-items-center jutify-between mb-8 md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="font-bold">Hard Skills</h1>
          <p className="mt-3 text-gray-500">
            These are the skills I have at the moment. you will notice some of
            them have lower opacity than others, that is because I'm still
            exploring those tools.
          </p>
          <SelectFilter value={filter} onSelectedChanged={handleSelectedChanged} />
        </div>
        <div className="max-[600px]:hidden">
          <Image
            alt="learning"
            src="/assets/illustrations/3d-casual-life-text-program-on-computer-screen.png"
            width={250}
            height={250}
          />
        </div>
      </div>
      <div className="relative grid grid-cols-2 gap-2 mx-auto max-w-lg md:grid-cols-3 md:max-w-3xl lg:grid-cols-4 lg:max-w-6xl place-items-center">
        {skills.filter(skill => filter.includes(skill.type)).map((skill) => (
          <SkillCard {...skill} />
        ))}
      </div>
    </section>
  );
};

export default HardSkills;
