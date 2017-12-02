function drawTree(a) {
	for (i=0; i<=a; i++) {
	
	var star='';
		for (j=0; j<=(a-i); j++) {
		star += ' ';	
		}	
		for (k=0; k<=i*2; k++) {
		star += '*';
		}
		console.log(star);
	}
}

console.log(drawTree(5));
console.log(drawTree(8));
console.log(drawTree(20));