// See https://github.com/staticvariablejames/CCtest

function ccseTest() {
	let ascensionCalls = 0;
	let reincarnateCalls = 0;
	Game.customAscend.push(function() {
		ascensionCalls++;
	});
	Game.customReincarnate.push(function() {
		reincarnateCalls++;
	});
	document.getElementById('legacyButton').click();
	document.getElementById('promptOption1').click(); // "no"
	console.assert(ascensionCalls === 0);
	document.getElementById('legacyButton').click();
	document.getElementById('promptOption0').click(); // "yes"
	console.assert(ascensionCalls === 1);

	setTimeout(function() {
		document.getElementById('ascendButton').click();
		document.getElementById('promptOption1').click(); // "no"
		console.assert(reincarnateCalls === 0);
		document.getElementById('ascendButton').click();
		document.getElementById('promptOption0').click(); // "yes"
		console.assert(reincarnateCalls === 1);

		console.log("Finished ccseTest()");
	}, 10000); // Takes ~10 seconds for the ascension to take place
}
