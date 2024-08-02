export default class ProjectManager {
    constructor() {
        this.projects = [
            { 
                title: 'Project 1', 
                todos: [
                    {
                        title: 'Todo 1',
                        description: "Description 1",
                        dueDate: '2024-07-31', 
                        priority: "High"
                    },
                    {
                        title: 'Todo 2',
                        description: "Description 2",
                        dueDate: '2024-07-31', 
                        priority: "Medium"
                    },    
                    {
                        title: 'Todo 3',
                        description: "Description 3",
                        dueDate: '2024-07-31', 
                        priority: "Low"
                    }    
                ]
            }, 
            { 
                title: 'Project 2', 
                todos: [
                    {
                        title: 'Todo 4',
                        description: "Description 4",
                        dueDate: '2024-07-31', 
                        priority: "High"
                    },
                    {
                        title: 'Todo 5',
                        description: "Description 5",
                        dueDate: '2024-07-31', 
                        priority: "Medium"
                    },    
                    {
                        title: 'Todo 6',
                        description: "Description 6",
                        dueDate: '2024-07-31', 
                        priority: "Low"
                    }    
                ] 
            }, 
            { 
                title: 'Project 3', 
                todos: []
            }, 
        ]  
    }

    getProjects() {
        return this.projects
    }

    getTodosByTitle(title) {
        const project = this.projects.find(p => p.title === title)
        return project ? project.todos : []
    }

    getTodoItem(title) {
        for (const project of this.projects) {
            const todo = project.todos.find(todo => todo.title === title)
            if (todo) return todo
        }
    }

    getAllTodos() {
        return this.projects.reduce((allTodos, project) => {
            return allTodos.concat(project.todos)
        }, [])
    }
}