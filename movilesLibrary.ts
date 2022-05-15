import { Mobile } from "./moviles";

export class MobileLibrary{
    private name: string;
    private location:string;
    private mobiles:Mobile[];
    private totalPrice:number;

    constructor(name:string,location:string,mobiles:Mobile[]){
        this.name = name;
        this.location = location;
        this.mobiles = mobiles;
        this.totalPrice = this.TotalPriceCalculation();
    }
        public GetName():string{
            return this.name;
        }
    
        public SetName(value:string){
            this.name=value;
        }
    
        public GetLocation():string{
            return this.location;
        }
    
        public SetLocation(location:string){
            this.location=location;
        }
    
        public GetMobiles():Mobile[]{
            return this.mobiles;
        }
    
        public SetMobiles(mobiles:Mobile[]){
            this.mobiles = mobiles;
        }

        public GetTotalPrice():number{
            return this.totalPrice;
        }
    
        public SetTotalPrice(totalPrice: number){
            this.totalPrice=totalPrice;
        } 

        public TotalPriceCalculation():number{
            let suma:number = 0;
            for(let moviles in this.mobiles){
                suma += this.mobiles[moviles].getPrice();
            }
            return suma;
        }

        private PrintLibrary(){
            console.log("This is all my mobiles: " + "\n");
            for(let moviles in this.mobiles){
                this.mobiles[moviles].PrintModifi();
            }
            console.log("Price overall " + this.totalPrice + "\n");
        }
}