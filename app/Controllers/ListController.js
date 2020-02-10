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
    let newListObj = {
      listName: formData.listName.value
    }
    console.log(newListObj);
    _listService.addList(newListObj);
    formData.reset();
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

  deleteList(listId) {
    // @ts-ignore
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
        _listService.deleteList(listId)
        _drawLists()
        // @ts-ignore
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
  }

  deleteTask(taskId, listId) {
    _listService.deleteTask(listId, taskId)
    _drawLists()
  }


  //TODO: Your app will need the ability to create, and delete both lists and listItems
}
