//Business logic =================================
function ToDoList() {
  this.todos = [];
  this.currentId = 0;
}

ToDoList.prototype.addToDoList = function(todo) {
  todo.id = this.currentId;
  this.todos.push(todo);
  this.currentId++;
}

function ToDo(notes) {
  this.notes = notes;
}

//User Interface ==================================
$(document).ready(function() {
  var toDoList = new ToDoList();
  $("form#userInput").submit(function(event){
    event.preventDefault();
    var inputtedToDo = $("input#thingsToDo").val();
    //$("input#thingsToDo").val();
    var newToDo = new ToDo (inputtedToDo);
    toDoList.addToDoList(newToDo);
    $("#done").append("<li><input id='" + newToDo.id + "' type='checkbox'>" +  " " + newToDo.notes + "</li>");
    $("form").val("");
  });

  $("#done").on("click", "input[type='checkbox']", function() {
    // var id = parseInt(event.target.id);
    // console.log(id);
    //$(this).parent().detach();
    $(this).parent().checked();
  });
});