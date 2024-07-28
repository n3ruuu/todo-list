import DOM from './modules/dom.js'

const domManager = new DOM()

const init = (() => {
    domManager.renderProjects()
})()