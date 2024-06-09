let arr = [[{a: {price: 20}}], [{a: {price: 35}}], [{a: {price: 44}}]];
let total = 0;

for (let i = 0; i < arr.length; i++) {
    total += arr[i][0].a.price;
}

console.log(total); 
