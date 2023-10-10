// input  -> nested array
let input1 = [1, 2, 3, [4, 5], [6, 7, 8, [9, 10, 11]]];
let input2 = [1, 2, 3, [4, 5], [[6], 7, 8, [9, 10, [11]]]];

// output -> single level of array with num 
//[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

// [4, 5] -> [4,5]
// [6, 7, 8, [9, 10, 11]] -> [6, 7, 8, 9, 10, 11]
                 // [1,2,3,4]
function flatten(srcArr) {
    // complete this fn
    let newArr = [];
    for(let i=0; i<srcArr.length; i++)
    {
        if(Array.isArray(srcArr[i]))
        {
                let insideArr = flatten(srcArr[i]);
                newArr.push(...insideArr);
        }
        else
        {
            newArr.push(srcArr[i]);
        }
    }

    return newArr;
    //console.log(srcArr);
}
let flattenedArr1 = flatten(input1);
let flattenedArr2 = flatten(input2);

console.log(flattenedArr1);
console.log(flattenedArr2);




/**
 * Question  -> Array.protype.flat()  -> flatten fn -> option of levels also
 * */

// let flattenOutput = input.flat();
// console.log(flattenOutput);



/**
 * simple deep clone/copy
 * deep copy /clone with nested objects and array HW
 * flatten an array 
 * Array.prototype.flat() HW
 * flatten an object 
 * */


let person = {
    firstName: 'John',
    lastName: 'Doe',
    address: {
        street: 'North 1st street',
        city: 'San Jose',
        state: 'CA',
        country: 'USA',
        postCodes: {
            firstBlock: 10,
            secondBlock: 12
        }
    }
}


person = {
    firstName: 'John',
    lastName: 'Doe',
    "address.street": 'North 1st street',
    "address.city": 'San Jose',
    "address.state": 'CA',
    "address.country": 'USA',
    "address.postCodes.firstBlock": 10,
    "address.postCodes.secondBlock": 12
}
