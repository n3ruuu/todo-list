import Storage from "./storage.js"

export default class ProjectManager {
	constructor() {
		this.projects = Storage.loadProjects()
		if (this.projects.length === 0) {
			// If no projects are loaded, initialize with default projects
			this.projects = [
				{
					title: "Project 1",
					todos: [
						{
							title: "Todo 1",
							description: "Description 1",
							dueDate: "2024-08-08",
							priority: "High",
							completed: false,
						},
						{
							title: "Todo 2",
							description: "Description 2",
							dueDate: "2024-08-14",
							priority: "Medium",
							completed: false,
						},
					],
				},
				{
					title: "Project 2",
					todos: [
						{
							title: "Todo 3",
							description: "Description 3",
							dueDate: "2024-08-10",
							priority: "Low",
							completed: false,
						},
						{
							title: "Todo 4",
							description: "Description 4",
							dueDate: "2024-08-12",
							priority: "High",
							completed: false,
						},
					],
				},
				{
					title: "Project 3",
					todos: [
						{
							title: "Todo 5",
							description: "Description 5",
							dueDate: "2024-08-13",
							priority: "Medium",
							completed: false,
						},
						{
							title: "Todo 6",
							description: "Description 6",
							dueDate: "2024-08-14",
							priority: "Low",
							completed: false,
						},
					],
				},
			]
			this.saveProjects()
		}
	}

	getProjects = () => this.projects

	findProject = (todoTitle) => {
		return this.projects.find((project) => {
			return project.todos.some((todo) => todo.title === todoTitle)
		})
	}

	getTodosByTitle = (title) => {
		const project = this.projects.find((p) => p.title === title)
		return project ? project.todos : []
	}

	getTodoItem = (title) => {
		for (const project of this.projects) {
			const todo = project.todos.find((todo) => todo.title === title)
			if (todo) return todo
		}
	}

	getAllTodos = () => {
		return this.projects.reduce((allTodos, project) => {
			return allTodos.concat(project.todos)
		}, [])
	}

	saveProjects = () => {
		Storage.saveProjects(this.projects)
	}
}
