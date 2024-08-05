import Project from './project.js'
import Todo from './todo.js'

export default class DOM {
    constructor(projectManager) {
        this.projectManager = projectManager
        this.selectedProject = ''
        this.selectedPriority = ''
        this.currentTab = 'Home'
        this.cacheDomElements()
        this.bindEvents()
    }

    editTodo(e) {
        const todoTitle = e.target.closest('.todo-header').textContent.trim()
        const todoItem = this.projectManager.getTodoItem(todoTitle)
        this.selectedProject = this.projectManager.findProject(todoTitle)
        console.log(todoItem, this.selectedProject)
        this.showEditModal(todoItem)
    }

    showEditModal(todoItem) {
        const todoTitleField = document.querySelector('#title')
        const todoDescriptionField = document.querySelector('#description')
        const todoDuedateField = document.querySelector('#duedate')

        todoTitleField.value = todoItem.title
        todoDescriptionField.value = todoItem.description
        todoDuedateField.value = todoItem.dueDate
        this.getPrioritySelect(todoItem.priority)
        this.toggleTaskButton(this.addTaskBtn, true)
        console.log(this.addTaskBtn)
        this.showModal()
    }

    toggleTaskButton(button, isEditing) {
        button.removeEventListener('click', this.addTask)
        button.removeEventListener('click', this.saveEditedTask)
    
        if (isEditing) {
            button.textContent = 'Edit Task'
            button.addEventListener('click', this.saveEditedTask.bind(this))
        } else {
            button.textContent = 'Add Task'
            button.addEventListener('click', this.addTask.bind(this))
            this.clearInputFields()
        }
    }
    

    saveEditedTask(todoItem) {
        const todoTitleField = document.querySelector('#title')
        const todoDescriptionField = document.querySelector('#description')
        const todoDuedateField = document.querySelector('#duedate')
        
        todoItem.title = todoTitleField.value.trim()
        todoItem.description = todoDescriptionField.value.trim()
        todoItem.dueDate = todoDuedateField.value.trim()
        todoItem.priority = this.selectedPriority.charAt(0).toUpperCase() + this.selectedPriority.slice(1).toLowerCase()

        console.log(todoItem, this.selectedProject)



        this.closeModal()
        this.getCurrentTab()
    } 

    getPrioritySelect(priorityValue) {
        const priorityBtns = document.querySelectorAll('.priority button')
        priorityBtns.forEach(button => {
            button.classList.remove('active')
        })
    
        if (priorityValue) {
            priorityBtns.forEach(button => {
                if (button.textContent.trim() === priorityValue.toString().toUpperCase()) {
                    button.classList.add('active')
                }
            })
        }
    } //

    setPriority(e) {
        if (e.target.tagName === "BUTTON") {
            const priorityValue = e.target.textContent
            this.selectedPriority = priorityValue.charAt(0).toUpperCase() + priorityValue.slice(1).toLowerCase()

            const priorityBtns = document.querySelectorAll('.priority button')
            priorityBtns.forEach(button => {
                button.classList.remove('active')
            })
            e.target.classList.add('active')      
        }
    }

    handleProjectClick(e) {
        if (e.target.tagName === 'LI') {
            const projectName = e.target.textContent
            this.selectedProject = projectName
            this.currentTab = projectName
            this.displayProjectTodos(projectName)
        }
    }

    displayProjectTodos(projectName) {
        const contentDiv = document.querySelector('.content')
        const header = document.querySelector('.content h1')
        const todosContainer = document.querySelector('.todos-container')

        this.clearTodos()
        
        if (projectName) {
            const todos = this.projectManager.getTodosByTitle(projectName)
            header.textContent = projectName
            
            if (!this.addTodoBtn) {
                this.addTodoBtn = this.createAddTodoButton()
                contentDiv.insertBefore(this.addTodoBtn, todosContainer)
            }
            todos.forEach(todo => this.createTodoContainer(todo))   
        }
    } //

