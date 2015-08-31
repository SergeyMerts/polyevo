

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

function drawAxis(width, height) {
    context.beginPath();
    //X
    context.moveTo(0, height / 2);
    context.lineTo(width, height / 2);
    context.lineTo(width - 5, height / 2 - 5);
    context.moveTo(width, height / 2);
    context.lineTo(width - 5, height / 2 + 5);
    //Y
    context.moveTo(width / 2, height);
    context.lineTo(width / 2, 0);
    context.lineTo(width / 2 - 5, 5);
    context.moveTo(width / 2, 0);
    context.lineTo(width / 2 + 5, 5);

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

function drawPoint(x, y, xc, yc) {
    context.beginPath();
    context.lineWidth = 2;
    context.moveTo(x + xc, yc - y);
    context.arc(x + xc, yc - y, 2, 0, 2 * Math.PI, true);
    context.strokeStyle = "#110000";
    context.stroke();
}

function drawPolygon(x, y, xc, yc, N) {
    context.beginPath();
    for (var i = 1; i < N; ++i) {
        drawLine(x[i - 1] + xc, yc - y[i - 1], x[i] + xc, yc - y[i]);
        drawPoint(x[i], y[i], xc, yc);
    }
    drawLine(x[N - 1] + xc, yc - y[N - 1], x[0] + xc, yc - y[0]); //last to zero
    drawPoint(x[0], y[0], xc, yc); //zero point
}

function drawSpher(spher, N, w, h) {
    context.beginPath();
    var xStep = w / N;
    for (var i = 0; i < N; ++i) {
        drawPoint(i * xStep, h - spher[i] * h, 0, h);
    }
}