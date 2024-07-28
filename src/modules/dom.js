import Project from './project.js'

export default class DOM {
    constructor() {
        this.projects = []

        // cache dom
        this.sidebar = document.querySelector('.sidebar')
        this.addProjectBtn = document.querySelector('.add-project.btn')
        this.projectList = document.querySelector('ul')

        // bind events
        this.addProjectBtn.addEventListener('click', this.showInputField.bind(this))
    }

    showInputField() {
        if (this.projectInput) return
        this.projectInput = document.createElement('input')
        this.projectInput.className = 'project-input'
        this.projectInput.type = 'text'

        this.projectInput.addEventListener('keydown', (e) => {
            if (e.key === `Enter`) {
                this.projectName = this.projectInput.value
                if (this.projectName === '') {
                    alert('Enter your project name')
                    return 
                } 

                if (this.checkName(this.projectName)) {
                    alert(`${this.projectName} already exists`)
                    this.projectInput.value = ''
                    return
                }

                const newProject = new Project(this.projectName)
                this.projects.push(newProject)
                alert(`${newProject.title} is added succcessfully!`)

                const li = document.createElement('li')
                li.textContent = this.projectName

                this.projectList.appendChild(li)
                this.projectInput.remove()
                this.projectInput = null

            }
        })
        this.projectList.appendChild(this.projectInput)
    }

    checkName(projectName) {
        return this.projects.some(project => project.title === projectName)
    }

}

