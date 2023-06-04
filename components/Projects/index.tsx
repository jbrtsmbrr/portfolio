import Image from 'next/image'
import React from 'react'

const Projects = () => {
  return (
    <section>
      <div className="flex place-items-center jutify-between mb-8 gap-8">
        <div className="max-[600px]:hidden">
          <Image alt="learning" src="/assets/illustrations/3d-casual-life-solleagues-discussing-team-project.png" width={250} height={250} />
        </div>
        <div className="flex-1 text-right">
          <h1 className="font-bold">Project Collaborations</h1>
          <p className="mt-3 text-gray-500">These are the skills I have at the moment. you will notice some of them have lower opacity than others, that is because I'm still exploring those tools.</p>
        </div>
      </div>
    </section>
  )
}

export default Projects