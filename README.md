//1. [2 points] Write the simplest code possible that will cause a stack overflow error, i.e. it will return the error message: Uncaught RangeError: Maximum call stack size exceeded

// 2. [2 points] Write an application that accepts a string of characters as a startup parameter and then displays it in rainbow colors. Use the colors module (https://www.npmjs.com/package/colors) version 1.3.2!. Remember to handle errors.
// The method of handling input parameters is optional (a comment with an example call should be added in the solution code).

// 3. [2 points] Write a program that will print the details of a file with your own source code.
// Information printed:

// creation time
// modification time
// size
// The program should work correctly even after changing the name and location of the file - without changing the source code!

// 4. [5 points] Write an application that will read the number and file name from the data.json file, and then:

// will download information about a given number from the API (https://lukaszuk.net/numbers.php?number={number}, e.g. https://lukaszuk.net/numbers.php?number=1)
// information downloaded from the API will be saved in a file with the previously downloaded name
// Remember to handle errors. Make requests to the API and writing to the file asynchronously.

// 5[10 points] Create an application that will retrieve information about the user and his repositories from GitHub. Additionally, check the current weather in the user's location.
// the launch parameters include the user's login and, optionally, information whether to display the number of the user's followers, the method of handling the input parameters is optional (a comment with an example call should be added in the solution code).
// display username (name)
// display the number of followers of the user - only if the appropriate parameter was used when starting the application
// display the number of repositories
// display repository names (name)
// display weather description (weather.main, weather.description) at user's location (location - returns GitHub in user's data)
// send requests to the API asynchronously
// remember to handle errors
// divide the solution into modules
// List of API endpoints:

// user data: https://api.github.com/users/{userName}
// e.g. https://api.github.com/users/octocat
// user repositories: https://api.github.com/users/{username}/repos
// e.g. https://api.github.com/users/octocat/repos
// weather: https://api.openweathermap.org/data/2.5/weather?appid=0ed761300a2725ca778c07831ae64d6e&q={name}
// e.g. https://api.openweathermap.org/data/2.5/weather?appid=0ed761300a2725ca778c07831ae64d6e&q=Białystok

// 6. [10 points] Write an application that allows you to store a to-do list in a file (classic TODO list). The application should allow you to add a new task to the list, as well as display the contents of the entire list. When launched without parameters, the application should provide information about possible invocation parameters.
// perform reading/writing asynchronously
// remember to handle errors
// inform the user about the correctness of the operations performed
// separate reading and writing information into separate modules
// Suggests using the yargs module with the yargs.command construct.
// Example of program call:

// > node app.js add "write a test program with NodeJS"
// > node app.js list
