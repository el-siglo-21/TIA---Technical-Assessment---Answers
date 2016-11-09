function func(a, b) {
	var t;
	while (b != 0) {
		t = b;
		b = a % b;
		a = t;
	}
	return a;
}

console.log(func(14,21));
console.log(func(69,169));