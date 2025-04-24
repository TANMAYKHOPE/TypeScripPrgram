
//parent class
class car
{
name:string;
colour:string;
Model:String

constructor(name:string , colour:string,Model:string)

{
this.name=name;
this.colour=colour;
this.Model=Model;


}

start()
{

    console.log("Car Started");
}

Stop()
{

    console.log("Car Stoped");
}

displayinfomation()
{
    console.log(`Name:${this.name}, Colour:${this.colour}, Model:${this.Model}`);
}

}


//child class
class Honda extends car
{
Year:number;
constructor(name:string,colour:string,Model:string,year:number)
{
super(name,colour,Model);
this.Year=year;

}

//Overrding  concept--start methode
start()
{
console.log("Honda stated");

}
yom()
{
    console.log(`yom ${this.Year} Name:${this.name}, Colour:${this.colour}, Model:${this.Model}`);
}

}


class Maruti extends car
{

    Year:number;
constructor(name:string,colour:string,Model:string,year:number)
{
super(name,colour,Model);
this.Year=year;

}

//Overrding  concept--start methode
start()
{
console.log("Maru  stated");

}
yom()
{
    console.log(`yom ${this.Year} Name:${this.name}, Colour:${this.colour}, Model:${this.Model}`);

}

}

//usage
console.log("===============")
let honda=new Honda("Honda", "Red","Honda City",2024);
console.log(honda.name);
console.log(honda.colour);
console.log(honda.Model);
console.log(honda.Year);
honda.displayinfomation();
honda.Stop();
honda.yom();


//create Maruti  object
console.log("===============")
let maru=new Maruti("Maruti", "Blue","Suzuki", 2024);
maru.start();
maru.displayinfomation();
maru.Stop();

//parent class  variable holding child class  object
console.log("===============")
let Car:car=new Honda("Honda", "Red","Honda City",2024);
Car.displayinfomation();
Car.start();
