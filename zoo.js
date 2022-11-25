var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var SimpleAnimal = /** @class */ (function () {
    function SimpleAnimal(speakDialogue) {
        this.speakDialogue = speakDialogue;
    }
    SimpleAnimal.prototype.speak = function (dialogue) {
        console.log(dialogue.replace(/[ ]/g, " " + this.speakDialogue + " ") +
            " " +
            this.speakDialogue);
    };
    return SimpleAnimal;
}());
var Lion = /** @class */ (function (_super) {
    __extends(Lion, _super);
    function Lion() {
        return _super.call(this, "roar") || this;
    }
    return Lion;
}(SimpleAnimal));
var Tiger = /** @class */ (function (_super) {
    __extends(Tiger, _super);
    function Tiger() {
        return _super.call(this, "grrr") || this;
    }
    return Tiger;
}(SimpleAnimal));
var lion = new Lion();
var tiger = new Tiger();
lion.speak("I'm a lion");
tiger.speak("Lions suck");
