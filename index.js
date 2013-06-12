module.exports.dx = function(v, dx, dy, a) {
    return {
        x: v.x + (dx * Math.cos(a) - dy * Math.sin(a)),
        y: v.y + (dx * Math.sin(a) + dy * Math.cos(a))
    };
};

module.exports.a = function(v, a, offset) {
    return {
        x:  v.x + (offset * Math.sin(a)),
        y: v.y - (offset * Math.cos(a))
    };
};

module.exports.ua = function(u, a, offset) {
    return {
        x:  u.x + (offset * Math.sin(a)),
        y: u.y - (offset * Math.cos(a))
    };
};

module.exports.ab = function(v, a, b, offset) {
    var sa = offset * Math.sin(a),
        ca = offset * Math.cos(a),
        h = Math.tan(0.5 * (b - a));
    return {
        x: v.x + sa + h * ca,
        y: v.y - ca + h * sa
    };
};
