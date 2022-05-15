"use strict";
exports.__esModule = true;
exports.MobileLibrary = void 0;
var MobileLibrary = /** @class */ (function () {
    function MobileLibrary(name, location, mobiles) {
        this.name = name;
        this.location = location;
        this.mobiles = mobiles;
        this.totalPrice = this.TotalPriceCalculation();
    }
    MobileLibrary.prototype.GetName = function () {
        return this.name;
    };
    MobileLibrary.prototype.SetName = function (value) {
        this.name = value;
    };
    MobileLibrary.prototype.GetLocation = function () {
        return this.location;
    };
    MobileLibrary.prototype.SetLocation = function (location) {
        this.location = location;
    };
    MobileLibrary.prototype.GetMobiles = function () {
        return this.mobiles;
    };
    MobileLibrary.prototype.SetMobiles = function (mobiles) {
        this.mobiles = mobiles;
    };
    MobileLibrary.prototype.GetTotalPrice = function () {
        return this.totalPrice;
    };
    MobileLibrary.prototype.SetTotalPrice = function (totalPrice) {
        this.totalPrice = totalPrice;
    };
    MobileLibrary.prototype.TotalPriceCalculation = function () {
        var suma = 0;
        for (var moviles in this.mobiles) {
            suma += this.mobiles[moviles].getPrice();
        }
        return suma;
    };
    MobileLibrary.prototype.PrintLibrary = function () {
        console.log("This is all my mobiles: " + "\n");
        for (var moviles in this.mobiles) {
            this.mobiles[moviles].PrintModifi();
        }
        console.log("Price overall " + this.totalPrice + "\n");
    };
    return MobileLibrary;
}());
exports.MobileLibrary = MobileLibrary;
