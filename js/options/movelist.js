settings.movelist = {};
settings.movelist.value = [];
settings.movelist.text = 'show moves'
settings.movelist.create = function(character)
{
	for (var j=0; j<characters[character].movelist.length; j++)
		settings.movelist.value[j] = {"name":characters[character].movelist[j],"value":true};
};