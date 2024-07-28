import Project from './project.js'

export default class ProjectManager {
    constructor() {
        this.projects = [
            { title: 'Project 1', todos: [] }, 
            { title: 'Project 2', todos: [] },
            { title: 'Project 3', todos: [] }
        ]  
    }

    getProjects() {
        return this.projects
    }
}