// See https://github.com/staticvariablejames/CCtest

function ccseTest() {
	let testSave = "eyJ2ZXJzaW9uIjoiMi4wMTciLCJBY2hpZXZlbWVudHMiOnt9LCJVcGdyYWRlcyI6e30sIkJ1aWxkaW5ncyI6e30sIkJ1ZmZzIjp7fSwiU2Vhc29ucyI6e30sIk90aGVyTW9kcyI6eyJ0ZXN0Ijp7fX19%21END%21";
	/* Corresponds to {"version":"2.017","Achievements":{},"Upgrades":{},"Buildings":{},"Buffs":{},"Seasons":{},"OtherMods":{"test":{}}}
	 *
	 * Note that OtherMods has a single 'test' element, which we use below
	 */

	// Check we are actually accessing CCSE's native save
	delete CCSE.save.OtherMods.test;
	window.localStorage.setItem('CCSE', testSave);
	CCSE.LoadSave();
	console.assert(CCSE.save.OtherMods.test !== undefined);

	// Check we are storing data to the official CCSE's save
	CCSE.WriteSave();
	console.assert(window.localStorage.getItem('CCSE') !== testSave);

	// Check whether reloading the CCSE save also reloads the vanilla save
	Util.wipeSave();

	testSave = CCSE.WriteSave(1);
	Game.Earn(100);
	console.assert(Game.cookies == 100);
	Game.WriteSave();
	console.assert(window.localStorage.getItem('CCSE') !== testSave);
	CCSE.LoadSave(testSave);
	console.assert(Game.cookies == 0);

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
