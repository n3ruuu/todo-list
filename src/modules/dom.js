import Project from './project.js'
import Todo from './todo.js'

export default class DOM {
    constructor(projectManager) {
        this.projectManager = projectManager
        this.selectedProject = ''
        this.selectedPriority = ''
        // cache dom
        this.sidebar = document.querySelector('.sidebar')
        this.addProjectBtn = document.querySelector('.add-project.btn')
        this.projectList = document.querySelector('ul')
        this.addTodoBtn = document.querySelector('.add-todo.btn')
        this.addTaskBtn = document.querySelector('.add-task.btn')
        this.modal = document.querySelector('.modal')
        this.exitBtn = document.querySelector('.exit')
        this.priorityBtn = document.querySelector('.priority')
        this.sidebarItems = document.querySelectorAll('.items .item')
        this.todosContainer = document.querySelector('.todos-container')

        // bind events
        this.todosContainer.addEventListener('click', (e) => {
            if (e.target.closest('.edit-btn img')) {
                this.editTodo(e)
            }
        })
        this.sidebarItems.forEach(item => item.addEventListener('click', this.navigateItem.bind(this)))
        this.priorityBtn.addEventListener('click', this.setPriority.bind(this))
        this.projectList.addEventListener('click', this.handleProjectClick.bind(this));
        this.addProjectBtn.addEventListener('click', this.showInputField.bind(this))
        // this.addTodoBtn.addEventListener('click', this.showModal.bind(this))
        this.addTaskBtn.addEventListener('click', this.addTask.bind(this))
        this.exitBtn.addEventListener('click', this.hideModal.bind(this))
    }

    editTodo(e) {
        const todoTitle = e.target.closest('.todo-header').textContent.trim()
        const todoItem = this.projectManager.getTodoItem(todoTitle)
        console.log(todoItem)
        const project = this.projectManager.getProjects().find(project => 
            project.todos.some(todo => todo.title === todoTitle)
        )

        this.selectedProject = project
        this.editTask(todoItem)
    }

    editTask(todoItem) {
        // Get form fields
        const todoTitleField = document.querySelector('#title')
        const todoDescriptionField = document.querySelector('#description')
        const todoDuedateField = document.querySelector('#duedate')
    
        todoTitleField.value = todoItem.title
        todoDescriptionField.value = todoItem.description
        todoDuedateField.value = todoItem.dueDate

        this.addTaskBtn.addEventListener('click', () => {
            this.saveEditedTask(todoItem)
        })

        this.showModal();

    }

    saveEditedTask(todoItem) {
        // Get form fields
        const todoTitleField = document.querySelector('#title');
        const todoDescriptionField = document.querySelector('#description');
        const todoDuedateField = document.querySelector('#duedate');
        
        // Update the todo item
        todoItem.title = todoTitleField.value.trim();
        todoItem.description = todoDescriptionField.value.trim();
        todoItem.dueDate = todoDuedateField.value.trim();
        
        // Find the project that contains the todo item
        const project = this.projectManager.getProjects().find(project => 
            project.todos.some(todo => todo.title === todoItem.title)
        );
        
        // Ensure the project and todo item are found
        if (project) {
            // Update the todo item in the project
            const index = project.todos.findIndex(todo => todo.title === todoItem.title);
            if (index !== -1) {
                project.todos[index] = todoItem;
            }
        }
    
        // Re-render the todos to reflect changes
        this.renderTodos(this.selectedProject);
        
        // Hide the modal
        this.hideModal();
    }
    
    
    
    showModal() {
        this.modal.style.display = 'block'
        console.log(this.selectedProject)
    }

    hideModal() {
        this.modal.style.display = 'none'
    }

    setPriority(e) {
        if (e.target.tagName === "BUTTON") {
            const priorityValue = e.target.textContent
            this.selectedPriority = priorityValue

            const priorityBtns = document.querySelectorAll('.priority button')
            priorityBtns.forEach(button => {
                button.classList.remove('active')
            })
            e.target.classList.add('active')      
            console.log(this.selectedProject)

        }
    }

    handleProjectClick(e) {
        if (e.target.tagName === 'LI') {
            const projectName = e.target.textContent
            this.selectedProject = projectName
            this.renderTodos(projectName)
        }
    }

    renderTodos(projectName) {
        const header = document.querySelector('.content h1')

        const todosContainer = document.querySelector('.todos-container')
        todosContainer.innerHTML = ''

        let todos
        if (projectName) {
            todos = this.projectManager.getTodosByTitle(projectName)
            header.textContent = projectName
        }
        else todos = this.projectManager.getAllTodos()

        todos.forEach(todo => this.createTodoContainer(todo))
    }

    createTodoContainer(todo) {
        const todosContainer = document.querySelector('.todos-container')
        const itemContainer = document.createElement('div')
        itemContainer.className = 'item-container'
        itemContainer.innerHTML = ` <span class="circle"></span>
                                    <div class="text-container">
                                        <header class="todo-header">
                                            <div class="title">${todo.title}</div>
                                            <div class="actions-container">
                                                <div class="edit-btn">
                                                    <img class="svg" src="./assets/edit.svg" alt="edit svg">
                                                </div>
                                                <div class="delete-btn">
                                                    <img class="svg" src="./assets/delete.svg" alt="delete svg">
                                                </div>
                                            </div>
                                        </header>
                                        <div class="description">${todo.description}</div>
                                        <div class="duedate">${todo.dueDate}</div>
                                    </div>`
        todosContainer.appendChild(itemContainer)
    }

    addTask(e) {
        e.preventDefault()
        const todoTitle = document.querySelector('#title').value
        const todoDescription = document.querySelector('#description').value
        const todoDuedate = document.querySelector('#duedate').value
        const priority = this.getPriority()

        if (!todoTitle || !todoDescription || !todoDuedate) {
            alert('Please fill in all fields.')
            return
        }

        if (!this.selectedProject) {
            alert('No project selected.')
            return
        }

        const newTodo = new Todo(todoTitle, todoDescription, todoDuedate, priority)
        const todos = this.projectManager.getTodosByTitle(this.selectedProject)
        todos.push(newTodo)
        this.renderTodos(this.selectedProject.title)
    }

    getPriority() {
        return this.selectedPriority
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
    }

    navigateItem(e) {
        const item = e.target.textContent
        
        if (item === 'Home') this.loadHome()
        else if (item === 'Today') this.loadToday()
        else if (item === 'Week') this.loadWeek()
        else return
    }

    loadHome() {
        const header = document.querySelector('h1')
        header.textContent = 'Home'

        this.renderTodos()
    }

}
