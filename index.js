window.animations = {};

window.onload = function()
{
	var ctx = document.getElementById('canvas').getContext('2d');

	var fd = document.getElementById('fd');
	var fax =document.getElementById('fax');

	ctx.drawImage(fd,0,0);
	var imgData = ctx.getImageData(0, 0, 1920, 1080);

	var animation = window.animations.utilt;
	for (var frame = 0; frame < animation.length; frame++)
	{
		if (!animation[frame])
			continue;

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
					imgData.data[4*(i+j*1920)] = 255;
				}
			}
		}
	}

	ctx.putImageData(imgData, 0, 0);

	ctx.drawImage(fax,1477,501);
};