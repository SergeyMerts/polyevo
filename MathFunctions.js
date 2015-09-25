

function Perimeter(x, y, N) {
    var per = 0;
    for (var i = 1; i < N; ++i) {
        var x0 = x[i - 1];
        var y0 = y[i - 1];
        var x1 = x[i];
        var y1 = y[i];
        per += Math.sqrt((x1 - x0) * (x1 - x0) + (y1 - y0) * (y1 - y0));
    }
    per += Math.sqrt((x[0] - x[N - 1]) * (x[0] - x[N - 1]) + (y[N - 1] - y[0]) * (y[N - 1] - y[0])); //last to zero
    return per;
}

function Area(x, y, N) {
    var s = 0;
    for (var i = 1; i < N; ++i) {
        var x0 = x[i - 1];
        var y0 = y[i - 1];
        var x1 = x[i];
        var y1 = y[i];
        var a = Math.sqrt(x0 * x0 + y0 * y0);
        var b = Math.sqrt(x1 * x1 + y1 * y1);
        var c = Math.sqrt((x1 - x0) * (x1 - x0) + (y1 - y0) * (y1 - y0));
        var p = (a + b + c) / 2;
        s += Math.sqrt(p * (p - a) * (p - b) * (p - c));
    }
    var a = Math.sqrt(x[N - 1] * x[N - 1] + y[N - 1] * y[N - 1]);
    var b = Math.sqrt(x[0] * x[0] + y[0] * y[0]);
    var c = Math.sqrt((x[0] - x[N - 1]) * (x[0] - x[N - 1]) + (y[0] - y[N - 1]) * (y[0] - y[N - 1]));
    var p = (a + b + c) / 2;
    s += Math.sqrt(p * (p - a) * (p - b) * (p - c)); //last to zero
    return s;
}

function Spherisity(per, area) {
    var circleArea = per * per / 4 / Math.PI;
    return area / circleArea;
}

function rnd(min, max) {
    return Math.random() * (max - min) + min;
}

function idealSpher(n) {
    return Math.PI / n / Math.tan(Math.PI / n);
}