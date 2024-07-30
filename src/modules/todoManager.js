import ProjectManager from "./projectManager";

export default class TodoManager {
    constructor() {
        this.projectManager = new ProjectManager()
        this.projects = this.projectManager.getProjects()
    }

    getTodos() {
        this.projects.forEach(project => {
            const todos = project.todos
            return todos
        })
    }

}