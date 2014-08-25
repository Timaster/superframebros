function SuperFrameBros()
{
	var t = this;

	var character_images = {};
	var character = 'fox';
	var character_position = [1477, 501];
	var stage_images = {};
	var stage = 'final_destination';
	var draw_color = [0, 255, 0, 150];

	t.animations = {};
	var ctx;
	var imgData;

	t.init = function()
	{
		ctx = document.getElementById('canvas').getContext('2d');
		imgData = ctx.createImageData(1920, 1080);
	};

	t.draw = function()
	{
		ctx.putImageData(imgData, 0, 0);
		document.getElementById('character').style.left = character_position[0] + 'px';
		document.getElementById('character').style.top = character_position[1] + 'px';
	};

	t.loadStage = function(name)
	{
		document.getElementById('stage').src = "img/stages/" + name + ".png";
	};

	t.loadCharacter = function(name)
	{
		document.getElementById('character').src = "img/characters/" + name + ".png";
	};

	t.clearData = function()
	{
		for (var i = 3; i < imgData.length; i+=4)
		{
			imgData.data[i] = 0;		
		}
	};

	t.drawFrame = function(name, frame, no_draw)
	{
		var animation = t.animations[character][name];
		if (!animation[frame])
			return;

		var	lb = animation[frame].left_bound
		,	tb = animation[frame].top_bound
		;

		// set right and bottom bounds
		var	rb = animation[frame].frame_data.length + lb
		,	bb = animation[frame].frame_data[0].length + tb
		;

		for (var i = lb; i < rb; i++)
		{
			for (var j = tb; j < bb; j++)
			{
				if (animation[frame].frame_data[i-lb][j-tb])
				{
					imgData.data[4*(i+j*1920)+0] = draw_color[0];
					imgData.data[4*(i+j*1920)+1] = draw_color[1];
					imgData.data[4*(i+j*1920)+2] = draw_color[2];
					imgData.data[4*(i+j*1920)+3] = draw_color[3];
				}
			}
		}
		if (!no_draw)
			t.draw();
	};

	t.drawAnimation = function(name)
	{
		var animation = t.animations[character][name];
		for (var frame = 0; frame < animation.length; frame++)
		{
			t.drawFrame(name, frame, true);
		}
		t.draw();
	};
}