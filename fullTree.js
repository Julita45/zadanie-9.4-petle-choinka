function drawTree(a) {
	for (var i = 0; i < a; i++) {
		var star='';
			for (var j = 1; j < (a - i); j++) {
				star += ' ';	
			}	
			for (var k = 0; k <= i * 2; k++) {
				star += '*';
			}
		console.log(star);
	}
}
console.log(drawTree(5));
console.log(drawTree(8));
console.log(drawTree(20));