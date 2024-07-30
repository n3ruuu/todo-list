import Project from './project.js'

export default class DOM {
    constructor(projectManager) {
        this.projectManager = projectManager
    constructor(projectManager) {
        this.projectManager = projectManager
        // cache dom
        this.sidebar = document.querySelector('.sidebar')
        this.addProjectBtn = document.querySelector('.add-project.btn')
        this.projectList = document.querySelector('ul')
        this.addTodoBtn = document.querySelector('.add-todo.btn')
        this.modal = document.querySelector('.modal')
        this.exitBtn = document.querySelector('.exit')
     
        // bind events
        this.addProjectBtn.addEventListener('click', this.showInputField.bind(this))
        this.addTodoBtn.addEventListener('click', this.showModal.bind(this))
        this.exitBtn.addEventListener('click', this.hideModal.bind(this))
    }

    showModal() {
        this.modal.style.display = 'block'
    }

    hideModal() {
        this.modal.style.display = 'none'
    }

    renderProjects() {
        const projects = this.projectManager.getProjects()
        projects.forEach(project => {
            const li = document.createElement('li')
            li.textContent = project.title
            this.projectList.append(li)
        })
    }

    showInputField() {
        if (!this.projectInput) {
            this.projectInput = this.createInputField()
            this.projectList.appendChild(this.projectInput)
            this.projectInput.focus()
        } 
    }

    createInputField() {
        const input = document.createElement('input')
        input.className = 'project-input'
        input.type = 'text'
        input.addEventListener('keydown', this.handleInputKeyDown.bind(this))
        return input
    }

    handleInputKeyDown(e) {
        const projectName = e.target.value.trim();
        if (e.key === `Enter` && projectName !== '') {
            if (this.isValid(projectName)) {
                this.appendProject(projectName)
            }
            e.target.value = ''
            this.hideInputField()
        }
    }

    isValid(name) {
        if (name === '') return false
        if (this.checkIfExists(name)) {
            alert('Duplicate')
            return false
        }
        return true
    }

    appendProject(projectName) { 
        const newProject = new Project(projectName)
        this.projectManager.projects.push(newProject)
        this.createListElement(projectName)        
    }
        this.projectManager.projects.push(newProject)
        this.createListElement(projectName)        
    }

    createListElement(projectName) {
    createListElement(projectName) {
        const li = document.createElement('li')
        li.textContent = projectName
        this.projectList.appendChild(li)
        this.hideInputField()
    }

    hideInputField() {
        if (this.projectInput) {
            this.projectInput.remove();
            this.projectInput = null
        } 
    }

    checkIfExists(projectName) {
        return this.projectManager.projects.some(project => project.title === projectName)
        return this.projectManager.projects.some(project => project.title === projectName)
    }

    // Todo 

    renderTodos() {

    }
}
