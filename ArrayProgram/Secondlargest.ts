function findsecondlargestelement(nums: number[]):number | null{
if(nums.length < 2) return null;

let  firsttnumber = -Infinity;
let SecondNumber= -Infinity;

for(let num of  nums)
{
if(num> firsttnumber)
{
    SecondNumber=firsttnumber;
    firsttnumber=num;
}

else if (num > SecondNumber && num< firsttnumber)
{
    SecondNumber=num;
}

}
return SecondNumber === -Infinity ? null : SecondNumber;
}

const testArray = [10, 5, 8, 20, 7, 15];
const result=findsecondlargestelement(testArray);

if(result  !==null)
{
console.log(`The second largest element is :- ${result}`);

}
