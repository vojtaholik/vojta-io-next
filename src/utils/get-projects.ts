import ProjectsJson from '../../public/projects/projects.json'
import memoize from 'memoizee'

type Link = {
  label: string
  url: string
}

export interface Project {
  title: string
  url: string
  image: string
  cursor: string
  links?: Link[]
}

export interface Projects {
  projects: Project[]
}

export const getProjects = memoize(() => {
  return ProjectsJson
})
