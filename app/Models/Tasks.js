import { generateId } from "../utils.js"
//let taskName = ""
export default class Task {
  constructor(data) {
    this.taskName = data.taskName
    this.id = data.id || generateId()
  }

  get Template() {
    return `
    <div class="col-6">
    <h5>${this.taskName} <button onclick="app.listController.deleteTask('${this.id}')" class="btn btn-danger">X</button></h5>
    
    </div>
    `
  }
}