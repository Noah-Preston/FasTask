import { generateId } from "../utils.js"
// import list from "../Models/List.js"
//let listId = list.id
export default class Task {
  constructor(data) {
    this.taskName = data.taskName
    this.id = data.id || generateId()
    // this.tasks = data.tasks
  }

  get Template() {
    return `
    <div class="col-6">
      <h5>${this.taskName}</h5>
    </div>
    `
  }
}