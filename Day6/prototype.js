function Animal(owner)
{
    this.owner= owner;
}

function Dog(name, color)
{
    this.name= name;
    this.color= color;
}

let a= new Animal("foo");

Dog.prototype= a;
let b= new Dog("koo", "black");
//b.__proto__ = a;



console.log(b.owner);

