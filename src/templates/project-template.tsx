import React from 'react'
import {Project} from 'lib/projects'
import Layout from 'components/layout'
import Image from 'next/image'
import {motion} from 'framer-motion'

const ProjectTemplate: React.FC<{project: Project}> = ({project}) => {
  return (
    <Layout className="px-0 bg-black">
      {/* <h1>{project.title}</h1>
      <p>{project.slug}</p> */}
      <div className="flex flex-col overflow-hidden">
        {project?.resources?.map((resource) => {
          return (
            <div className="p-10 flex items-center justify-center ">
              <motion.div className="aspect-[9/16] relative w-screen h-auto border rounded-lg ">
                <Image
                  fill
                  src={resource.url}
                  className="object-contain"
                  alt=""
                  aria-hidden="true"
                />
              </motion.div>
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

export default ProjectTemplate
