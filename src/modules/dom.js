import Project from './project.js'

export default class DOM {
    constructor(projectManager) {
        this.projectManager = projectManager
        // cache dom
        this.sidebar = document.querySelector('.sidebar')
        this.addProjectBtn = document.querySelector('.add-project.btn')
        this.projectList = document.querySelector('ul')
        // bind events
        this.addProjectBtn.addEventListener('click', this.showInputField.bind(this))
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
        }
    }

    createInputField() {
        const input = document.createElement('input')
        input.className = 'project-input'
        input.type = 'text'
        input.focus()
        input.addEventListener('keydown', this.handleInputKeyDown.bind(this))
        input.addEventListener('blur', this.hideInputField.bind(this))
        return input
    }

    handleInputKeyDown(e) {
        if (e.key === `Enter`) {
            const projectName = e.target.value.trim();
            if (this.isValid(projectName)) {
                this.appendProject(projectName)
            }
            e.target.value = ''
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

    createListElement(projectName) {
        const li = document.createElement('li')
        li.textContent = projectName
        this.projectList.appendChild(li)
        this.hideInputField()
    }

    hideInputField() {
        if (this.projectInput && this.projectInput.value === '') {
            this.projectInput.style.display = 'none';
            this.projectInput = null
        }
    }

    checkIfExists(projectName) {
        return this.projectManager.projects.some(project => project.title === projectName)
    }
}

