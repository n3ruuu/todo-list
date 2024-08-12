(() => {
  "use strict";
  var t = {
      208: (t, e, n) => {
        n.d(e, { A: () => c });
        var o = n(601),
          r = n.n(o),
          i = n(314),
          s = n.n(i)()(r());
        s.push([
          t.id,
          ":root {\n    --primary-clr: #FFFFFF;\n    --secondary-clr: #F6F6F6;\n    --line-dash: #E6E6E6;\n    --black-text: #222222;\n    --hover-clr: #E4E4E4;\n}\n\nbody {\n    box-sizing: border-box;\n    padding: 0;\n    margin: 0;\n    height: 100vh;\n    line-height: 1.5;\n    color: var(--black-text);\n    font-family: Poppins, sans-serif;\n}\n\nmain {\n    display: flex;\n    height: inherit;\n}\n\n.sidebar {\n    background-color: var(--secondary-clr);\n    border-right: 1px solid var(--line-dash);\n    width: 20%;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n}\n\n.items {\n    display: flex;\n    flex-direction: column;\n    font-size: 1.5rem;\n    font-weight: bold;\n    padding: 20px 50px;\n    gap: 20px;\n}\n\n.project-list {\n    margin: 10px;\n    font-size: 1.2rem;\n    font-weight: normal;\n}\n\n.btn,\ninput {\n    font-family: inherit;\n}\n\n.add-project.btn {\n    font-size: 1.5rem;\n    margin: 10px;\n}\n\nli span {\n    cursor: pointer;\n    list-style-type: none;\n    padding: 5px 0;\n}\n\nli span:hover,\n.items .item:hover {\n    background-color: var(--hover-clr);\n    padding-left: 20px;\n    padding-right: 10px;\n    border-radius: 5px;\n}\n\n.project-input {\n    width: 80%;\n    font-size: inherit;\n    border: 1px solid var(--line-dash);\n    border-radius: 5px;\n    padding-left: 20px;\n}   \n\n.content {\n    background-color: var(--primary-clr);\n    width: 80%;\n    margin-top: 50px;\n    display: flex;\n    flex-direction: column;\n}\n\n.content h1, \n.content .add-todo.btn {\n    margin-left: 200px;\n}\n\n.add-todo.btn {\n    width: 100px;\n    margin-bottom: 50px;\n}\n\n.modal {\n    align-self: center;\n    position: absolute;\n    background-color: var(--secondary-clr);\n    top: 20%;\n    font-size: 1.5rem;\n    border-radius: 8px;\n    width: 50%;\n    height: min-content;\n    padding: 20px;\n    border: 1px solid var(--line-dash);\n    border-radius: 8px;\n}\n\nfieldset{\n    border: none;\n    display: flex;\n    flex-direction: column;\n    padding: 20px;\n}\n\n.due-date {\n    display: flex;\n    align-items: center;\n    gap: 20px;\n}\n\n.due-date input {\n    width: 120px;\n    height: 50px;\n    padding: 0 20px;\n    border-radius: 8px;\n    border-style: none;\n    border: 1px solid blue;\n    color: blue;\n    cursor: pointer;\n}\n\n.due-date input:hover {\n    background-color: rgba(128, 128, 128, 0.5);\n}\n\n#title,\n#description {\n    font-size: 1.15rem;\n    padding-top: 10px;\n    padding-left: 20px;\n    font-family: inherit;\n    border: none;\n    resize: none;\n}\n\nbutton,\nspan,\n.items .item {\n    cursor: pointer;\n}\n\n#title {\n    border-bottom: 2px solid var(--line-dash);\n}\n\n.priority {\n    display: flex;\n    gap: 20px;\n}\n\n.priority button {\n    font-family: inherit;\n    border-radius: 4px;\n    padding: 0 8px;\n    width: 80px;\n    cursor: pointer;\n    border: 1px solid transparent;\n}\n\n#low {\n    color: green;\n    border: 1px solid green;\n    background-color: inherit;\n}\n\n#medium {\n    color: orange;\n    border: 1px solid orange;\n    background-color: inherit;\n}\n\n#high {\n    color: red;\n    border: 1px solid red;\n    background-color: inherit;\n}\n\n#low:hover,\n#low.active {\n    color: white;\n    background-color: green;\n}\n\n#medium:hover,\n#medium.active {\n    color: white;\n    background-color: orange;\n}\n\n#high:hover,\n#high.active {\n    color: white;\n    background-color: red;\n}\n\n.high-priority.shaded {\n    background-color: red;\n}\n\n.medium-priority.shaded {\n    background-color: orange;\n}\n\n.low-priority.shaded {\n    background-color: green;\n}\n\n.add-task.btn {\n    position: absolute;\n    bottom: 20px;\n    width: 100px;\n    height: 40px;\n    border-radius: 8px;\n    color: blue;\n    border: 1px solid blue;\n    cursor: pointer;\n    right: 40PX;\n}\n\n\n.exit {\n    position: absolute;\n    color: gray;\n    top: 20px;\n    right: 40px;\n    cursor: pointer\n}\n\n.exit:hover {\n    color: black;\n    font-weight: bold;\n}\n\n.add-task.btn:hover {\n    color: white;\n    background-color: blue;\n}\n\n#description {\n    height: 200px; /* Set the height of the input field */\n    word-break: normal;\n}\n\n.todos-container {\n    display: flex;\n    width: 90%;\n    align-self: center;\n    flex-wrap: wrap;\n}\n\n.item-container {\n    width: 1000px;\n    font-size: 1.2rem;\n    align-self: center;\n    display: flex;\n    background-color: var(--secondary-clr);\n    padding: 20px;\n    gap: 20px;\n    width: 45%;\n    border-radius: 8px;\n    margin: 10px;\n}\n\n.todo-header {\n    display: flex;\n    justify-content: space-between;\n}\n\n.circle {\n    border: 2px solid transparent;\n    border-radius: 50%;\n    height: 18px;\n    width: 18px;\n    border-color: #999;\n    border-width: 1px;\n}\n\n.low-priority {\n    border-color: green;\n}\n\n.medium-priority {\n    border-color: orange;\n}\n\n.high-priority {\n    border-color: red;\n}\n\n.actions-container img {\n    cursor: pointer;\n}\n\n.text-container {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    flex-wrap: wrap;\n    width: 95%;\n}\n\n.text-container .description {\n    font-size: 1rem;\n}\n\n.actions-container {\n    display: flex;\n    gap: 10px;\n}\n\n.project-item {\n    display: flex;\n    justify-content: space-between;\n}\n\n.svg,\n.delete-btn,\nimg {\n    width: 30px;\n    height: 30px;\n}",
          "",
        ]);
        const c = s;
      },
      314: (t) => {
        t.exports = function (t) {
          var e = [];
          return (
            (e.toString = function () {
              return this.map(function (e) {
                var n = "",
                  o = void 0 !== e[5];
                return (
                  e[4] && (n += "@supports (".concat(e[4], ") {")),
                  e[2] && (n += "@media ".concat(e[2], " {")),
                  o &&
                    (n += "@layer".concat(
                      e[5].length > 0 ? " ".concat(e[5]) : "",
                      " {",
                    )),
                  (n += t(e)),
                  o && (n += "}"),
                  e[2] && (n += "}"),
                  e[4] && (n += "}"),
                  n
                );
              }).join("");
            }),
            (e.i = function (t, n, o, r, i) {
              "string" == typeof t && (t = [[null, t, void 0]]);
              var s = {};
              if (o)
                for (var c = 0; c < this.length; c++) {
                  var d = this[c][0];
                  null != d && (s[d] = !0);
                }
              for (var a = 0; a < t.length; a++) {
                var l = [].concat(t[a]);
                (o && s[l[0]]) ||
                  (void 0 !== i &&
                    (void 0 === l[5] ||
                      (l[1] = "@layer"
                        .concat(l[5].length > 0 ? " ".concat(l[5]) : "", " {")
                        .concat(l[1], "}")),
                    (l[5] = i)),
                  n &&
                    (l[2]
                      ? ((l[1] = "@media "
                          .concat(l[2], " {")
                          .concat(l[1], "}")),
                        (l[2] = n))
                      : (l[2] = n)),
                  r &&
                    (l[4]
                      ? ((l[1] = "@supports ("
                          .concat(l[4], ") {")
                          .concat(l[1], "}")),
                        (l[4] = r))
                      : (l[4] = "".concat(r))),
                  e.push(l));
              }
            }),
            e
          );
        };
      },
      601: (t) => {
        t.exports = function (t) {
          return t[1];
        };
      },
      72: (t) => {
        var e = [];
        function n(t) {
          for (var n = -1, o = 0; o < e.length; o++)
            if (e[o].identifier === t) {
              n = o;
              break;
            }
          return n;
        }
        function o(t, o) {
          for (var i = {}, s = [], c = 0; c < t.length; c++) {
            var d = t[c],
              a = o.base ? d[0] + o.base : d[0],
              l = i[a] || 0,
              p = "".concat(a, " ").concat(l);
            i[a] = l + 1;
            var h = n(p),
              u = {
                css: d[1],
                media: d[2],
                sourceMap: d[3],
                supports: d[4],
                layer: d[5],
              };
            if (-1 !== h) e[h].references++, e[h].updater(u);
            else {
              var g = r(u, o);
              (o.byIndex = c),
                e.splice(c, 0, { identifier: p, updater: g, references: 1 });
            }
            s.push(p);
          }
          return s;
        }
        function r(t, e) {
          var n = e.domAPI(e);
          return (
            n.update(t),
            function (e) {
              if (e) {
                if (
                  e.css === t.css &&
                  e.media === t.media &&
                  e.sourceMap === t.sourceMap &&
                  e.supports === t.supports &&
                  e.layer === t.layer
                )
                  return;
                n.update((t = e));
              } else n.remove();
            }
          );
        }
        t.exports = function (t, r) {
          var i = o((t = t || []), (r = r || {}));
          return function (t) {
            t = t || [];
            for (var s = 0; s < i.length; s++) {
              var c = n(i[s]);
              e[c].references--;
            }
            for (var d = o(t, r), a = 0; a < i.length; a++) {
              var l = n(i[a]);
              0 === e[l].references && (e[l].updater(), e.splice(l, 1));
            }
            i = d;
          };
        };
      },
      659: (t) => {
        var e = {};
        t.exports = function (t, n) {
          var o = (function (t) {
            if (void 0 === e[t]) {
              var n = document.querySelector(t);
              if (
                window.HTMLIFrameElement &&
                n instanceof window.HTMLIFrameElement
              )
                try {
                  n = n.contentDocument.head;
                } catch (t) {
                  n = null;
                }
              e[t] = n;
            }
            return e[t];
          })(t);
          if (!o)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.",
            );
          o.appendChild(n);
        };
      },
      540: (t) => {
        t.exports = function (t) {
          var e = document.createElement("style");
          return t.setAttributes(e, t.attributes), t.insert(e, t.options), e;
        };
      },
      56: (t, e, n) => {
        t.exports = function (t) {
          var e = n.nc;
          e && t.setAttribute("nonce", e);
        };
      },
      825: (t) => {
        t.exports = function (t) {
          if ("undefined" == typeof document)
            return { update: function () {}, remove: function () {} };
          var e = t.insertStyleElement(t);
          return {
            update: function (n) {
              !(function (t, e, n) {
                var o = "";
                n.supports && (o += "@supports (".concat(n.supports, ") {")),
                  n.media && (o += "@media ".concat(n.media, " {"));
                var r = void 0 !== n.layer;
                r &&
                  (o += "@layer".concat(
                    n.layer.length > 0 ? " ".concat(n.layer) : "",
                    " {",
                  )),
                  (o += n.css),
                  r && (o += "}"),
                  n.media && (o += "}"),
                  n.supports && (o += "}");
                var i = n.sourceMap;
                i &&
                  "undefined" != typeof btoa &&
                  (o +=
                    "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(i)))),
                      " */",
                    )),
                  e.styleTagTransform(o, t, e.options);
              })(e, t, n);
            },
            remove: function () {
              !(function (t) {
                if (null === t.parentNode) return !1;
                t.parentNode.removeChild(t);
              })(e);
            },
          };
        };
      },
      113: (t) => {
        t.exports = function (t, e) {
          if (e.styleSheet) e.styleSheet.cssText = t;
          else {
            for (; e.firstChild; ) e.removeChild(e.firstChild);
            e.appendChild(document.createTextNode(t));
          }
        };
      },
    },
    e = {};
  function n(o) {
    var r = e[o];
    if (void 0 !== r) return r.exports;
    var i = (e[o] = { id: o, exports: {} });
    return t[o](i, i.exports, n), i.exports;
  }
  (n.n = (t) => {
    var e = t && t.__esModule ? () => t.default : () => t;
    return n.d(e, { a: e }), e;
  }),
    (n.d = (t, e) => {
      for (var o in e)
        n.o(e, o) &&
          !n.o(t, o) &&
          Object.defineProperty(t, o, { enumerable: !0, get: e[o] });
    }),
    (n.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (t) {
        if ("object" == typeof window) return window;
      }
    })()),
    (n.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
    (() => {
      var t;
      n.g.importScripts && (t = n.g.location + "");
      var e = n.g.document;
      if (!t && e && (e.currentScript && (t = e.currentScript.src), !t)) {
        var o = e.getElementsByTagName("script");
        if (o.length)
          for (var r = o.length - 1; r > -1 && (!t || !/^http(s?):/.test(t)); )
            t = o[r--].src;
      }
      if (!t)
        throw new Error(
          "Automatic publicPath is not supported in this browser",
        );
      (t = t
        .replace(/#.*$/, "")
        .replace(/\?.*$/, "")
        .replace(/\/[^\/]+$/, "/")),
        (n.p = t);
    })(),
    (n.nc = void 0);
  class o {
    static saveProjects(t) {
      localStorage.setItem("projects", JSON.stringify(t));
    }
    static loadProjects() {
      const t = localStorage.getItem("projects");
      return t ? JSON.parse(t) : [];
    }
  }
  class r {
    constructor() {
      (this.projects = o.loadProjects()),
        0 === this.projects.length &&
          ((this.projects = [
            {
              title: "Project 1",
              todos: [
                {
                  title: "Todo 1",
                  description: "Description 1",
                  dueDate: "2024-08-08",
                  priority: "High",
                  completed: !1,
                },
                {
                  title: "Todo 2",
                  description: "Description 2",
                  dueDate: "2024-08-14",
                  priority: "Medium",
                  completed: !1,
                },
              ],
            },
            {
              title: "Project 2",
              todos: [
                {
                  title: "Todo 3",
                  description: "Description 3",
                  dueDate: "2024-08-10",
                  priority: "Low",
                  completed: !1,
                },
                {
                  title: "Todo 4",
                  description: "Description 4",
                  dueDate: "2024-08-12",
                  priority: "High",
                  completed: !1,
                },
              ],
            },
            {
              title: "Project 3",
              todos: [
                {
                  title: "Todo 5",
                  description: "Description 5",
                  dueDate: "2024-08-13",
                  priority: "Medium",
                  completed: !1,
                },
                {
                  title: "Todo 6",
                  description: "Description 6",
                  dueDate: "2024-08-14",
                  priority: "Low",
                  completed: !1,
                },
              ],
            },
          ]),
          this.saveProjects());
    }
    getProjects = () => this.projects;
    findProject = (t) =>
      this.projects.find((e) => e.todos.some((e) => e.title === t));
    getTodosByTitle = (t) => {
      const e = this.projects.find((e) => e.title === t);
      return e ? e.todos : [];
    };
    getTodoItem = (t) => {
      for (const e of this.projects) {
        const n = e.todos.find((e) => e.title === t);
        if (n) return n;
      }
    };
    getAllTodos = () => this.projects.reduce((t, e) => t.concat(e.todos), []);
    saveProjects = () => {
      o.saveProjects(this.projects);
    };
  }
  class i {
    constructor(t) {
      (this.title = t), (this.todos = []);
    }
  }
  class s {
    constructor(t, e, n, o) {
      (this.title = t),
        (this.description = e),
        (this.dueDate = n),
        (this.priority = o);
    }
  }
  const c = n.p + "3ea4cf483224d228ffe4.svg",
    d = n.p + "ac5f4457112a7c9181df.svg";
  class a {
    constructor(t) {
      (this.projectManager = t),
        (this.selectedProject = ""),
        (this.selectedPriority = ""),
        (this.currentTab = "Home"),
        this.cacheDomElements(),
        this.bindEvents();
    }
    loadProjects() {
      this.displayProjects(), this.getCurrentTab();
    }
    saveProjects() {
      this.projectManager.saveProjects();
    }
    editTodo = (t) => {
      const e = t.target.closest(".todo-header").textContent.trim(),
        n = this.projectManager.getTodoItem(e);
      (this.selectedProject = this.projectManager.findProject(e)),
        console.log(n, this.selectedProject),
        this.showEditModal(n);
    };
    showEditModal = (t) => {
      const {
        todoTitleField: e,
        todoDescriptionField: n,
        todoDuedateField: o,
      } = this.getInputFields();
      (e.value = t.title),
        (n.value = t.description),
        (o.value = t.dueDate),
        this.getPrioritySelect(t.priority),
        this.replaceAddToEdit(this.addTaskBtn, !0, t),
        this.showModal();
    };
    saveEditedTask = (t, e) => {
      t.preventDefault();
      const {
          todoTitleField: n,
          todoDescriptionField: o,
          todoDuedateField: r,
        } = this.getInputFields(),
        i = this.selectedPriority
          ? this.selectedPriority.charAt(0).toUpperCase() +
            this.selectedPriority.slice(1).toLowerCase()
          : e.priority,
        s = this.selectedProject.todos.findIndex((t) => t === e);
      -1 !== s &&
        (console.log("Saving edited task for ", e),
        (this.selectedProject.todos[s] = {
          title: n.value.trim(),
          description: o.value.trim(),
          dueDate: r.value.trim(),
          priority: i,
        }),
        this.updateTodoPriorityColor(this.selectedProject.todos[s])),
        this.closeModal(),
        this.getCurrentTab(),
        this.saveProjects();
    };
    deleteTodo = (t) => {
      const e = t.target.closest(".todo-header").textContent.trim();
      this.selectedProject = this.projectManager.findProject(e);
      const n = this.selectedProject.todos.findIndex((t) => t.title === e);
      -1 !== n &&
        (this.selectedProject.todos.splice(n, 1),
        this.getCurrentTab(),
        this.saveProjects());
    };
    getInputFields = () => ({
      todoTitleField: document.querySelector("#title"),
      todoDescriptionField: document.querySelector("#description"),
      todoDuedateField: document.querySelector("#duedate"),
    });
    replaceAddToEdit = (t, e, n) => {
      t.removeEventListener("click", (t) => this.addTask(t)),
        t.removeEventListener("click", (t) => this.saveEditedTask(t, n)),
        e
          ? (console.log("Editing Task"),
            (t.textContent = "Edit Task"),
            t.addEventListener("click", (t) => this.saveEditedTask(t, n)))
          : (console.log("Adding task"),
            (t.textContent = "Add Task"),
            t.addEventListener("click", (t) => this.addTask(t)));
    };
    updateTodoPriorityColor = (t) => {
      document.querySelectorAll(".item-container").forEach((e) => {
        const n = e.querySelector(".title");
        n &&
          n.textContent.trim() === t.title &&
          this.setPriorityColor(e, t.priority);
      });
    };
    getPrioritySelect = (t) => {
      const e = document.querySelectorAll(".priority button");
      e.forEach((t) => {
        t.classList.remove("active");
      }),
        t &&
          e.forEach((e) => {
            e.textContent.trim() === t.toString().toUpperCase() &&
              e.classList.add("active");
          });
    };
    setPriority = (t) => {
      if ("BUTTON" === t.target.tagName) {
        const e = t.target.textContent;
        (this.selectedPriority =
          e.charAt(0).toUpperCase() + e.slice(1).toLowerCase()),
          document.querySelectorAll(".priority button").forEach((t) => {
            t.classList.remove("active");
          }),
          t.target.classList.add("active");
      }
    };
    handleProjectClick = (t) => {
      if ((console.log("sadjasdio"), "SPAN" === t.target.tagName)) {
        const e = t.target.textContent;
        (this.selectedProject = e),
          (this.currentTab = e),
          this.displayProjectTodos(e);
      }
    };
    displayProjectTodos = (t) => {
      const e = document.querySelector(".content h1");
      this.clearTodos(),
        t &&
          ((e.textContent = t),
          this.projectManager
            .getTodosByTitle(t)
            .forEach((t) => this.createTodoContainer(t))),
        this.createAddTodoButton();
    };
    createTodoContainer = (t) => {
      console.log("Creating todo container");
      const e = document.querySelector(".todos-container"),
        n = e.querySelectorAll(".title");
      for (const e of n)
        if (e.textContent.trim() === t.title)
          return void console.log("Todo already exists");
      const o = document.createElement("div");
      (o.className = "item-container"),
        (o.innerHTML = ` <span class="circle"></span>\n                                    <div class="text-container">\n                                        <header class="todo-header">\n                                            <div class="title">${t.title}</div>\n                                            <div class="actions-container">\n                                                <div class="edit-btn">\n                                                    <img class="svg" src="${c}" alt="edit svg">\n                                                </div>\n                                                <div class="delete-btn">\n                                                    <img class="svg" src="${d}" alt="delete svg">                                                </div>\n                                            </div>\n                                        </header>\n                                        <div class="description">${t.description}</div>\n                                        <div class="duedate">${t.dueDate}</div>\n                                    </div>`),
        e.appendChild(o),
        this.setPriorityColor(o, t.priority);
      const r = o.querySelector(".circle");
      r &&
        (t.completed &&
          (r.classList.add("shaded"),
          (o.querySelector(".text-container").style.textDecoration =
            "line-through")),
        r.addEventListener("click", () => {
          r.classList.toggle("shaded"), this.checkIfDone(r, o);
          const t = r.classList.contains("shaded"),
            e = o.querySelector(".title").textContent.trim(),
            n = this.projectManager
              .findProject(e)
              .todos.find((t) => t.title === e);
          n && ((n.completed = t), this.saveProjects());
        }));
    };
    checkIfDone = (t, e) => {
      const n = t.classList.contains("shaded"),
        o = e.querySelector(".text-container");
      o && (o.style.textDecoration = n ? "line-through" : "none");
    };
    setPriorityColor = (t, e) => {
      const n = t.querySelector(".circle");
      if (n)
        switch (e) {
          case "Low":
            n.className = "circle low-priority";
            break;
          case "Medium":
            n.className = "circle medium-priority";
            break;
          case "High":
            n.className = "circle high-priority";
            break;
          default:
            n.className = "circle";
        }
    };
    addTask = (t) => {
      t.preventDefault();
      const {
          todoTitleField: e,
          todoDescriptionField: n,
          todoDuedateField: o,
        } = this.getInputFields(),
        r = this.selectedPriority;
      if (!e.value || !n.value || !o.value)
        return void alert("Please fill in all fields.");
      const i = new s(e.value.trim(), n.value.trim(), o.value.trim(), r);
      this.projectManager.getTodosByTitle(this.selectedProject).push(i),
        this.closeModal(),
        this.displayProjectTodos(this.selectedProject),
        this.saveProjects();
    };
    clearInputFields = () => {
      (document.querySelector("#title").value = ""),
        (document.querySelector("#description").value = ""),
        (document.querySelector("#duedate").value = ""),
        console.log("Cleared input fields");
    };
    displayProjects = () => {
      const t = this.projectManager.getProjects();
      (this.projectList.innerHTML = ""),
        t.forEach((t) => {
          this.createListElement(t.title);
        });
    };
    deleteProject = (t) => {
      confirm(`Are you sure you want to delete the project "${t}"?`) &&
        ((this.projectManager.projects = this.projectManager.projects.filter(
          (e) => e.title !== t,
        )),
        this.projectManager.saveProjects(),
        this.saveProjects(),
        this.displayProjects(),
        this.loadHome());
    };
    createAddTodoButton = () => {
      const t = document.querySelector(".todos-container");
      this.addTodoBtn ||
        ((this.addTodoBtn = document.createElement("button")),
        (this.addTodoBtn.className = "add-todo btn"),
        (this.addTodoBtn.textContent = "Add Todo"),
        this.addTodoBtn.addEventListener("click", () => {
          this.replaceAddToEdit(this.addTaskBtn, !1, null),
            this.showModal(),
            this.clearInputFields();
        }),
        document.querySelector(".content").insertBefore(this.addTodoBtn, t));
    };
    showProjectInputField = () => {
      this.projectInput ||
        ((this.projectInput = this.createInputField()),
        this.projectList.appendChild(this.projectInput),
        this.projectInput.focus());
    };
    createInputField = () => {
      const t = document.createElement("input");
      return (
        (t.className = "project-input"),
        (t.type = "text"),
        t.addEventListener("keydown", () => this.handleInputKeyDown.bind(this)),
        t.addEventListener("blur", () => this.hideProjectInputField()),
        t
      );
    };
    handleInputKeyDown = (t) => {
      const e = t.target.value.trim();
      "Enter" === t.key &&
        "" !== e &&
        (this.isValid(e) && (this.appendProject(e), this.saveProjects()),
        (t.target.value = ""),
        this.hideProjectInputField());
    };
    isValid = (t) =>
      !("" === t || (this.isExisting(t) && (alert("Duplicate"), 1)));
    appendProject = (t) => {
      const e = new i(t);
      this.projectManager.projects.push(e), this.createListElement(t);
    };
    createListElement = (t) => {
      const e = document.createElement("li");
      e.className = "project-item";
      const n = document.createElement("span");
      (n.textContent = t), (n.className = "project-title");
      const o = document.createElement("div");
      o.className = "delete-btn";
      const r = document.createElement("img");
      (r.src = d),
        (r.alt = "Delete"),
        o.appendChild(r),
        e.append(n, o),
        this.projectList.appendChild(e),
        o.addEventListener("click", () => this.deleteProject(t));
    };
    hideProjectInputField = () => {
      this.projectInput &&
        (this.projectInput.remove(), (this.projectInput = null));
    };
    isExisting = (t) => this.projectManager.projects.some((e) => e.title === t);
    navigateItem = (t) => {
      (this.currentTab = t.target.textContent), this.getCurrentTab();
    };
    getCurrentTab = () => {
      switch ((console.log(this.currentTab), this.currentTab)) {
        case "Home":
          this.loadHome();
          break;
        case "Today":
          this.loadToday();
          break;
        case "Week":
          this.loadWeek();
          break;
        default:
          this.displayProjectTodos(this.currentTab);
      }
    };
    loadHome = () => {
      (document.querySelector("h1").textContent = "Home"),
        this.displayAllTodos(),
        this.removeButton();
    };
    loadToday = () => {
      (document.querySelector("h1").textContent = "Today"), this.clearTodos();
      const t = new Date().toISOString().split("T")[0];
      console.log(t);
      const e = this.projectManager.getProjects();
      for (const n of e) {
        const e = n.todos.filter((e) => e.dueDate === t);
        for (const t of e) this.createTodoContainer(t);
      }
      this.removeButton();
    };
    loadWeek = () => {
      (document.querySelector("h1").textContent = "This Week"),
        this.removeButton(),
        this.clearTodos();
      const { start: t, end: e } = this.getWeekDates();
      console.log(t, e);
      const n = this.projectManager.getProjects();
      for (const o of n) {
        const n = o.todos.filter((n) => n.dueDate >= t && n.dueDate <= e);
        console.log(n);
        for (const t of n) this.createTodoContainer(t);
      }
    };
    getWeekDates = () => {
      const t = new Date(),
        e = t.getDay(),
        n = new Date(t);
      n.setDate(t.getDate() - e);
      const o = new Date(n);
      return (
        o.setDate(n.getDate() + 6),
        {
          start: n.toISOString().split("T")[0],
          end: o.toISOString().split("T")[0],
        }
      );
    };
    displayAllTodos = () => {
      this.clearTodos();
      const t = this.projectManager.getAllTodos();
      for (const e of t) this.createTodoContainer(e);
    };
    removeButton = () => {
      this.addTodoBtn && (this.addTodoBtn.remove(), (this.addTodoBtn = null));
    };
    clearTodos = () =>
      (document.querySelector(".todos-container").innerHTML = "");
    showModal = () => (this.modal.style.display = "block");
    closeModal = () => {
      (this.modal.style.display = "none"), this.getPrioritySelect();
    };
    cacheDomElements = () => {
      (this.sidebar = document.querySelector(".sidebar")),
        (this.addProjectBtn = document.querySelector(".add-project.btn")),
        (this.projectList = document.querySelector("ul")),
        (this.addTaskBtn = document.querySelector(".add-task.btn")),
        (this.modal = document.querySelector(".modal")),
        (this.exitBtn = document.querySelector(".exit")),
        (this.priorityBtn = document.querySelector(".priority")),
        (this.sidebarItems = document.querySelectorAll(".items .item")),
        (this.todosContainer = document.querySelector(".todos-container"));
    };
    bindEvents = () => {
      this.todosContainer.addEventListener("click", (t) => {
        t.target.closest(".edit-btn img")
          ? this.editTodo(t)
          : t.target.closest(".delete-btn img") &&
            (console.log("Delete"), this.deleteTodo(t));
      }),
        this.sidebarItems.forEach((t) => {
          t.addEventListener("click", this.navigateItem.bind(this));
        }),
        this.priorityBtn.addEventListener("click", this.setPriority.bind(this)),
        this.projectList.addEventListener(
          "click",
          this.handleProjectClick.bind(this),
        ),
        this.addProjectBtn.addEventListener(
          "click",
          this.showProjectInputField.bind(this),
        ),
        this.exitBtn.addEventListener("click", this.closeModal.bind(this));
    };
  }
  var l = n(72),
    p = n.n(l),
    h = n(825),
    u = n.n(h),
    g = n(659),
    m = n.n(g),
    f = n(56),
    v = n.n(f),
    y = n(540),
    b = n.n(y),
    x = n(113),
    j = n.n(x),
    T = n(208),
    P = {};
  (P.styleTagTransform = j()),
    (P.setAttributes = v()),
    (P.insert = m().bind(null, "head")),
    (P.domAPI = u()),
    (P.insertStyleElement = b()),
    p()(T.A, P),
    T.A && T.A.locals && T.A.locals,
    (() => {
      const t = new r(),
        e = new a(t);
      e.loadHome(), e.loadProjects();
    })();
})();
