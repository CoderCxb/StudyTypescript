"use strict";
var Info = /** @class */ (function () {
    function Info(info) {
        this._info = info;
    }
    Object.defineProperty(Info.prototype, "info", {
        get: function () {
            return this._info;
        },
        set: function (newInfo) {
            this._info = newInfo;
        },
        enumerable: true,
        configurable: true
    });
    Info.type = 'people';
    return Info;
}());
console.log(Info.type);
var info = new Info({
    name: 'cxb',
    age: 22
});
console.log(info);
info.info = {
    name: 'cw',
    age: 22
};
console.log(info);
