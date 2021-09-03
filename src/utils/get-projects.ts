import ProjectsJson from '../../public/projects/projects.json'
import memoize from 'memoizee'

export interface Project {
  title: string
  url: string
  image: string
}

export interface Projects {
  projects: Project[]
}

export const getProjects = memoize(() => {
  return ProjectsJson
})
