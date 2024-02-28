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

// linie od 6 do 31 powinny mieć większe wcięcie
// w linii 23-30 sprawdzasz czy nowe todo jest już w pliku - dobry pomysł ale nie było takiego wymagania w zadaniu, nie traktuje tego jako błąd, w pracy najlepiej jest zapytać wcześniej czy taki dodatek jest potrzebny
// masz 3 kolejne puste linie 36-38, przyjęło się że wystarczy jedna pusta linia
