var numb = {a: 1, b: 5};

function swap(objToSwap){
	objToSwap.a = objToSwap.a + objToSwap.b;
	objToSwap.b = objToSwap.a - objToSwap.b;
	objToSwap.a = objToSwap.a - objToSwap.b;
	return 0;
}

swap(numb);
console.log(numb.a);
console.log(numb.b);