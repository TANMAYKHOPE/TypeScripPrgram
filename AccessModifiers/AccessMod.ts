class Person
{
public name:String;
protected age:number;
private ssn:number;

constructor(name:string, age:number, ssn:number)
{
this.name=name;
this.age=age;
this.ssn=ssn;

}

displayinfo()
{
    console.log(this.name);
    console.log(this.age);
    console.log(this.ssn);
}

}

class Child extends Person
{
private EmployeeID:number;

constructor(name:string, age:number, ssn:number,EmployeeID:number)
{
super(name,age,ssn);///public access
this.EmployeeID;
}

ShowEmployeeDetails()
{
console.log(this.name);
console.log(this.age);
//console.log(this.ssn);// private  getting error


}
}

