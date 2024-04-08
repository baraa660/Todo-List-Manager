class TodoList {

    constructor(name){
        this.name= name;
        this.todos=[];
    }

    addTodo(todoText){

        
        const newTodo = {
            text : todoText,
            isDone : false
        }

        this.todos.push(newTodo);
    }

    completeTodo(todoIndex){
        if(todoIndex >= 0 && todoIndex <this.todos.length){
            this.todos[todoIndex].isDone = true;
        }
        else{
            console.log("Invalid todo index");
        }
    }

    deleteTodo(todoIndex){
        if(todoIndex >= 0 && todoIndex <this.todos.length){
            this.todos.splice(todoIndex,1);
        }
        else{
            console.log("Invalid todo index");
        }
    }

    listTodos(){
        console.log("Todo List: " + this.name);

        this.todos.map((todo,index) => {
            console.log(`${index+1}_ ${todo.text} (${todo.isDone ? 'x' : ' '})`);
        });

        console.log("");
    }
}

const myTodoList = new TodoList("Sunday Tasks");

myTodoList.addTodo("submit JavaScript assignment");
myTodoList.addTodo("submit ReactJS assignment");
myTodoList.addTodo("Read a book");
myTodoList.addTodo("have some food");

myTodoList.listTodos(); //show list

myTodoList.completeTodo(0); //make itme completed

myTodoList.listTodos();

myTodoList.deleteTodo(2); //delete item from list

myTodoList.listTodos();