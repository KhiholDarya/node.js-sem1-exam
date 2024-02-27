const fs = require('fs');

const listTodo = () => {
	try {
		  // read from the todos.json if it exists
		  const todoBuffer = fs.readFileSync("todos.json");
		  // convert it to string
		  let dataJSON = todoBuffer.toString();
		  // parse the data
		  const todos = JSON.parse(dataJSON);
		  console.log(todos)
	}catch(error){
		 console.log("An error occured")
	}
};

module.exports = {
	listTodo,
};
// > node app.js add "napisac program na zaliczenie z NodeJS"
// > node app.js list