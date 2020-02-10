import { generateId } from "../utils.js";
import Task from "../Models/Tasks.js";

export default class List {
  constructor(data) {
    //TODO Your constructor takes in a data object that should have the properties you need to create your list here is a freebie, it will set the id its provided, or if that is undefined it will create a new one (this is an alternative to object destructuring)
    this.listName = data.listName
    this.id = data.id || generateId()
    this.tasks = data.tasks || []
  }
  //Be sure to add the methods needed to create the view template for this model
  //For starting out, your tasks may be strings alone, but later you may wish to turn them into full objects, that will be up to you

  get Tasks() {
    let template = ""
    this.tasks.forEach(task => {
      template += task.Template
    })
    return template
  }

  get Template() {
    return `
    <div className="col-6">
      <h1>${this.listName} <button onclick="app.listController.deleteList('${this.id}')" class="btn btn-danger">X</button></h1>
      
      <h4>Tasks: ${this.Tasks}</h4>
      <form onsubmit="app.listController.addTask(event,'${this.id}')">
      <div class = "form-group">
        <p class = "py-2"><input type="text" name="taskName" class="form-control" placeholder="new task here" aria-describedby="helpId"></p>
        <button class= "btn btn-info " type = "submit">Add Task</button>
      </form>
      </div>
    </div>
    `
  }
}
