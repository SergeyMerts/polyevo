

function drawGrid(cnv) {
    var cntx = cnv.getContext('2d');
    cntx.beginPath();

    for (var x = 0.5; x < cnv.width; x += 10) {
        cntx.moveTo(x, 0);
        cntx.lineTo(x, cnv.height);
    }

    for (var y = 0.5; y < cnv.height; y += 10) {
        cntx.moveTo(0, y);
        cntx.lineTo(cnv.width, y);
    }

    cntx.strokeStyle = "#eee";
    cntx.stroke();
}

function drawYAxis(cntx, x, y) {
    cntx.beginPath();
    cntx.moveTo(x, y);
    cntx.lineTo(x, 0);
    cntx.lineTo(x - 5, 5);
    cntx.moveTo(x, 0);
    cntx.lineTo(x + 5, 5);
    cntx.strokeStyle = "#020";
    cntx.stroke();
}

function drawXAxis(cntx, x, y, w) {
    cntx.beginPath();
    cntx.moveTo(x, y);
    cntx.lineTo(w, y);
    cntx.lineTo(w - 5, y - 5);
    cntx.moveTo(w, y);
    cntx.lineTo(w - 5, y + 5);
    cntx.strokeStyle = "#020";
    cntx.stroke();
}

function drawLine(cntx, x0, y0, x1, y1) {
    cntx.beginPath();
    cntx.lineWidth = 1;
    cntx.moveTo(x0, y0);
    cntx.lineTo(x1, y1);
    cntx.strokeStyle = "#ff0000";
    cntx.stroke();
}

function drawPoint(cntx, x, y) {
    cntx.beginPath();
    cntx.lineWidth = 2;
    cntx.moveTo(x, y);
    cntx.arc(x, y, 2, 0, 2 * Math.PI, true);
    cntx.strokeStyle = "#110000";
    cntx.stroke();
}

function drawPolygon(cntx, x, y, xc, yc, N) {
    cntx.beginPath();
    for (var i = 1; i < N; ++i) {
        var x1 = x[i] + xc;
        var y1 = yc - y[i];
        var x0 = x[i - 1] + xc;
        var y0 = yc - y[i - 1];
        drawLine(cntx, x0, y0, x1, y1);
        drawPoint(cntx, x1, y1);
    }
    drawLine(cntx, x[N - 1] + xc, yc - y[N - 1], x[0] + xc, yc - y[0]); //last to zero
    drawPoint(cntx, x[0] + xc, yc - y[0]); //zero point
}

function drawSpher(cntx, spherArr, N, w, h) {
    cntx.beginPath();
    var xStep = w / (N - 1);
    drawLine(cntx, 0, h * (1 - spherArr[0]), xStep, h * (1 - spherArr[1]));
//    drawPoint(cntx, xStep, h * (1 - spherArr[1]));
    for (var i = 1; i < N; ++i) {
        var x1 = xStep * i;
        var y1 = h * (1 - spherArr[i]);
        var x0 = xStep * (i - 1);
        var y0 = h * (1 - spherArr[i - 1]);
        drawLine(cntx, x1, y1, x0, y0);
//        drawPoint(cntx, x1, y1);
    }
}

function drawPolyBack(cnv) {
    var polyCntx = cnv.getContext('2d');
    clearCanvas(cnv);
    w = cnv.width;
    h = cnv.height;
    drawGrid(cnv);
    drawXAxis(polyCntx, 0, h / 2, w);
    drawYAxis(polyCntx, w / 2, h);
}

function drawSpherBack(cnv) {
    var polyCntx = cnv.getContext('2d');
    clearCanvas(cnv);
    w = cnv.width;
    h = cnv.height;
    drawGrid(cnv);
    drawXAxis(polyCntx, 0, h, w);
    drawYAxis(polyCntx, 0, h);
}

function clearCanvas(cnv) {
    cnv.width = cnv.width;
}
