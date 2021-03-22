var car = {
    name: "BMW",
    color : "pink",
    price: 2000

}

console.log(Object.keys(car)); //array of property names as string
console.log(Object.values(car)); //array of values of properties
for(let key of Object.keys(car))
{
    console.log(key);// key value pair
}

console.log(Object.entries(car));// 2-D array of key and values
for(let entry of Object.entries(car))
{
    console.log(entry[0] + "=>" + entry[1]);
}



