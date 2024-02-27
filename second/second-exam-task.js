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