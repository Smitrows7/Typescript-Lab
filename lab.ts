interface Mountain {
name: string;
height: number;
}

interface Product{
  name: string;
  price: number;

}

interface InventoryItem{
  name: string;
  price: number;
  quantity:number;
}

var products: Product[] =[
 {name:'Motor', price: 10.50},
 {name:'Sensor', price: 30.00},
 {name:'LED', price: 5.00}
];

var mountains: Mountain[] =[
  {name:'Kilimanjaro', height: 19431},
  {name:'Everest', height: 29029},
  {name:'Denali', height: 20310}
 ];

 var inventory: InventoryItem[] =[
  {name:'motor', price: 10.00,quantity:10},
  {name:'sensor', price: 12.50,quantity:4},
  {name:'LED', price: 1.00,quantity:20} 
 ];

function findNameOfTallestMountain(mountain:Mountain[]):string
{
  let highMountainHeight:number = 0;
  let highMountainName:string = '';

 if (mountain != undefined)
 {
  for(let i=0; i < mountain.length; i++){
   let temp = mountain[i];
    if (highMountainHeight === 0 || highMountainHeight < mountain[i].height){
      highMountainHeight = mountain[i].height;
      highMountainName = mountain[i].name;
    }
   } 
 }
  return highMountainName;

}

const highestMountain:string = findNameOfTallestMountain(mountains);
console.log("Highest Mountain :",highestMountain ); 


function calcAverageProductPrice(prod:Product[]):number
{
  let averagePrice:number = 0;
  let totalPrice:number = 0;

 if (prod != undefined)
 {
  for(let i=0; i < prod.length; i++){
   let tempProd = prod[i];
   totalPrice += prod[i].price;
    }
    averagePrice = totalPrice/prod.length;
  }
  return averagePrice;
}
const avgProdPrice:number = calcAverageProductPrice(products);
console.log("Average Product Price :",avgProdPrice); 

function calcInventoryValue(inventoryProd:InventoryItem[]):number
{
  let inventoryPrice:number = 0;

 if (inventoryProd != undefined)
 {
  for(let i=0; i < inventoryProd.length; i++){
   let tempInventory = inventoryProd[i];
   inventoryPrice += inventoryProd[i].price * inventoryProd[i].quantity;
    }
  }
  return inventoryPrice;
}
const totalInventoryPrice:number = calcInventoryValue(inventory);
console.log("Total Inventory Price :",totalInventoryPrice); 