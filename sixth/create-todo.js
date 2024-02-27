const fs = require('fs');

const createTodo = (todo) => {
	try {
		 // check if the json file exists
	fs.access('todos.json', (err) => {
		 // if it does not exist, create a new json file
		 if (err){
			  fs.writeFileSync('todos.json', JSON.stringify([]))
		 }
		  // read from the todo.json if it exists
		 const todoBuffer = fs.readFileSync("todos.json");
		 // convert it to string
		 let dataJSON = todoBuffer.toString();
		 // parse the data
		 const todos = JSON.parse(dataJSON);

		 // check if the todo title exists
		 const duplicateTodo = todos.find((task) => {
			  return task === todo;
		 });

		 if (!duplicateTodo) {
			  todos.push(todo);
			  dataJSON = JSON.stringify(todos);
			  fs.writeFileSync("todos.json", dataJSON);
			  console.log("New Todo Added");
		 } else {
			  console.log("New Todo title has already been used");
		 }
	});
	}catch(error){
		 console.log("An error occured, try again", error)
	}
};



module.exports = {
	createTodo,
};