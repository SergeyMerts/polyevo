

function drawGrid(width, height) {
    context.beginPath();

    for (var x = 0.5; x < width; x += 10) {
        context.moveTo(x, 0);
        context.lineTo(x, height);
    }

    for (var y = 0.5; y < height; y += 10) {
        context.moveTo(0, y);
        context.lineTo(width, y);
    }

    context.strokeStyle = "#eee";
    context.stroke();
}

function drawYAxis(x, y, h) {
    context.beginPath();
    context.moveTo(x, y);
    context.lineTo(x, 0);
    context.lineTo(x - 5, 5);
    context.moveTo(x, 0);
    context.lineTo(x + 5, 5);
    context.strokeStyle = "#020";
    context.stroke();
}

function drawXAxis(x, y, w) {
    context.beginPath();
    context.moveTo(x, y);
    context.lineTo(w, y);
    context.lineTo(w - 5, y - 5);
    context.moveTo(w, y);
    context.lineTo(w - 5, y + 5);
    context.strokeStyle = "#020";
    context.stroke();
}

function drawLine(x0, y0, x1, y1) {
    context.beginPath();
    context.lineWidth = 1;
    context.moveTo(x0, y0);
    context.lineTo(x1, y1);
    context.strokeStyle = "#ff0000";
    context.stroke();
}

function drawPoint(x, y) {
    context.beginPath();
    context.lineWidth = 2;
    context.moveTo(x, y);
    context.arc(x, y, 2, 0, 2 * Math.PI, true);
    context.strokeStyle = "#110000";
    context.stroke();
}

function drawPolygon(x, y, xc, yc, N) {
    context.beginPath();
    for (var i = 1; i < N; ++i) {
        var x1 = x[i] + xc;
        var y1 = yc - y[i];
        var x0 = x[i - 1] + xc;
        var y0 = yc - y[i - 1];
        drawLine(x0, y0, x1, y1);
        drawPoint(x1, y1);
    }
    drawLine(x[N - 1] + xc, yc - y[N - 1], x[0] + xc, yc - y[0]); //last to zero
    drawPoint(x[0] + xc, yc - y[0]); //zero point
}

function drawSpher(spherArr, N, w, h) {
    context.beginPath();
    var xStep = w / (N - 1);
    drawLine(0, h * (1 - spherArr[0]), xStep, h * (1 - spherArr[1]));
//    drawPoint(xStep, h * (1 - spherArr[1]));
    for (var i = 1; i < N; ++i) {
        var x1 = xStep * i;
        var y1 = h * (1 - spherArr[i]);
        var x0 = xStep * (i - 1);
        var y0 = h * (1 - spherArr[i - 1]);
        drawLine(x1, y1, x0, y0);
//        drawPoint(x1, y1);
    }
}
