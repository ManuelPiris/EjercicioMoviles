"use strict";
exports.__esModule = true;
exports.Mobile = void 0;
var Mobile = /** @class */ (function () {
    function Mobile(name, model, trademark, sdSize, color, is5G, cameraNumber, price) {
        this.name = name;
        this.model = model;
        this.trademark = trademark;
        this.sdSize = sdSize;
        this.color = color;
        this.is5G = is5G;
        this.cameraNumber = cameraNumber;
        this.price = price;
    }
    Mobile.prototype.Print = function () {
        console.log("Nombre:" + (this.name) + "\n" +
            "Modelo: " + (this.model) + "\n" +
            "Marca: " + (this.trademark) + "\n" +
            "Almacenamiento: " + (this.sdSize) + "\n" +
            "Color: " + (this.color) + "\n" +
            "Tiene 5G?: " + (this.is5G) + "\n" +
            "Número de camaras: " + (this.cameraNumber) + "\n" +
            "Precio: " + (this.price) + "\n");
    };
    Mobile.prototype.PrintModifi = function () {
        console.log("The characteristics of the mobile " + (this.name) + " are: " + "\n" +
            "Name:" + (this.name) + "\n" +
            "Model: " + (this.model) + "\n" +
            "Trademark: " + (this.trademark) + "\n" +
            "SD Size (GB): " + (this.sdSize) + "\n" +
            "Color: " + (this.color) + "\n" +
            "Is 5G?: " + (this.is5G) + "\n" +
            "Number of Cameras: " + (this.cameraNumber) + "\n");
    };
    Mobile.prototype.getName = function () {
        return this.name;
    };
    Mobile.prototype.setName = function (name) {
        this.name = name;
    };
    Mobile.prototype.getModel = function () {
        return this.model;
    };
    Mobile.prototype.setModel = function (model) {
        this.model = model;
    };
    Mobile.prototype.getTrademark = function () {
        return this.trademark;
    };
    Mobile.prototype.setTrademark = function (trademark) {
        this.trademark = trademark;
    };
    Mobile.prototype.getsdSize = function () {
        return this.sdSize;
    };
    Mobile.prototype.setsdSize = function (sdSize) {
        this.sdSize = sdSize;
    };
    Mobile.prototype.getColor = function () {
        return this.color;
    };
    Mobile.prototype.setColor = function (color) {
        this.color = color;
    };
    Mobile.prototype.getCameraNum = function () {
        return this.cameraNumber;
    };
    Mobile.prototype.setCameraNum = function (cameraNumber) {
        this.cameraNumber = cameraNumber;
    };
    Mobile.prototype.set5G = function (is5G) {
        this.is5G = is5G;
    };
    Mobile.prototype.get5G = function () {
        return this.is5G;
    };
    Mobile.prototype.getPrice = function () {
        return this.price;
    };
    Mobile.prototype.setPrice = function (price) {
        this.price = price;
    };
    return Mobile;
}());
exports.Mobile = Mobile;
