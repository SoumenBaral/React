const Nano = {
    name : 'Shakib khan',
    position : "Actor",
    age:44,
    movie:['king khan', "janoar"]
}

const NanoJson = JSON.stringify(Nano);

console.log(NanoJson);
console.log(Nano);
console.log("---------------------------Convert------------------------");
const NanoPase = JSON.parse(NanoJson);
console.log(NanoPase);

const keys = Object.keys(Nano);
console.log(keys);
const value  = Object.values(Nano);
console.log(value);

for (const key in Nano) {
   console.log(Nano[key]);
}

const Product = [
    {name: "phone",price: 240000, brand:"vivo",color:"Black"},
    {name: "Laptop",price: 4000000, brand:"Hp",color:"Silver"},
    {name: "Spiker",price: 40000, brand:"Sone",color:"Black and Blue"},
    {name: "Charger",price: 240, brand:"Active",color:"white"},
    {name: "Painting",price: 299080000, brand:"Shore",color:"Black"},
]

const addProduct = {name: "Cigarette",price: 299, brand:"B&S",color:"golden"}

const TotalProduct = [...Product, addProduct]
console.log(TotalProduct);

const removeCigarette = TotalProduct.filter(p=>p.name!=='Cigarette'&&p.name!=="Charger");
console.log(removeCigarette);