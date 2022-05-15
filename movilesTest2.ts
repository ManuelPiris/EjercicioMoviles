import {Mobile} from "./moviles";

let movil1 = new Mobile("Nokia", "3210", "Nokia", "128mb", "Negro", false, 1, 150);
let movil2 = new Mobile("Iphone3G", "3G", "Apple", "8gb", "Negro", false, 1, 350);
let movil3 = new Mobile("Samsung Galaxy 10", "Galaxy 10", "Samsung", "128gb", "Azul", true, 3, 800);


movil1.PrintModifi();
movil2.PrintModifi();
movil3.PrintModifi();

movil1.setCameraNum(4);
movil1.set5G(true);
movil1.PrintModifi();

let array:Mobile[]= [movil1,movil2,movil3];
console.log(array);




