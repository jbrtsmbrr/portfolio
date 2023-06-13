import Image from "next/image"
import { SkillCardProp } from "./types";

const SkillCard = ({
  imageUrl,
  label,
  learning,
  background,
}: SkillCardProp) => {
  return (
    <div
      className={`shadow-md w-full flex p-3 place-items-center gap-4 rounded-xl h-full bg-white dark:bg-slate-800
      transition duration-700 ${learning ? "border border-slate-400 border-dashed dark:border-slate-600" : ""
        }`}
    >
      <span style={{ background }} className="p-1 rounded-lg min-h-full flex">
        <Image src={imageUrl} alt={label} width={30} height={30} />
      </span>
      <span className="text-sm font-medium text-gray-600 dark:text-gray-100 transition duration-700">{label}</span>
    </div>
  );
};

export default SkillCard