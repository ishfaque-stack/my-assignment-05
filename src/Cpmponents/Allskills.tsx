import React from "react";
import type { ISkill } from "../types/skilltype";
import SkillCard from "./SkillCard/SkillCard";
import SelectedSkills from "./SkillCard/SelectedSkills";
import { toast } from "react-toastify";

interface Props {
  skills: ISkill[];

  selectedSkills: ISkill[];

  setSelectedSkills: React.Dispatch<
    React.SetStateAction<ISkill[]>
  >;
}

const Allskills = ({
  skills,
  selectedSkills,
  setSelectedSkills,
}: Props) => {


  // ================= ADD =================

  const handleAdd = (skill: ISkill) => {

  if (selectedSkills.length >= 5) {
    toast.error("Maximum 5 technologies allowed!");
    return;
  }

  setSelectedSkills((previous) => [
    ...previous,
    skill,
  ]);

  toast.success(`${skill.name} added to your stack!`);
};


  // ================= REMOVE =================

 const handleRemove = (skillName: string) => {

  setSelectedSkills((previous) =>
    previous.filter(
      (skill) => skill.name !== skillName
    )
  );

  toast.info(`${skillName} removed!`);
};


  // ================= REMOVE ALL =================

  const handleRemoveAll = () => {
    setSelectedSkills([]);
  };


  return (
    <div className="max-w-7xl mx-auto px-4 py-10">

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">


        {/* ================= LEFT SIDE ================= */}

        <div className="lg:col-span-3">

          {/* Beginner Friendly */}

          <div className="mb-4">

            <h2 className="text-sm font-semibold text-slate-800">
              Beginner Friendly
            </h2>

            <p className="text-[10px] text-slate-400 mt-1">
              Great choices to start your development journey.
            </p>

          </div>


          {/* ================= CARDS ================= */}

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">

            {skills.map((skill) => (

              <SkillCard
                key={skill.name}
                skill={skill}
                selectedSkills={selectedSkills}
                handleAdd={handleAdd}
              />

            ))}

          </div>

        </div>


        {/* ================= RIGHT SIDE ================= */}

        <div className="pt-[52px]">

          <SelectedSkills
            selectedSkills={selectedSkills}
            handleRemove={handleRemove}
            handleRemoveAll={handleRemoveAll}
          />

        </div>

      </div>

    </div>
  );
};

export default Allskills;