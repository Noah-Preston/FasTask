import _listService from "../Services/ListService.js";
import _store from "../store.js"
import list from "../Models/List.js"
import task from "../Models/Tasks.js"

//TODO Don't forget to render to the screen after every data change.
function _drawLists() {
  let lists = _store.State.lists
  let listElem = document.getElementById("listRow")
  let template = ""

  let tasks = _store.State.tasks
  let taskElem = document.getElementById("taskName")

  lists.forEach(list => {
    template += list.Template
  })
  listElem.innerHTML = template
}

//Public
export default class ListController {
  constructor() {
    //NOTE: After the store loads, we can automatically call to draw the lists.
    _drawLists();
  }
  addList(event) {
    event.preventDefault();
    let formData = event.target;
    let newList = {
      listName: formData.listName.value
    }
    console.log(newList);
    _listService.addList(newList);
    _drawLists();
  }

  addTask(event, id) {
    event.preventDefault();
    let formData = event.target;
    let newTask = {
      taskName: formData.taskName.value
    }
    console.log(newTask);
    _listService.addTask(newTask, id);
    _drawLists();
  }

  deleteList(id) {
    _listService.deleteList(id)
    _drawLists()
  }

  deleteTask(id) {
    _listService.deleteTask(id)
    _drawLists()
  }


  //TODO: Your app will need the ability to create, and delete both lists and listItems
}
