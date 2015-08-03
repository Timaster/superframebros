function loadScript(path)
{
	var script = document.createElement('script');
	toLoad++;
	script.onload = function()
	{
		toLoad--;
	};
	script.type = "text/javascript";
	script.src = path;
	document.getElementsByTagName("head")[0].appendChild(script);
}

function loadStage(name)
{
	toLoad++;
	document.getElementById('stage').src = "img/stages/" + name + ".png";
	document.getElementById('stage').style.display = 'none';
	stage = name;
}

function loadCharacter(name)
{
	character = name;
	document.getElementById('character').style.display = 'none';
	loadScript("js/characters/" + character + ".js");
	characters[character] = {};
	characters[character].animations = {};
	toLoad++;
	document.getElementById('character').src = "img/characters/" + character + ".png";
	loadMovelist();
}

function loadMovelist()
{
	setTimeout(toLoad ? loadMovelist : function(){
		for (var i = 0; i < characters[character].movelist.length; i++)
		{
			loadScript("data/" + character + "/" + characters[character].movelist[i] + ".json");
		}
		loadComplete = true;
	});
}

function processOption(name)
{
	var element = document.createElement('div');
	document.getElementById('control_panel').appendChild(element);
	element.id = "option_" + name;

	settings[name].element = element;
	settings[name].create(character);

	element.innerHTML = settings[name].text;
}
