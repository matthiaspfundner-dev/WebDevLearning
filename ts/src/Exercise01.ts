interface Resource {
    id: number
    name: string
    available: boolean

    isAvailable(): boolean
}

interface Task {
    id: number
    title: string
    description: string
    startDate: string
    endDate: string
}

interface Timeline {
    startDate: string
    endDate: string
    milestones: string[]

    addMilestrone(milestone: string): void
}

interface Project {
    id: number
    name: string
    description: string
}

class ResourceClass implements Resource {
    id: number
    name: string
    available: boolean

    constructor (id: number, name: string, available: boolean) {
        this.id = id
        this.name = name
        this.available = available
    }

    isAvailable(): boolean {
        return this.available
    }
}

class TaskClass implements Task {
    id: number
    title: string
    description: string
    startDate: string
    endDate: string

    constructor (id: number, title: string, description: string, startDate: string, endDate: string) {
        this.id = id
        this.title = title
        this.description = description
        this.startDate = startDate
        this.endDate = endDate
    }
}

class TimelineClass implements Timeline {
    startDate: string
    endDate: string
    milestones: string[]

    constructor (startDate: string, endDate: string, milestones: string[]) {
        this.startDate = startDate
        this.endDate = endDate
        this.milestones = milestones
    }

    addMilestrone(milestone: string): void {
        this.milestones.push(milestone)
    }
}

class ProjectClass implements Project {
    id: number
    name: string
    description: string

    constructor (id: number, name: string, description: string) {
        this.id = id
        this.name = name
        this.description = description
    }
}
