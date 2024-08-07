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

    editTodo = (e) => {
        const todoTitle = e.target.closest('.todo-header').textContent.trim()
        const todoItem = this.projectManager.getTodoItem(todoTitle)
        this.selectedProject = this.projectManager.findProject(todoTitle)
        console.log(todoItem, this.selectedProject)
        this.showEditModal(todoItem)
    }

    showEditModal = (todoItem) => {
        const { todoTitleField, todoDescriptionField, todoDuedateField } = this.getInputFields()
        todoTitleField.value = todoItem.title
        todoDescriptionField.value = todoItem.description
        todoDuedateField.value = todoItem.dueDate
        this.getPrioritySelect(todoItem.priority)
        this.replaceAddToEdit(this.addTaskBtn, true, todoItem)
        this.showModal()
    }

    saveEditedTask = (e, todoItem) => {
        e.preventDefault()
        const { todoTitleField, todoDescriptionField, todoDuedateField } = this.getInputFields()
        const newPriority = this.selectedPriority 
            ? this.selectedPriority.charAt(0).toUpperCase() + this.selectedPriority.slice(1).toLowerCase()
            :todoItem.priority

        const index = this.selectedProject.todos.findIndex(todo => todo === todoItem)
        if (index !== -1) {
            console.log('Saving edited task for ', todoItem)

            this.selectedProject.todos[index] = {
                title: todoTitleField.value.trim(),
                description: todoDescriptionField.value.trim(),
                dueDate: todoDuedateField.value.trim(),
                priority: newPriority
            }

            this.updateTodoPriorityColor(this.selectedProject.todos[index])
        }

        this.closeModal()
        this.getCurrentTab()
    } 

    deleteTodo = (e) => {
        const todoTitle = e.target.closest('.todo-header').textContent.trim()
        this.selectedProject = this.projectManager.findProject(todoTitle)
        const todoIndex = this.selectedProject.todos.findIndex(todo => todo.title === todoTitle)
        if (todoIndex !== -1) {
            this.selectedProject.todos.splice(todoIndex, 1)
            this.getCurrentTab()
        }
    }

    getInputFields = () => {
        return {
            todoTitleField: document.querySelector('#title'),
            todoDescriptionField: document.querySelector('#description'),
            todoDuedateField: document.querySelector('#duedate')
        }
    }

    replaceAddToEdit = (button, isEditing, todoItem) => {
        button.removeEventListener('click', (e) => this.addTask(e))
        button.removeEventListener('click', (e) => this.saveEditedTask(e, todoItem))

        if (isEditing) {
            console.log('Editing Task')
            button.textContent = 'Edit Task'
            button.addEventListener('click', (e) => this.saveEditedTask(e, todoItem))
        } else {
            console.log('Adding task')
            button.textContent = 'Add Task'
            button.addEventListener('click', (e) => this.addTask(e))
        }
    }
    
    updateTodoPriorityColor = (updatedTodoItem) => {
        const todoContainers = document.querySelectorAll('.item-container')
        todoContainers.forEach(container => {
            const titleElement = container.querySelector('.title')
            if (titleElement && titleElement.textContent.trim() === updatedTodoItem.title) {
                this.setPriorityColor(container, updatedTodoItem.priority)
            }
        })
    }

    getPrioritySelect = (priorityValue) => {
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

    setPriority = (e) => {
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

    handleProjectClick = (e) => {
        if (e.target.tagName === 'LI') {
            const projectName = e.target.textContent
            this.selectedProject = projectName
            this.currentTab = projectName
            this.displayProjectTodos(projectName)
        }
    }

    displayProjectTodos = (projectName) => {
        const header = document.querySelector('.content h1')
        this.clearTodos()
        if (projectName) {
            header.textContent = projectName
            const todos = this.projectManager.getTodosByTitle(projectName)
            todos.forEach(todo => this.createTodoContainer(todo))
        }
        this.createAddTodoButton()
    }

    createTodoContainer = (todo) => {
        const todosContainer = document.querySelector('.todos-container')
        const titles = todosContainer.querySelectorAll('.title')
        for (const titleElement of titles) {
            if (titleElement.textContent.trim() === todo.title) {
                console.log('Todo already exists')
                return // Prevent adding duplicate todos
            }
        }

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
                                    </div>`;
        todosContainer.appendChild(itemContainer)
        this.setPriorityColor(itemContainer, todo.priority)

        const circle = itemContainer.querySelector('.circle')
        if (circle) {
            circle.addEventListener('click', () => {
                circle.classList.toggle('shaded')
                this.checkIfDone(circle, itemContainer)
            })
        }
    }

    checkIfDone = (circle, itemContainer) => {
        const isShaded = circle.classList.contains('shaded')
        const textContainer = itemContainer.querySelector('.text-container')
        
        if (textContainer) {
            textContainer.style.textDecoration = isShaded ? 'line-through' : 'none'
        }
    }
    
    setPriorityColor = (container, value) => {
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

    addTask = (e) => {
        e.preventDefault()
        const { todoTitleField, todoDescriptionField, todoDuedateField } = this.getInputFields()
        const priority = this.selectedPriority

        if (!todoTitleField.value || !todoDescriptionField.value || !todoDuedateField.value) {
            alert('Please fill in all fields.')
            return
        }

        const newTodo = new Todo(todoTitleField.value.trim(), todoDescriptionField.value.trim(), todoDuedateField.value.trim(), priority)
        const todos = this.projectManager.getTodosByTitle(this.selectedProject)
        todos.push(newTodo)
        this.closeModal()
        this.displayProjectTodos(this.selectedProject)
    }

    clearInputFields = () => {
        document.querySelector('#title').value = ''
        document.querySelector('#description').value = ''
        document.querySelector('#duedate').value = ''
        console.log('Cleared input fields')
    }

    displayProjects = () => {
        const projects = this.projectManager.getProjects()
        projects.forEach(project => {
            const li = document.createElement('li')
            li.textContent = project.title
            this.projectList.append(li)
        })
    }

    createAddTodoButton = () => {
        const todosContainer = document.querySelector('.todos-container')

        if (this.addTodoBtn) return
        this.addTodoBtn = document.createElement('button');
        this.addTodoBtn.className = 'add-todo btn';
        this.addTodoBtn.textContent = 'Add Todo';
        this.addTodoBtn.addEventListener('click', () => {
            this.replaceAddToEdit(this.addTaskBtn, false, null)
            this.showModal()
            this.clearInputFields()
        })
        
        document.querySelector('.content').insertBefore(this.addTodoBtn, todosContainer);
    }
    
    showProjectInputField = () => {
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

    handleInputKeyDown = (e) => {
        const projectName = e.target.value.trim();
        if (e.key === `Enter` && projectName !== '') {
            if (this.isValid(projectName)) {
                this.appendProject(projectName)
            }
            e.target.value = ''
            this.hideProjectInputField()
        }
    } //

    isValid = (name) => {
        if (name === '') return false
        if (this.checkIfExists(name)) {
            alert('Duplicate')
            return false
        }
        return true
    } //

    appendProject = (projectName) => { 
        const newProject = new Project(projectName)
        this.projectManager.projects.push(newProject)
        this.createListElement(projectName)        
    } //

    createListElement = (projectName) => {
        const li = document.createElement('li')
        li.textContent = projectName
        this.projectList.appendChild(li)
        this.hideProjectInputField()
    } //

    hideProjectInputField = () => {
        if (this.projectInput) {
            this.projectInput.remove()
            this.projectInput = null
        } 
    } //

    checkIfExists = (projectName) => {
        return this.projectManager.projects.some(project => project.title === projectName)
    } //

    navigateItem = (e) => {
        this.currentTab = e.target.textContent
        this.getCurrentTab()
    } //
 
    getCurrentTab = () => {
        console.log(this.currentTab)
        switch (this.currentTab) {
            case 'Home': this.loadHome(); break
            case 'Today': this.loadToday(); break
            case 'Week': this.loadWeek(); break
            default: this.displayProjectTodos(this.currentTab); break
        }
    } //

    loadHome = () => {
        const header = document.querySelector('h1')
        header.textContent = 'Home'
        this.displayAllTodos()
        this.removeButton()
    } //

    loadToday = () => {
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
    } //

    loadWeek = () => {
        const header = document.querySelector('h1')
        header.textContent = 'This Week'
    
        this.removeButton()
        this.clearTodos()
    
        const { start, end } = this.getWeekDates() // Get start and end of the week
    
        const projects = this.projectManager.getProjects();
        for (const project of projects) {
            const weekTodos = project.todos.filter(todo => todo.dueDate >= start && todo.dueDate <= end)
            for (const todo of weekTodos) {
                this.createTodoContainer(todo) // Display the filtered todos
            }
        }
    }

    getWeekDates = () => {
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

    clearTodos = () => document.querySelector('.todos-container').innerHTML = ''

    showModal = () => this.modal.style.display = 'block' 

    closeModal = () => {
        this.modal.style.display = 'none'
        this.getPrioritySelect()
    }

    cacheDomElements = () => {
         this.sidebar = document.querySelector('.sidebar')
         this.addProjectBtn = document.querySelector('.add-project.btn')
         this.projectList = document.querySelector('ul')
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
            } else if (e.target.closest('.delete-btn img')) {
                console.log('Delete')
                this.deleteTodo(e)
            }
        })
        
        this.sidebarItems.forEach(item => {
            item.addEventListener('click', this.navigateItem.bind(this))
        })

        this.priorityBtn.addEventListener('click', this.setPriority.bind(this))
        this.projectList.addEventListener('click', this.handleProjectClick.bind(this));
        this.addProjectBtn.addEventListener('click', this.showProjectInputField.bind(this))
        this.exitBtn.addEventListener('click', this.closeModal.bind(this))
    }
}