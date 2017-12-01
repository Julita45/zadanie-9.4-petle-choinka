function drawTree(i) {
	for (i=1; i<10; i++) {
	var star='';
		for (j=1; j<=i; j++) {
		star += '*';
		}
	console.log(star);
	}
}

console.log(drawTree(5));