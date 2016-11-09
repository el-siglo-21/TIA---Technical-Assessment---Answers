function display(arr, n){
	var combinedString="";

	combinedString += '{';
	for (var i = 0; i < n; i++){
		combinedString += arr[i];
		if (i < (n - 1)) {
			combinedString += ',';
		}
	}
	combinedString += '}';
	console.log(combinedString);
}

function combination(n, i, kk){
	if (n == 0){
		display(combination.arr, i);
	}
	else if (n > 0){
		for(var k = 1; k <= kk; k++){
			combination.arr[i] = k;
			combination(n-k, i+1, k);
		}
	}
}

combination.arr = [];

// combination(n, 0, n-1)
combination(4,0,3);