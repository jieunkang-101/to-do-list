//Business logic for To Do List
function ToDoList() {
  this.todos = [];
  this.currentId = 0;
}

ToDoList.prototype.addToDoList = function(todo) {
  todo.id - this.assignId();
  this.todos.push(todo);
}

ToDoList.prototype.assignId = function() {
  this.currentId +=1 ;
  return this.currentId;
}

ToDoList.prototype.findToDo = function(id) {
  for (var i=0; i< this.todos.length; i++) {
    if (this.todos[i]) {     
      if (this.todos[i].id == id) {
        return this.todos[i];
      }
    }                          
  };
  return false;
}

//Business logic for To Do
function ToDo(notes) {
  this.notes = notes;
}





// User interface logic
var toDoList = new ToDoList();

function displayToDoList(toDoListToDisplay) {
  var toDoDisplay = $("ul#checkbox");
  var htmlForToDo = "";
  toDoListToDisplay.todos.forEach(function(todo) {
    var x = document.createElement("INPUT");
    x.setAttribute("type", "checkbox");
    htmlForToDo +=  x + "<li id=" + todo.id + ">" + todo.notes + "</li>"
  });
  toDoDisplay.html(htmlForToDo);
};

function showToDo(toDoId) {
  var todo = toDoList.findToDo(toDoId);
  $("#output").show();
  $("#checkbox").html(todo.notes);
}


$(document).ready(function() {
  $("form#userInput").submit(function(event){
    event.preventDefault();
    var inputtedToDo = $("input#thingsToDo").val();
    $("input#thingsToDo").val();
    var newToDo = new ToDo (inputtedToDo);
    toDoList.addToDoList(newToDo);
    $("#output").show(displayToDoList(toDoList));
  });
});