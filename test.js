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

	console.log("Finished ccseTest()");
}
