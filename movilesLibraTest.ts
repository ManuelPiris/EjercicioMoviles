import { Mobile } from "./moviles";
import {MobileLibrary} from "./movilesLibrary";

let movil1 = new Mobile("Samsung Galaxy 21","21","Samsung","128gb","Azul",true,5, 999);
let movil2 = new Mobile("Iphone6S","6S","Apple","6gb","Blanco",false,1,340);
let movil3 = new Mobile("Mi Note 10T","10T","Xiaomi","256gb","Rosa",true,3, 399);
let movil4 = new Mobile("Sony Xperia Z","Xperia Z","Sony","64gb","Negro",false,2, 400);

let arrayMoviles:Mobile[]= [movil1,movil2,movil3,movil4];
let library2 = new MobileLibrary("","",arrayMoviles);

console.log(library2.TotalPriceCalculation());

library2.PrintLibrary();

let movil5 = new Mobile("Nokia", "3210", "Nokia", "128mb", "Negro", false, 1, 50);
let movil6 = new Mobile("Xiamo 10","10","Xiaomi","64gb","Negro",true,3,458);

let arrayMoviles2:Mobile[] = [movil5,movil6];
let library = new MobileLibrary("","",arrayMoviles2);
library.PrintLibrary();