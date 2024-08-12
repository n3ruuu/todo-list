export default class Storage {
  static saveProjects(projects) {
    localStorage.setItem("projects", JSON.stringify(projects));
  }

  static loadProjects() {
    const projectsJSON = localStorage.getItem("projects");
    return projectsJSON ? JSON.parse(projectsJSON) : [];
  }
}
