String.prototype.format = function() {
    a = this;
    for (k in arguments) {
        a = a.replace("{" + k + "}", arguments[k])
    }
    return a
}

String.prototype.indexOfAll = function (data) {
    var indices = [];
    for(var pos = this.indexOf(data); pos !== -1; pos = this.indexOf(data, pos + 1)) {
        indices.push(pos);
    }
    return indices;
}

String.prototype.replaceObject = function (data) {

    var string = this;

    for (const [key, value] of Object.entries(Object.freeze(data))) {
        for (const index in this.indexOfAll(key)) {
            string = string.replace(`$${key}`, value);
        }
    }

    return string;

}