function sumArray(numbers: number[]): number {
    let total = 0;
    for (let num of numbers) {
        total += num;
    }
    return total;


}


const numberss = [20, 30, 40, 50, 60];

console.log(`The array is : [${numberss}]`);

console.log(`The Sum of Array is:${sumArray(numberss)}`);
