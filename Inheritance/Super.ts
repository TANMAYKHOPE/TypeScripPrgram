class Parent
{
num:Number=10;

constructor()
{

    console.log(" this is a parent class constuctor");
}

display()
{

    console.log("this is  display methode form parent class");
}

}

class Child  extends Parent
{
num:Number=20;

constructor()
{

    super();
    console.log(" child class constuctor");
}

show()
{

console.log(this.num);
//console.log(super.this);//limitation in  type script  parent  class  numerb  notaccess  , works  in java
console.log("Show methode form child class");

}

display()
{
console.log("child class  display methode");

}
}

let  superdemo= new  Child();

superdemo.show();


let  c1=new  Child();
console.log("===============")
c1.display()
c1.show();
