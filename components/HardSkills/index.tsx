import React from 'react'
import Image from "next/image"

type SkillCardProp = {
  imageUrl: string
  label: string
  learning: Boolean,
  background: string
}

const SkillCard = ({ imageUrl, label, learning, background }: SkillCardProp) => {

  return <div className={`shadow-md w-full flex p-3 place-items-center gap-4 rounded-xl h-full bg-white ${learning ? "opacity-50" : ""}`}>
    <span style={{ background }} className="p-1 rounded-lg min-h-full flex" ><Image src={imageUrl} alt={label} width={30} height={30} /></span>
    <span className="text-sm font-medium text-gray-600">{label}</span>
  </div>

}

const skills = [
  { imageUrl: "/assets/icons/icons8-html-5.svg", label: "HTML", learning: false, background: "rgba(255, 98, 0, 0.055)" },
  { imageUrl: "/assets/icons/icons8-css3.svg", label: "CSS", learning: false, background: "rgba(0, 157, 230, 0.055)" },
  { imageUrl: "/assets/icons/icons8-javascript.svg", label: "JavaScript", learning: false, background: "rgba(254, 221, 35, 0.15)" },
  { imageUrl: "/assets/icons/icons8-react-native.svg", label: "React", learning: false, background: "rgba(77, 223, 236, 0.055)" },
  { imageUrl: "/assets/icons/icons8-graphql.svg", label: "GraphQL", learning: false, background: "rgba(255, 35, 119, 0.055)" },
  { imageUrl: "/assets/icons/icons8-apollo.svg", label: "Apollo Client", learning: false, background: "rgba(85, 44, 167, 0.055)" },
  { imageUrl: "/assets/icons/icons8-material-ui.svg", label: "Material UI", learning: false, background: "rgba(0, 157, 230, 0.055)" },
  { imageUrl: "/assets/icons/icons8-tailwind-css.svg", label: "Tailwind", learning: true, background: "rgba(0, 157, 230, 0.055)" },
  { imageUrl: "/assets/icons/icons8-typescript.svg", label: "TypeScript", learning: true, background: "rgba(0, 157, 230, 0.055)" },
  { imageUrl: "/assets/icons/nextjs-2.svg", label: "Next JS", learning: true, background: "rgba(0, 0, 0, 0.055)" }
]

const HardSkills = () => {
  return (
    <section>
      <div className="flex place-items-center jutify-between mb-8 md:gap-8">
        <div className="flex-1">
          <h1 className="font-bold">Hard Skills</h1>
          <p className="mt-3 text-gray-500">These are the skills I have at the moment. you will notice some of them have lower opacity than others, that is because I'm still exploring those tools.</p>
        </div>
        <div className="max-[600px]:hidden">
          <Image alt="learning" src="/assets/illustrations/3d-casual-life-text-program-on-computer-screen.png" width={250} height={250} />
        </div>
      </div>
      <div className="relative grid grid-cols-2 gap-2 mx-auto max-w-lg md:grid-cols-3 md:max-w-3xl lg:grid-cols-4 lg:max-w-6xl place-items-center">
        {skills.map(skill => <SkillCard {...skill} />)}
      </div>
    </section>
  )
}

export default HardSkills