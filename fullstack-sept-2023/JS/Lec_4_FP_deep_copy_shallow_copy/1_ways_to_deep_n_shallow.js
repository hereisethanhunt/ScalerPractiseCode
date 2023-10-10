
// Shallow copy: means that only the first level of the object is copied. Deeper levels are referenced.
// Deep copy: means that all levels of the object are copied. This is a true copy of the object.


// let arr1 = [1,2,3,4,[3,4,5],5];
// arr2 = [...arr1];
// this is a shallow copy


/*****
 * shallow copy: shallow copy of an object/Array is a copy whose properties share the same references
 * (point to the same underlying values) as those of the source object from which copied
 * object is formed
 * shallow copy :
 *  value -> values will be copied and they have diff mem
 * references -> new references will be created but the values inside the reference will be pointing towards same location
 * */

/**spread*/

// let arr = [1, 2, 3, 4, [10, 12], 5, 6];
// let spreadArray = [...arr];
// spreadArray[2] = 100;
// // spreadArray[4] = 200;
// spreadArray[4][1] = 300;
// console.log("outputs ", spreadArray, arr);


/**Object.assign**/

// let person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     address: {
//         street: 'North 1st street',
//         city: 'San Jose',
//         state: 'CA',
//         country: 'USA'
//     },
// };


// let copiedObject = Object.assign({}, person);
// copiedObject.lastName = "Odinson";
// copiedObject.address.street = "south 1st street";
// console.log("person", person);
// console.log("copiedObject", copiedObject);
//let copiedObject = { ...person };


/**
 * Deep Copy : JSON.stringify and JSON.parse
 *
 * */

// let person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     address: {
//         street: 'North 1st street',
//         city: 'San Jose',
//         state: 'CA',
//         country: 'USA'
//     },
// };
// convert obj to string 
// let stringSyntaxOfobject = JSON.stringify(person);
// console.log(typeof stringSyntaxOfobject,stringSyntaxOfobject)
// /**deep copy -> object like string*/
// let deepClonedObj = JSON.parse(stringSyntaxOfobject);


// deepClonedObj.lastName = "Odinson";
// deepClonedObj.address.street = "south 1st street";
// console.log("person", person);
// console.log("copiedObject", deepClonedObj);


// let arr = [1, 2, 3, 4, [10, 12], 5, 6];
// let stringArr = JSON.stringify(arr);
// const deepArr = JSON.parse(stringArr);
// deepArr[2] = 100;
// deepArr[4][1] = 300;
// console.log("outputs ", deepArr, arr);


//  JSON.stringify -> deep copy
//  JSON.parse -> 
//  BottleNeck -> you write your own deep clone 












