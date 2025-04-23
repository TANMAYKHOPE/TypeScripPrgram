//group of character s="Tanmay"  s="123456"
let str9:string='this is a string ';
let str8:string="this is string with  double  quote";
let str6:string=`this is string  with  back tick`;

console.log(str9);
console.log(str8);
console.log(str6);

//when to used back tick ``  operator
 let num:Number=12;
  console.log("Number is :",num);
  //print  numer inside the  double  quations
  console.log("Number is :${num}");//invalid
console.log(`Number is :${num}`);//valid 
//String  methode  demo
 
let str:string="Hello , typescript";

//str.lengt -- lenghth methode
//str.uppercase and lowercase methode
//charAt  and indexof string methode
 console.log(str.length);
 console.log("upper ccase conversion",str.toUpperCase());
 console.log("Lower case conversion",str.toLowerCase());

 console.log("character at indext  4:-",str.charAt(4));
 console.log("Index of type",str.indexOf("Type"));

 //substring methode  :- extrac someportion of the string  form string

 let str2:string="Tanmay khope";

 console.log("Substring of str2:-",str2.substring(2,9));

 //includes--its check the part of string  and provide output in  true/fasle  that is  boolean format

 console.log(str2.includes("kho"));

 //startswith and endswith

 console.log(str2.startsWith("Ta"));
 console.log(str2.endsWith("ope"));

 //replace

 console.log(str2.replace("Tanmay", "TanmaySDET"));

 //split()  break the string into  multiple  part and  return the array --array can hold  multiple value
//Example  1:-
 let word:string[]=str2.split(" ");
 console.log("After using split methode we split the string and  return the array",word);

//example  2:-

let  mystring:string="tanmay123@gmail.com , Pass@word101";

let arr:string[]=mystring.split(",");
console.log(arr);
console.log("Email:-",arr[0]);
console.log("Password:-", arr[1]);

//trim() trimstart() trimend()
 mystring = "    Tanmay  khope SDETEnginner   abc  ";
 console.log("Orginal string:-",mystring);
 console.log("trim string:-",mystring.trim());
 console.log("trim start :-",mystring.trimStart());
 console.log("trim end :-",mystring.trimEnd());

 //concat join to string 

 let str4:string="Tanmay";
 let str5:string="Khope";

 console.log("Concatination of  two strings");
 console.log(str4.concat(str5));

 console.log(str4+str5);//not  recomoned + perform addtion that is arithmatic  operations 

 //string  immutable  concept:-

 let Tan:string="welcome to pune";
 let Modifystring:string=str.concat("IT park");
 console.log(Tan);//welcome to pune--immutbale --can not change  orginal value
 


 