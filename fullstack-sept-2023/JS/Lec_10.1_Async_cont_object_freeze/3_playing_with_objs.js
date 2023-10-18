// let config = {
//     appName: "scaler.com",
//     database: {
//         host: "127.0.0.1",
//         name: "mainDb",
//         user: "root",
//         pwd: "admin"
//     }
// }

/**
 * mutation/changes we can do on object ->
 * **/

/** reassign */
// config=10;
// console.log(config);

/** create a prop */
// config.tempServer = "127.0.0.18";
// console.log(config)

/** delete prop and update prop */
// delete config.database.pwd;
// config.appName = "interviewbit.com";
// console.log(config);


/*************Reassignment -> const variable****/
/***const -> only the address of object is freezed but not it's properties**/
// const config = {
//     appName: "scaler.com",
//     database: {
//         host: "127.0.0.1",
//         name: "mainDb",
//         user: "root",
//         pwd: "admin"
//     }
// }

// can i update, delete and add property with const ?
// config = 10;
// console.log(config);

// config.tempServer = "127.0.0.18"; // adding prop
// delete config.database.pwd; // deleting prop
// config.appName = "interviewbit.com"; // updating prop
// console.log(config);


/***************************
 * new property should not be added on the first level.
 * update and delete can happen normally.
 * new property can be added from second levels
 ***************************/
// const config = {
//     appName: "scaler.com",
//     database: {
//         host: "127.0.0.1",
//         name: "mainDb",
//         user: "root",
//         pwd: "admin"
//     },
//     extra: 10
// }

// Object.preventExtensions(config);
// Object.preventExtensions(config.database);
// // notExtendableObj.database = Object.preventExtensions(notExtendableObj.database);
// config.tempServer = "127.0.0.18";
// config.database.newpwd = "fake";
// config.appName = "interviewbit.com";
// delete config.extra;
// console.log(config);




/*******
 * Object.seal -> update but not delete / add 
 * 
 * **/
// const config = {
//     appName: "scaler.com",
//     database: {
//         host: "127.0.0.1",
//         name: "mainDb",
//         user: "root",
//         pwd: "admin"
//     },
//     extra: 10
// }

// Object.seal(config);
// Object.seal(config.database);
// config.tempServer = "127.0.0.18";
// config.database.newpwd = "fake";
// delete config.extra;
// delete config.database.pwd;
// config.appName = "interviewbit.com";
// console.log(config);


/*******
 * Object.freeze -> you cannot update / delete / add 
 * 
 * **/


// const config = {
//     appName: "scaler.com",
//     database: {
//         host: "127.0.0.1",
//         name: "mainDb",
//         user: "root",
//         pwd: "admin"
//     },
//     extra: 10
// }
// Object.freeze(config);
// Object.freeze(config.database);
// config.tempServer = "127.0.0.18";
// config.database.newpwd = "fake";
// delete config.extra;
// config.appName = "interviewbit.com";
// console.log(config);


// HW : n-level : freeze, seal and preventExtension


/**
 * mutation/changes we can do on object ->
 * 1. reassign -> const,
 * 2. prevent create a prop -> object.preventExtension
 * 4. prevent remove and create -> Object.seal
 * 3. prevent create , update , delete -> Object.freeze
 * 
 * all of this happen only on first level
 * **/
