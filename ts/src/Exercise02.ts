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

    assignResource(resource: Resource): void
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

    addTask(task: Task): void
    addResource(resource: Resource): void
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

    assignResource(resource: Resource): void {
        if (resource.isAvailable()) {
            console.log(`Resource ${resource.name} assigned to task ${this.title}`)
        } else {
            console.log(`Resource ${resource.name} is not available`)
        }
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

    addTask(task: Task): void {
        console.log(`Task ${task.title} added to project ${this.name}`)
    }

    addResource(resource: Resource): void {
        console.log(`Resource ${resource.name} added to project ${this.name}`)
    }
}
