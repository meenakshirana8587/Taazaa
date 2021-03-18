"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const product_1 = require("./product");
function getProduct() {
    let p = new product_1.Product();
    p.Id = "1";
    p.Price = 100;
    p.Title = "Cricket Bat";
    p.inStock = true;
    return p;
}
let p = getProduct();
console.log(p);
function print(pt) {
    console.log(pt.x);
    console.log(pt.y);
}
print({ x: 200, y: 300 });
//# sourceMappingURL=app.js.map