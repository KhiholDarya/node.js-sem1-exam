// 3. [2 punkty] Napisz program który wypisze szczegóły pliku z własnym kodem źródłowym.
// Wypisywane informacje:
// czas utworzenia
// czas modyfikacji
// rozmiar
// Program powinien działać poprawnie także po zmianie nazwy i lokalizacji pliku - bez zmiany kodu źródłowego!

const fs = require ('fs');
const path = require('path');

function getInfo () {
	const scriptName = path.basename(__filename);
	fs.stat(scriptName, function (err, stats) {
		if(err){ 
			console.log(err) 
	  } 
	  else{ 
	  console.log(`'${scriptName}' file was created at ${stats.birthtime}, was modified at ${stats.mtime}, and its size is ${stats.size} bytes.`) 
	  } 
	});
}
getInfo();