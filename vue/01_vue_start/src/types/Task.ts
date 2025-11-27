import type InterfaceTask from "@/types/InterfaceTask.ts";

class Task implements InterfaceTask {
    title: string;
    active: boolean;
    start_date:string;
    end_date:string;

    constructor(title: string, active: boolean, start_date: string, end_date:string) {
        this.title = title;
        this.active = active;
        this.start_date = start_date;
        this.end_date = end_date;
    }
}
