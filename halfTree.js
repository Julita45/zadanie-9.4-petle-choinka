function drawTree(a) {
	for (i=1; i<=a; i++) {
	var star='';
		for (j=1; j<=i; j++) {
		star += '*';
		}
	console.log(star);
	}
}

console.log(drawTree(5));
console.log(drawTree(8));
console.log(drawTree(20));