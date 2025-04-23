/*
Array is special type of variable which store multiple  value
the  value can be of same data type or different data type
*/
//approch  1:-  using  leteral
let names:string[]=[]; //declearations
//initialization or  assign value
names[0]="Tanmay";
names[1]="Sujay";
names[2]="Karthkik";
names[3]="salt";

//Approch 2

let names1:string[]=["Tanmay","Sujay","karthki","salt"];

console.log(names1);

//Approch  3:- generics concept Array<T>Type


let EmployeeName:Array<string>=["Tanmay","Sujay","karthki","salt"];

console.log("Employee name is:-",EmployeeName);

let EmployeeID:Array<number>=[100,101,102,103,104,105];

console.log("Employee id is:-",EmployeeID);

let data:Array<string | number>=["Tanmay", 100,"Sujay",101,"KK",103,"Salt", 104];

console.log(data);

let mixdata:Array<any>=["Tanmay", 100,true, null,"Sujay",101,true, null,"KK",103,true, null,"Salt", 104,    true, null];

console.log(mixdata);


//for  loop
console.log("Employee Name using  for  loop");

for(let i=0;i<EmployeeName.length; i++)
{
console.log(EmployeeName[i]);
}

//for  in  loop and   for  out  loop

//for  in  loop concept

console.log("Employee iD using  for  in loop");

for (let i in EmployeeID)
{
console.log(EmployeeID[i]);

}

//for...of  loop concept

console.log("Mixed array  test")

for(let value of mixdata)
{
console.log(value);

}


//Passing array to the  functions
//Search an element in array using  functions

function SearchNewArray(ele:number, arr:number[]):boolean
{
for(let  i=0;i<arr.length; i++)
{
if(arr[i]==ele)
    {
        return true;

    }

}
return false;

}

let arr:number[]=[10,20,30,40,45,50];

console.log(SearchNewArray(145,arr));



//how the function return array

function uppcaseword(arr:string[]):string[]
{
let  result:string[]=[];
for(let i=0;i<arr.length;i++)
{
 result[i]= arr[i].toUpperCase();

}

return result;
}

let words:string[]=["abc", "pqa","zyd"];

console.log(uppcaseword(words));
