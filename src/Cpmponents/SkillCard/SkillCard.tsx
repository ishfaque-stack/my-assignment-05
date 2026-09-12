import React from "react";
import type { ISkill } from "../../types/skilltype";

import {
  FaReact,
  FaVuejs,
  FaNodeJs,
  FaJs,
  FaDocker,
} from "react-icons/fa";

import {
  SiSvelte,
  SiNextdotjs,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiTypescript,
  SiTailwindcss,
  SiRedis,
} from "react-icons/si";


interface Props {
  skill: ISkill;

  selectedSkills: ISkill[];

  handleAdd: (skill: ISkill) => void;
}


// ================= ICON MAP =================

const iconMap: Record<string, React.ReactNode> = {

  React: <FaReact className="text-2xl text-cyan-400" />,

  "Vue.js": (
    <FaVuejs className="text-2xl text-green-500" />
  ),

  Svelte: (
    <SiSvelte className="text-2xl text-orange-500" />
  ),

  "Next.js": (
    <SiNextdotjs className="text-2xl text-black" />
  ),

  "Node.js": (
    <FaNodeJs className="text-2xl text-green-600" />
  ),

  "Express.js": (
    <SiExpress className="text-2xl text-gray-700" />
  ),

  PostgreSQL: (
    <SiPostgresql className="text-2xl text-blue-500" />
  ),

  MongoDB: (
    <SiMongodb className="text-2xl text-green-500" />
  ),

  Redis: (
    <SiRedis className="text-2xl text-red-500" />
  ),

  JavaScript: (
    <FaJs className="text-2xl text-yellow-400" />
  ),

  TypeScript: (
    <SiTypescript className="text-2xl text-blue-600" />
  ),

  "Tailwind CSS": (
    <SiTailwindcss className="text-2xl text-cyan-400" />
  ),

  Docker: (
    <FaDocker className="text-2xl text-blue-500" />
  ),
};


// ================= BADGE MAP =================

const badgeMap: Record<
  string,
  {
    text: string;
    className: string;
  }
> = {

  React: {
    text: "Popular",
    className: "bg-cyan-50 text-cyan-500",
  },

  "Vue.js": {
    text: "Versatile",
    className: "bg-green-50 text-green-500",
  },

  Svelte: {
    text: "Fast",
    className: "bg-orange-50 text-orange-500",
  },

  "Next.js": {
    text: "Full-stack",
    className: "bg-gray-100 text-gray-600",
  },

  "Node.js": {
    text: "Popular",
    className: "bg-green-50 text-green-500",
  },

  "Express.js": {
    text: "Lightweight",
    className: "bg-orange-50 text-orange-500",
  },

  PostgreSQL: {
    text: "Reliable",
    className: "bg-blue-50 text-blue-500",
  },

  MongoDB: {
    text: "Flexible",
    className: "bg-green-50 text-green-500",
  },

  Redis: {
    text: "Fast",
    className: "bg-red-50 text-red-500",
  },

  JavaScript: {
    text: "Essential",
    className: "bg-yellow-50 text-yellow-600",
  },

  TypeScript: {
    text: "Essential",
    className: "bg-blue-50 text-blue-500",
  },

  "Tailwind CSS": {
    text: "Modern",
    className: "bg-cyan-50 text-cyan-500",
  },

  Docker: {
    text: "DevOps",
    className: "bg-blue-50 text-blue-500",
  },
};


// ================= LEVEL COLOR =================

const levelMap: Record<string, string> = {

  Beginner:
    "bg-green-50 text-green-600",

  Intermediate:
    "bg-yellow-50 text-yellow-600",

  Advanced:
    "bg-red-50 text-red-600",
};


// ================= COMPONENT =================

const SkillCard = ({
  skill,
  selectedSkills,
  handleAdd,
}: Props) => {


  // Check already added

  const alreadyAdded = selectedSkills.some(
    (selected) =>
      selected.name === skill.name
  );


  return (

    <div className="
      rounded-xl
      border
      border-slate-200
      bg-white
      shadow-sm
      hover:shadow-md
      transition
    ">

      <div className="p-4">


        {/* ICON + BADGE */}

        <div className="flex items-center justify-between">

          <div className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-lg
            bg-slate-50
          ">
            {iconMap[skill.name]}
          </div>


          <span
            className={`
              rounded-full
              px-2
              py-1
              text-[9px]
              font-medium
              ${
                badgeMap[skill.name]?.className ||
                "bg-slate-50 text-slate-500"
              }
            `}
          >
            {badgeMap[skill.name]?.text || "Technology"}
          </span>

        </div>


        {/* NAME */}

        <h3 className="
          mt-3
          text-sm
          font-bold
          text-slate-900
        ">
          {skill.name}
        </h3>


        {/* DESCRIPTION */}

        <p className="
          mt-1
          min-h-[32px]
          text-[10px]
          leading-4
          text-slate-400
        ">
          {skill.description}
        </p>


        {/* CATEGORY + LEVEL */}

        <div className="
          mt-3
          flex
          items-center
          justify-between
        ">

          <span className="
            rounded-md
            bg-slate-50
            px-2
            py-1
            text-[9px]
            text-slate-500
          ">
            {skill.category}
          </span>


          <span
            className={`
              rounded-full
              px-2
              py-1
              text-[9px]
              font-medium
              ${
                levelMap[skill.level] ||
                "bg-slate-50 text-slate-500"
              }
            `}
          >
            {skill.level}
          </span>


          <span className="text-[9px] text-slate-400">
            ⭐ {skill.rating}
          </span>

        </div>


        {/* ADD BUTTON */}

        <button
          onClick={() => handleAdd(skill)}
          disabled={alreadyAdded || selectedSkills.length >= 5}
          className={`
            mt-3
            h-8
            w-full
            rounded-md
            text-[10px]
            font-medium
            text-white
            transition

            ${
              alreadyAdded ||
              selectedSkills.length >= 5
                ? "cursor-not-allowed bg-gray-300"
                : "bg-slate-900 hover:bg-slate-800"
            }
          `}
        >

          {alreadyAdded
            ? "Added"
            : selectedSkills.length >= 5
            ? "Stack Full"
            : "Add to Stack"}

        </button>

      </div>

    </div>
  );
};

export default SkillCard;