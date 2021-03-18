function product(title,price)
{
    this.title=title;
    this.price=price;

}
product.prototype.owner ="foo";
product.prototype.displayproduct =function()
{
    console.log(this);
}
let p1 =new product("p1",900);
let p2 =new product("p2",700);
p1.displayproduct =function(){
    console.log(this);
    console.log(this.owner);
}
p1.displayproduct();
p2.displayproduct();
p1.displayproduct.call(p2);
