//1.  [2 punkty] Napisz jak najprostszy kod który spowoduje błąd stack overflow,czyli zwróci komunikat błędu: Uncaught RangeError: Maximum call stack size exceeded


function recursion(x) {
	if (x === 1) {
		return 1
	} else {
		return x + recursion(x - 1);
	}
}
// recursion(10000);