    createAddTodoButton() {
        const button = document.createElement('button')
        button.className = 'add-todo btn'
        button.textContent = 'Add Todo'
        button.addEventListener('click', () => this.showModal())
        return button
    } //

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
        this.setPriorityColor(itemContainer, todo.priority)
    }

    setPriorityColor(container, value) {
        const circle = container.querySelector('.circle')
        if (circle) {
            switch (value) {
                case 'Low': circle.className = 'circle low-priority'
                    break
                case 'Medium': circle.className = 'circle medium-priority'
                    break
                case 'High': circle.className = 'circle high-priority'
                    break
                default: circle.className = 'circle'
                    break
            }
        }
    }

    addTask(e) {
        e.preventDefault()
        console.log('Adding Task')
        const todoTitle = document.querySelector('#title').value
        const todoDescription = document.querySelector('#description').value
        const todoDuedate = document.querySelector('#duedate').value
        const priority = this.selectedPriority
        console.log(priority)

        if (!todoTitle || !todoDescription || !todoDuedate) {
            alert('Please fill in all fields.')
            return
        }

        const newTodo = new Todo(todoTitle, todoDescription, todoDuedate, priority)
        const todos = this.projectManager.getTodosByTitle(this.selectedProject)
        todos.push(newTodo)
        this.closeModal()
        this.displayProjectTodos(this.selectedProject)
    }

    clearInputFields = () => {
        document.querySelector('#title').value = ''
        document.querySelector('#description').value = ''
        document.querySelector('#duedate').value = ''
        console.log('cleared')
    }

    displayProjects() {
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
    } //

    createInputField() {
        const input = document.createElement('input')
        input.className = 'project-input'
        input.type = 'text'
        input.addEventListener('keydown', this.handleInputKeyDown.bind(this))
        return input
    } //

    handleInputKeyDown(e) {
        const projectName = e.target.value.trim();
        if (e.key === `Enter` && projectName !== '') {
            if (this.isValid(projectName)) {
                this.appendProject(projectName)
            }
            e.target.value = ''
            this.hideInputField()
        }
    } //

    isValid(name) {
        if (name === '') return false
        if (this.checkIfExists(name)) {
            alert('Duplicate')
            return false
        }
        return true
    } //

    appendProject(projectName) { 
        const newProject = new Project(projectName)
        this.projectManager.projects.push(newProject)
        this.createListElement(projectName)        
    } //

    createListElement(projectName) {
        const li = document.createElement('li')
        li.textContent = projectName
        this.projectList.appendChild(li)
        this.hideInputField()
    } //

    hideInputField() {
        if (this.projectInput) {
            this.projectInput.remove();
            this.projectInput = null
        } 
    } //

    checkIfExists(projectName) {
        return this.projectManager.projects.some(project => project.title === projectName)
    } //

    navigateItem(e) {
        this.currentTab = e.target.textContent
        this.getCurrentTab()
    }

    getCurrentTab = () => {
        console.log(this.currentTab)
        switch (this.currentTab) {
            case 'Home': this.loadHome(); break
            case 'Today': this.loadToday(); break
            case 'Week': this.loadWeek(); break
            default: this.displayProjectTodos(this.currentTab); break
        }
    }

    loadHome() {
        const header = document.querySelector('h1')
        header.textContent = 'Home'
        this.displayAllTodos()
        this.removeButton()
    }

    loadToday() {
        const header = document.querySelector('h1')
        header.textContent = 'Today'

        this.clearTodos()

        const today = new Date().toISOString().split('T')[0]
        console.log(today)
        const projects = this.projectManager.getProjects() 
        for (const project of projects) {
            const todayTodos = project.todos.filter(todo => todo.dueDate === today)
            for (const todo of todayTodos) {
                this.createTodoContainer(todo)
            } 
        }
        this.removeButton()
    }

    loadWeek() {
        const header = document.querySelector('h1');
        header.textContent = 'This Week';
    
        this.removeButton()
        this.clearTodos();
    
        const { start, end } = this.getWeekDates(); // Get start and end of the week
    
        const projects = this.projectManager.getProjects();
        for (const project of projects) {
            const weekTodos = project.todos.filter(todo => todo.dueDate >= start && todo.dueDate <= end
            );
            for (const todo of weekTodos) {
                this.createTodoContainer(todo); // Display the filtered todos
            }
        }
    }

    getWeekDates() {
        const now = new Date()
        const dayOfWeek = now.getDay() // 0 (Sunday) to 6 (Saturday)
        const startOfWeek = new Date(now)
        startOfWeek.setDate(now.getDate() - dayOfWeek) // Move to the start of the week
    
        const endOfWeek = new Date(startOfWeek)
        endOfWeek.setDate(startOfWeek.getDate() + 6) // Move to the end of the week
    
        // Format dates as YYYY-MM-DD
        const start = startOfWeek.toISOString().split('T')[0]
        const end = endOfWeek.toISOString().split('T')[0]
    
        return { start, end }
    } // ??
    
    displayAllTodos = () => {
        this.clearTodos()
        const allTodos = this.projectManager.getAllTodos()
        for (const todo of allTodos) {
            this.createTodoContainer(todo)
        }
    }

    removeButton = () => {
        if (this.addTodoBtn) {
            this.addTodoBtn.remove()
            this.addTodoBtn = null
        }
    }

    clearTodos = () => {
        const todosContainer = document.querySelector('.todos-container')
        todosContainer.innerHTML = ''
    }

    showModal = () => this.modal.style.display = 'block' 
    closeModal = () => {
        this.modal.style.display = 'none'
        this.toggleTaskButton(this.addTaskBtn, false)
    }
    cacheDomElements = () => {
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
    }

    bindEvents = () => {
        this.todosContainer.addEventListener('click', (e) => {
            if (e.target.closest('.edit-btn img')) {
                this.editTodo(e)
            }
        })
        this.sidebarItems.forEach(item => item.addEventListener('click', this.navigateItem.bind(this)))
        this.priorityBtn.addEventListener('click', this.setPriority.bind(this))
        this.projectList.addEventListener('click', this.handleProjectClick.bind(this));
        this.addProjectBtn.addEventListener('click', this.showInputField.bind(this))
        this.addTaskBtn.addEventListener('click', () => this.toggleTaskButton(this.addTaskBtn, false))
        this.exitBtn.addEventListener('click', this.closeModal.bind(this))
    }
}