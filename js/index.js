var sfb = new SuperFrameBros();

window.onload = function()
{
	var anims =
	[
	//		"dsmash"
	// ,	"dtilt"
	// ,	"ftilt"
	// ,	"jab"
		"usmash"
	// ,	"utilt"
	];

	sfb.init();

	sfb.loadStage('final_destination');
	sfb.loadCharacter('fox');
	sfb.draw();
	sfb.clearData();

	for (var i = 0; i < anims.length; i++)
	{
		sfb.drawAnimation(anims[i]);
	}
};