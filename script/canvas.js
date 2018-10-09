var canvas = document.getElementById('myCanvas');

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

var ctx = canvas.getContext('2d');

drawPath(ctx, "black", "5", [650, 320], [800, 220], [800, 130]);
drawPath(ctx, "black", "5", [650, 320], [850, 220], [850, 130]);
drawPath(ctx, "black", "5", [650, 320], [900, 220], [900, 130]);
drawPath(ctx, "black", "5", [650, 320], [950, 220], [950 ,130]);
drawPath(ctx, "black", "5", [650, 320], [1000, 220], [1000 ,130]);
drawCircle(ctx, 800, 190, 10, 0, 360, null, "white", "black");
drawCircle(ctx, 850, 155, 10, 0, 360, null, "white", "black");
drawCircle(ctx, 900, 190, 10, 0, 360, null, "white", "black");
drawCircle(ctx, 950, 155, 10, 0, 360, null, "white", "black");
drawCircle(ctx, 1000, 190, 10, 0, 360, null, "white", "black");


drawPath(ctx, "green", "5", [550, 380], [650, 350], [650, 100]);
drawPath(ctx, "green", "5", [550, 380], [600, 350], [600, 100]);
drawCircle(ctx, 650, 320, 10, 0, 360, null, "white", "green");
drawCircle(ctx, 650, 150, 10, 0, 360, null, "white", "green");
drawCircle(ctx, 600, 250, 10, 0, 360, null, "white", "green");

drawPath(ctx, "purple", "5", [500, 500], [550, 450], [550, 50]);
drawCircle(ctx, 550, 380, 10, 0, 360, null, "white", "purple");

drawPath(ctx, "red", "5", [500, 600], [500, 10]);
drawCircle(ctx, 500, 500, 10, 0, 360, false, "white", "red");
drawCircle(ctx, 500, 300, 10, 0, 360, null, "white", "red");
drawCircle(ctx, 500, 200, 10, 0, 360, null, "white", "red");

function drawCircle (_ctx, x, y, radius, startAngle, endAngle, clockwise = false, backgroundColor, color) {
	var canvasContext = _ctx;
	canvasContext.beginPath();
	// begin drawing circle
	canvasContext.arc(x, y, radius, startAngle, endAngle, clockwise);
	canvasContext.fillStyle = backgroundColor;
	canvasContext.fill();
	canvasContext.strokeStyle = color;
	// end drawing circle
	canvasContext.closePath();
	canvasContext.stroke();
}

function drawPath (_ctx, color, width, ...restArgs) {
	var canvasContext = _ctx;
	canvasContext.beginPath();
	// begin drawing path(s)
	ctx.strokeStyle = color;
	ctx.lineWidth = width;
	ctx.moveTo(restArgs[0][0], restArgs[0][1]);
	for(var i = 1; i < restArgs.length; i++){
		ctx.lineTo(restArgs[i][0], restArgs[i][1]);
	}
	// end drawing path(s)
	// ctx.closePath();
	ctx.stroke();
}