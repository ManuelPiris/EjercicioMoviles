 export class Mobile{
    private name:string;
    private model:string;
    private trademark:string;
    private sdSize:string;
    private color:string;
    private is5G:boolean;
    private cameraNumber:number;
    private price:number;

            constructor(name:string,model:string,trademark:string,sdSize:string,color:string,is5G:boolean,cameraNumber:number,price:number){
               this.name = name;
               this.model = model;
               this.trademark = trademark;
               this.sdSize = sdSize;
               this.color = color;
               this.is5G = is5G;
               this.cameraNumber = cameraNumber;
               this.price = price;
            }

            
            public Print(){
               console.log("Nombre:" + (this.name) + "\n" + 
               "Modelo: " + (this.model)+ "\n" + 
               "Marca: " + (this.trademark) + "\n" + 
               "Almacenamiento: " + (this.sdSize) + "\n" + 
               "Color: " + (this.color) + "\n" + 
               "Tiene 5G?: " + (this.is5G) + "\n" + 
               "Número de camaras: " + (this.cameraNumber) + "\n" + 
               "Precio: " + (this.price) + "\n");
            }

            public PrintModifi(){
               console.log("The characteristics of the mobile " + (this.name) + " are: " + "\n" + 
               "Name:" + (this.name) + "\n" +
               "Model: " + (this.model)+ "\n" + 
               "Trademark: " + (this.trademark) + "\n" + 
               "SD Size (GB): " + (this.sdSize) + "\n" + 
               "Color: " + (this.color) + "\n" + 
               "Is 5G?: " + (this.is5G) + "\n" + 
               "Number of Cameras: " + (this.cameraNumber) + "\n");   
           }
            
            public getName():string{
               return this.name;
            }
            
            public setName(name:string){
               this.name = name;
            }

            public getModel():string{
               return this.model;
            }
            
            public setModel(model:string){
               this.model = model;
            }

            public getTrademark():string{
               return this.trademark;
            }
            
            public setTrademark(trademark:string){
               this.trademark = trademark;
            }

            public getsdSize():string{
               return this.sdSize;
            }
            
            public setsdSize(sdSize:string){
               this.sdSize = sdSize;
            }

            public getColor():string{
               return this.color;
            }
            
            public setColor(color:string){
               this.color = color;
            }

            public getCameraNum():number{
               return this.cameraNumber;
            }
            
            public setCameraNum(cameraNumber:number){
               this.cameraNumber = cameraNumber;
            }

            public set5G(is5G:boolean){
            this.is5G = is5G;
            }

            public get5G():boolean{
               return this.is5G;
            }

            public getPrice():number{
               return this.price;
            }
            
            public setPrice(price:number){
               this.price = price;
            }
}