function urlToMap(format, url) {
    var res = {};
    var formatArray = getVariablesArray(format.substring(1));
    var _a = url.substring(1).split("?"), uri = _a[0], param = _a[1];
    var firstArray = uri.split("/");
    formatArray.map(function (i) { return (res[i[1]] = firstArray[i[0]]); });
    param.split("&").map(function (i) {
        var pair = i.split("=");
        res[pair[0]] = pair[1];
    });
    return res;
}
function getVariablesArray(format) {
    return format
        .split("/")
        .filter(function (i) { return i[0] === ":"; })
        .map(function (i, ix) {
        return [ix, i.substring(1)];
    });
}
console.log(urlToMap("/:version/api/:collection/:id", "/6/api/listings/3?sort=desc&limit=11"));
