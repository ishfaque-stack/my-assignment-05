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
  selectedSkills: ISkill[];

  handleRemove: (skillName: string) => void;

  handleRemoveAll: () => void;
}


// ================= ICON MAP =================

const iconMap: Record<string, React.ReactNode> = {

  React: <FaReact className="text-xl text-cyan-400" />,

  "Vue.js": (
    <FaVuejs className="text-xl text-green-500" />
  ),

  Svelte: (
    <SiSvelte className="text-xl text-orange-500" />
  ),

  "Next.js": (
    <SiNextdotjs className="text-xl text-black" />
  ),

  "Node.js": (
    <FaNodeJs className="text-xl text-green-600" />
  ),

  "Express.js": (
    <SiExpress className="text-xl text-gray-700" />
  ),

  PostgreSQL: (
    <SiPostgresql className="text-xl text-blue-500" />
  ),

  MongoDB: (
    <SiMongodb className="text-xl text-green-500" />
  ),

  Redis: (
    <SiRedis className="text-xl text-red-500" />
  ),

  JavaScript: (
    <FaJs className="text-xl text-yellow-400" />
  ),

  TypeScript: (
    <SiTypescript className="text-xl text-blue-600" />
  ),

  "Tailwind CSS": (
    <SiTailwindcss className="text-xl text-cyan-400" />
  ),

  Docker: (
    <FaDocker className="text-xl text-blue-500" />
  ),
};


// ================= COMPONENT =================

const SelectedSkills = ({
  selectedSkills,
  handleRemove,
  handleRemoveAll,
}: Props) => {

  return (

    <div className="
      rounded-xl
      border
      border-slate-200
      bg-white
      shadow-sm
    ">

      <div className="p-4">


        {/* HEADER */}

        <div className="
          flex
          items-center
          justify-between
        ">

          <div>

            <h2 className="
              text-sm
              font-bold
              text-slate-900
            ">
              Your Stack
            </h2>


            <p className="
              mt-1
              text-[9px]
              text-slate-400
            ">

              {selectedSkills.length}{" "}

              {selectedSkills.length === 1
                ? "technology"
                : "technologies"}{" "}

              selected

            </p>

          </div>


          {/* COUNT */}

          <span className="
            rounded-full
            bg-pink-50
            px-2
            py-1
            text-[9px]
            font-medium
            text-pink-500
          ">
            {selectedSkills.length}/5
          </span>

        </div>


        {/* ================= STACK ================= */}

        <div className="mt-6 space-y-2">

          {selectedSkills.length === 0 ? (

            <div className="
              rounded-lg
              border
              border-dashed
              border-slate-200
              p-5
              text-center
            ">

              <p className="
                text-xs
                font-medium
                text-slate-500
              ">
                Your stack is empty
              </p>


              <p className="
                mt-1
                text-[9px]
                leading-4
                text-slate-400
              ">
                Add technologies from the left to build your stack.
              </p>

            </div>

          ) : (

            selectedSkills.map((skill) => (

              <div
                key={skill.name}
                className="
                  flex
                  items-center
                  justify-between
                  rounded-lg
                  border
                  border-slate-200
                  p-3
                "
              >

                {/* LEFT */}

                <div className="flex items-center gap-3">

                  <div className="
                    flex
                    h-8
                    w-8
                    items-center
                    justify-center
                    rounded-md
                    bg-slate-50
                  ">
                    {iconMap[skill.name]}
                  </div>


                  <div>

                    <h3 className="
                      text-xs
                      font-semibold
                      text-slate-800
                    ">
                      {skill.name}
                    </h3>


                    <p className="
                      text-[9px]
                      text-slate-400
                    ">
                      {skill.category}
                    </p>

                  </div>

                </div>


                {/* REMOVE */}

                <button
                  onClick={() =>
                    handleRemove(skill.name)
                  }
                  className="
                    text-lg
                    text-slate-400
                    hover:text-red-500
                  "
                >
                  ×
                </button>

              </div>

            ))

          )}

        </div>


        {/* ================= REMOVE ALL ================= */}

        <button
          onClick={handleRemoveAll}
          disabled={selectedSkills.length === 0}
          className="
            mt-4
            h-8
            w-full
            rounded-md
            border
            border-pink-200
            bg-white
            text-[10px]
            font-medium
            text-pink-500
            hover:bg-pink-50
            disabled:cursor-not-allowed
            disabled:opacity-40
          "
        >
          Remove All
        </button>

      </div>

    </div>
  );
};

export default SelectedSkills;