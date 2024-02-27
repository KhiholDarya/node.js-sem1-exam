// [10 punktów] Stwórz aplikację która pobierze z GitHuba informacje o użytkowniku i jego repozytoriach. Dodatkowo sprawdź aktualną pogodę w lokalizacji użytkownika.

// w parametrach uruchomienia jest podawany login użytkownika oraz opcjonalnie informacja czy wyświetlać liczbę śledzących użytkownika, sposób obsługi parametrów wejściowych jest dowolny (w kodzie rozwiązania należy dodać komentarz z przykładowym wywołaniem).
// wyświetl nazwę użytkownika (name)
// wyświetl liczbę śledzących użytkownika (followers) - tylko jeżeli użyto odpowiedniego parametru przy uruchomieniu aplikacji
// wyświetl liczbę repozytoriów
// wyświetl nazwy repozytoriów (name)
// wyświetl opis pogody (weather.main, weather.description) w lokalizacji użytkownika (location - zwraca GitHub w danych użytkownika)
// żądania do API wysyłaj asynchronicznie
// pamiętaj o obsłudze błędów
// podziel rozwiązanie na moduły
// Lista endpointów API:

// dane użytkownika: https://api.github.com/users/{userName}
// np https://api.github.com/users/octocat
// repozytoria użytkownika: https://api.github.com/users/{username}/repos
// np https://api.github.com/users/octocat/repos
// pogoda: https://api.openweathermap.org/data/2.5/weather?appid=0ed761300a2725ca778c07831ae64d6e&q={name}
// np https://api.openweathermap.org/data/2.5/weather?appid=0ed761300a2725ca778c07831ae64d6e&q=Białystok


const getUser = require('./user');
const getWeather = require('./weather');
const getReposInfo = require('./repos');
const yargs = require('yargs');

const userName = yargs.argv.username;
const areFollowersVisible = yargs.argv.followers;
const specialSigns = [' ', '*', '$', '#', '!','=', '&', '^', '(', ')', '+', '|', '<', '>', '?', '/', '[', ']', '{', '}'];

if(!userName || typeof userName !== 'string' || userName.includes(specialSigns)) {
	console.log('Your login must be a username or email string without space and special signs! Usernames for user accounts on GitHub.com can only contain alphanumeric characters and dashes ( - )');
	process.exit(1);
};

	if(areFollowersVisible !== 'true' && areFollowersVisible !== 'false') {
	console.log('You need to write true or false to show or hide followers');
	process.exit(1);
};

(async (username, followers) => {
	try {
		//get user info
		const user = await getUser(username);
		console.log(`Username: ${user.name}, the number of repositories: ${user.public_repos}.`);

		// followers
		if (followers === 'true') console.log(`The number of followers: ${user.followers}.`);
		
		//get repositories info
		const repos = await getReposInfo(username);
		const reposNames = [];
		for (let repo of repos) {
			reposNames.push(` "${repo.name}"`)
		};
		console.log(`The repositories: ${reposNames}.`);

		 //get weather
		const location = user.location;
		if(location) {
			const weather = await getWeather(location);
			console.log(`The weather in ${location} is: ${weather.weather[0].main}, ${weather.weather[0].description}.`);
		} else {
			console.log('Weather is not found!');
		};
	} catch (error) {
		console.log('User is not found!');
	}
})(userName, areFollowersVisible);

// node .\app.js --username='pawellukaszuk' --followers='true'
// node .\app.js --username='octocat' --followers='true'
// node .\app.js --username='KhiholDarya' --followers='false'
