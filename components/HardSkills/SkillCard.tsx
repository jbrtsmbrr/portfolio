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
      className={`shadow-md w-full flex p-3 place-items-center gap-4 rounded-xl h-full bg-white ${learning ? "opacity-50" : ""
        }`}
    >
      <span style={{ background }} className="p-1 rounded-lg min-h-full flex">
        <Image src={imageUrl} alt={label} width={30} height={30} />
      </span>
      <span className="text-sm font-medium text-gray-600">{label}</span>
    </div>
  );
};

export default SkillCard