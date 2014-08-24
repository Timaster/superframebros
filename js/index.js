var sfb = new SuperFrameBros();

window.onload = function()
{
	sfb.init();

	sfb.loadStage('final_destination');
	sfb.loadCharacter('fax');
	sfb.draw();
	sfb.clearData();
	sfb.drawAnimation('utilt');
};