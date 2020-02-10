import List from "../Models/List.js";
import Task from "../Models/Tasks.js";
import _store from "../store.js";
//Public
class ListService {
  //TODO  Here is where we handle all of our business logic,
  //given the information you need in the controller,
  //what methods will you need to do when this class is first 'constructed'?
  //NOTE You will need this code to persist your data into local storage, be sure to call the store method to save after each change
  constructor() {

  }

  addList(newListObj) {
    console.log(_store.State.lists);
    let newList = new List(newListObj)
    _store.State.lists.push(newList)
    _store.saveState()
  }

  addTask(newTaskObj, listId) {
    console.log(_store.State.lists);
    let newTask = new Task(newTaskObj);
    let list = _store.State.lists.find(list => list.id === listId)
    //tasks are stored on "list"
    list.tasks.push(newTask)
    _store.saveState()
  }
  deleteList(listId) {
    let lists = _store.State.lists.filter(list => list.id !== listId)
    _store.State.lists = lists
    _store.saveState()
  }

  deleteTask(listId, taskId) {
    let list = _store.State.lists.find(list => list.id === listId)
    //let tasks = list.tasks
    let tasks = list.tasks.filter(task => task.id !== taskId)
    //list.tasks = list
    list.tasks = tasks
    _store.saveState()
  }
}




const SERVICE = new ListService();
export default SERVICE;
