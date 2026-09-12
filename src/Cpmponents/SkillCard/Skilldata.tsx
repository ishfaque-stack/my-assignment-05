import { use, useState } from "react";
import type { ISkill } from "../../types/skilltype";
import Allskills from "../Allskills";

interface IskillsProps {
  skillPromise: Promise<ISkill[]>;
}

const Skilldata = ({ skillPromise }: IskillsProps) => {
  const skills = use(skillPromise);

  // Selected skills
  const [selectedSkills, setSelectedSkills] = useState<ISkill[]>([]);

  return (
    <div>

      {/* Explore Technologies Heading */}

      <div className="max-w-7xl mx-auto px-4">
        <div className="text-left">

          <h2 className="text-3xl font-bold text-slate-900">
            Explore the{" "}
            <span className="text-pink-500">
              Technologies
            </span>
          </h2>

          <p className="mt-1 text-sm text-slate-400">
            Pick one technology per category to build your ideal stack.
          </p>

        </div>
      </div>


      {/* All Skills */}

      <Allskills
        skills={skills}
        selectedSkills={selectedSkills}
        setSelectedSkills={setSelectedSkills}
      />

    </div>
  );
};

export default Skilldata;