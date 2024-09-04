import ProjectsJson from '../../public/projects/projects.json'
import z from 'zod'

const ProjectSchema = z.object({
  title: z.string(),
  url: z.string(),
  slug: z.string(),
  image: z.string(),
  cursor: z.string(),
  thumbnail: z.string().optional().nullable(),
  description: z.string().optional().nullable(),
  links: z.array(z.object({label: z.string(), url: z.string()})).optional(),
  resources: z.array(z.any()).optional(),
})

const ProjectsSchema = z.array(ProjectSchema)
export type Project = z.infer<typeof ProjectSchema>

export type Projects = {
  projects: Project[]
}

export const getProjects = () => {
  return ProjectsSchema.parse(ProjectsJson)
}

export const getProject = (slug: string) => {
  const projects = ProjectsSchema.parse(ProjectsJson)
  const project = projects.find((project) => project.slug === slug)
  if (!project) {
    throw new Error(`Project with slug "${slug}" not found`)
  }
  return ProjectSchema.parse(project)
}
