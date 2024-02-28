// 2. [2 punkty] Napisz aplikację która przyjmuje w parametrze uruchamiania ciąg znaków a następnie wyświetli go w kolorach tęczy. Wykorzystaj moduł colors (https://www.npmjs.com/package/colors) w wersji 1.3.2!. Pamiętaj o obsłudze błędów.

// Sposób obsługi parametrów wejściowych jest dowolny (w kodzie rozwiązania należy dodać komentarz z przykładowym wywołaniem).
let colors = require('colors/safe');

function rainbowString (str) {
	if (typeof(str) == 'string') {
		console.log(colors.rainbow(str));
	} else {
		console.log("Something's wrong! Check it.");
	}
};
rainbowString('OMG Rainbows!');
rainbowString();
rainbowString(1234);
rainbowString(null);
rainbowString(undefined);

// // tekst któy wyświetlamy powinien byc pobierany z parametrów uruchamiania np
// rainbowString(process.argv[2]);
// rainbowString(1234) - liczbe można przekonwertować na string i wtedy pokolorować

// w zadaniu trzeba było użyć biblioteki colors w wersji 1.3.2 a tutaj jest 1.4.0
// w pliku package.json jest"colors": "^1.4.0",
