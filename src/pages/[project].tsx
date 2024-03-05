import {type Project, getProjects} from 'lib/projects'
import {GetStaticPaths, GetStaticProps} from 'next'
import React from 'react'
import ProjectTemplate from 'templates/project-template'

export const getStaticPaths: GetStaticPaths = async () => {
  const projects = getProjects()
  const paths = projects.map((project) => ({
    params: {project: project.slug},
  }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({params}) => {
  const projects = getProjects()
  const project = projects.find((project) => project.slug === params?.project)

  return {
    props: {
      project,
    },
  }
}

const ProjectPage: React.FC<{project: Project}> = ({project}) => {
  return <ProjectTemplate project={project} />
}

export default ProjectPage
