declare module Resume {
  type Interest = {
    name: string
    keywords: string[]
  }

  type Language = {
    language: string
    fluency: string
  }

  interface Skill {
    name: string
    level?: string
    keywords: string[]
  }

  type Education = {
    institution: string
    area: string
    studyType: string
    startDate: string
    endDate: string
    gpa: string
    courses: string[]
  }

  type Work = {
    company: string
    website: string
    location?: string
    time: string
    startDate: string
    endDate: string
    description: string
    highlights: string[]
    position: string
  }

  enum ProjectType {
    business,
    openSource,
  }

  type Project = {
    type: ProjectType
    title: string
    hide?: boolean
    time?: string
    startDate: string
    endDate: string
    description: string
    highlights: string[]
    url: string
  }

  type Basics = {
    name: string
    label: string
    objective?: string
    url?: string
    experience: string
    email: string
    picture: string
    phone: string
    website: string
    summary: string
    location: Location
    social: Social[]
  }

  type Social = {
    network: string
    username: string
    url: string
  }

  // type Location = {
  //   city: string
  //   countryCode: string
  //   region?: string
  // }
  type Location = string

  interface IResume {
    basics: Basics
    work: Work[]
    projects: Project[]
    education: Education[]
    skills: Skill[]
    languages: Language[]
    interests: Interest[]
  }

  type CommonProps = {
    resumeData: IResume
  }
}

export as namespace Resume
