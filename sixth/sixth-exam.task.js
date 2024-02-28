// 6. [10 punktów] Napisz aplikację pozwalającą na przechowywanie w pliku listy zadań do wykonania (klasyczna lista TODO). Aplikacja powinna pozwalać na dodanie do listy nowego zadania, jak również wyświetlić zawartość całej listy. Przy uruchomieniu bez parametrów aplikacja powinna informować o możliwych parametrach wywołania.


// zapis/odczyt wykonuj asynchronicznie
// pamiętaj o obsłudze błędów
// poinformuj użytkownika o poprawności wykonanych operacji
// wydziel odczyt i zapis informacji do osobnych modułów
// Sugeruje użyć modułu yargs z konstrukcją yargs.command.

// Przykład wywołania programu:

// > node app.js dodaj "napisac program na zaliczenie z NodeJS"
// > node app.js lista
const yargs = require("yargs");
const create = require('./create-todo');
const showList = require('./show-list-todo');
const argv = yargs
.command({
	command: 'add',
	describe: 'Add a new todo',
	builder: {
		todo: {
			describe: 'Todo text',
			type: 'string',
			demandOption: true,
		},
	},
	handler: function (argv) {
		create.createTodo(argv.todo);
	},
})
.command({
	command: "list",
	describe: "Get all Todos",
	handler: function () {
		showList.listTodo()
	},
})
.command(
	{command: '$0',
	describe: 'show help',
	 handler: function() {
		console.log(`To add new TODO task write: " node 'nazwa pliku' add --todo='name of task'". To see all TODO list write: "node 'nazwa pliku' list"`);
}
});

	yargs.parse();

// add --todo="code a new app"

// we wszystkich plikach powinnaś sprawdzić średniki i wcięcia
// nazwa pliku "todos.json" występuje w kodzie 5 razy, warto przenieść ją do pliku sixth-exam.task.js i przekazywać ją do pozostałych funkcji jako parametr
// kod odpowiedzialny za odczyt pliku jest w dwóch modułach - create-todo.js i show-list-todo.j, lepiej jest przenieść go do nowego modułu i zaimportować do pozostałch
