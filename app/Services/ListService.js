import List from "../Models/List.js";
import _store from "../store.js";
import Task from "../Models/Tasks.js";
//Public
class ListService {
  //TODO  Here is where we handle all of our business logic,
  //given the information you need in the controller,
  //what methods will you need to do when this class is first 'constructed'?
  //NOTE You will need this code to persist your data into local storage, be sure to call the store method to save after each change
  constructor() {

  }

  addList(newList) {
    newList = new List(newList)
    _store.State.lists.push(newList)
    _store.saveState()
  }

  addTask(newTask, listId) {
    newTask = new Task(newTask);
    let list = _store.State.lists.find(list => list.id === listId)
    //tasks are stored on "list"
    list.tasks.push(newTask)
    _store.saveState()
  }
  deleteList(id) {
    let lists = _store.State.lists.filter(list => list.id !== id)
    _store.State.lists = lists
    _store.saveState()
  }

  deleteTask(listId, taskId) {
    let list = _store.State.lists.find(list => list.id === listId)
    //let tasks = list.tasks
    list.tasks.filter(task => task.id !== taskId)
    list.tasks = list
    _store.saveState()
  }
}




const SERVICE = new ListService();
export default SERVICE;
