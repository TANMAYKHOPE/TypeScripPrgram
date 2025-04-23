//Different way to create objects
//Object type
//inline  Object
//using types aliases
//Using classes

//using  Object creation  using  objects

/*let Employee:object=
{
    name:"Tanmay",
    age:32,
    salary:800000,
    Job:"QualityAnalysit"
};*/

//creating methode inside  object

let Employee =
{
    name:"Tanmay",
    age:32,
    salary:800000,
    Job:"QualityAnalysit",
    getDetails:function(){
   //console.log(this.name, this.age,this.salary, this.Job);
   return `${this.name} is a ${this.Job} earning ${this.salary}`;

    }
};

console.log(typeof Employee); 

console.log(Employee.name, Employee.salary,Employee.Job);

console.log(Employee.getDetails());


//
// ==========================================================

