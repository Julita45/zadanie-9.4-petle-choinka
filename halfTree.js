function drawTree(a) {
	for (var i = 1; i <= a; i++) {
		var star = '';
			for (var j = 1; j <= i; j++) {
				star += '*';
			}
		console.log(star);
	}
}
drawTree(6);