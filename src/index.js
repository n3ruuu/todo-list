import ProjectManager from './modules/projectManager.js'
import DOM from './modules/dom.js'

const init = (() => {
    const projectManager = new ProjectManager()
    const domManager = new DOM(projectManager)

    domManager.loadHome()
    domManager.displayProjects()
})()