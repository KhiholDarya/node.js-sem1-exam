// 4. [5 punktów] Napisz aplikację która odczyta z pliku data.json liczbę oraz nazwę pliku, a następnie:

// pobierze z API informacje o danej liczbie (https://lukaszuk.net/numbers.php?number={number}, np https://lukaszuk.net/numbers.php?number=1)
// informacje pobrane z API zapisze w pliku o pobranej wcześniej nazwie
// Pamiętaj o obsłudze błędów. Żądania do API oraz zapis do pliku wykonuj asynchronicznie.
const fs = require ('fs');
const axios = require ('axios');
const dataPath = 'data.json';
let link;
let dataFile;
let responseData;

function getAndWriteData () {
		fs.readFile(dataPath, 'utf8', (err, file) => {
		if (err) {
			console.error('Error while reading the file:', err)
			return
		}
		try {
			dataFile = JSON.parse(file);
			// console.log(dataFile.number);
			// console.log(dataFile.filename);
			link = `https://lukaszuk.net/numbers.php?number=${dataFile.number}`;
			getInfoNum();
		} catch (err) {
			console.error('Error while parsing JSON data:', err);
		}
	});
;}

async function getInfoNum() {
	try {
	const response = await axios.get(link);
	responseData = response.data;
	writeFileTo(dataFile)
	} catch (error) {
	console.error('Error: ' + error.message);
	}
};

function writeFileTo () {
	fs.writeFile(`${dataFile.filename}`, responseData, (err) => { 
		if(err) { 
			throw err; 
		}
		console.log("Data has been written to file successfully."); 
	}); 
};

getAndWriteData();

// w linii 14 wcięcie kodu jest zbyt duże
// w liniach 33, 34, 35, 37 wcięcie kody jest zbyt małe
// w linii 21 warto dodać sprawdzenie czy dane odczytane z pliku mają poprawny format - np czy number jest liczbą całkowitą a filename jest stringiem
// zmienne: link, dataFile i responseData nie są potrzebne - dane powinniśmy przekazywać w parametrach wywołania funkcji
// np:
// function getAndWriteData () {
// 	fs.readFile(dataPath, 'utf8', (err, file) => {
// 	if (err) {
// 		console.error('Error while reading the file:', err)
// 		return
// 	}
// 	try {
// 		const dataFile = JSON.parse(file);
// 		getInfoNum(dataFile);
// 	} catch (err) {
// 		console.error('Error while parsing JSON data:', err);
// 	}
// });
// ;}

// async function getInfoNum(data) {
// 	const link = `https://lukaszuk.net/numbers.php?number=${data.number}`;

// 	try {
// 		const response = await axios.get(link);
// 		const responseData = response.data;
// 		writeFileTo(data.filename, responseData)
// 	} catch (error) {
// 		console.error('Error: ' + error.message);
// 	}
// };
