"use strict";
exports.__esModule = true;
var moviles_1 = require("./moviles");
var movilesLibrary_1 = require("./movilesLibrary");
var movil1 = new moviles_1.Mobile("Samsung Galaxy 21", "21", "Samsung", "128gb", "Azul", true, 5, 999);
var movil2 = new moviles_1.Mobile("Iphone6S", "6S", "Apple", "6gb", "Blanco", false, 1, 340);
var movil3 = new moviles_1.Mobile("Mi Note 10T", "10T", "Xiaomi", "256gb", "Rosa", true, 3, 399);
var movil4 = new moviles_1.Mobile("Sony Xperia Z", "Xperia Z", "Sony", "64gb", "Negro", false, 2, 400);
var arrayMoviles = [movil1, movil2, movil3, movil4];
var library2 = new movilesLibrary_1.MobileLibrary("", "", arrayMoviles);
console.log(library2.TotalPriceCalculation());
library2.PrintLibrary();
var movil5 = new moviles_1.Mobile("Nokia", "3210", "Nokia", "128mb", "Negro", false, 1, 50);
var movil6 = new moviles_1.Mobile("Xiamo 10", "10", "Xiaomi", "64gb", "Negro", true, 3, 458);
var arrayMoviles2 = [movil5, movil6];
var library = new movilesLibrary_1.MobileLibrary("", "", arrayMoviles2);
library.PrintLibrary();
