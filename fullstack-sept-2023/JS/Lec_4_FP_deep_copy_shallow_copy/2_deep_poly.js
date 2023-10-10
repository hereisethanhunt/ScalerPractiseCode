// This object  -> copy of it 
let person = {
    firstName: 'John',
    lastName: 'Doe',
    address: {
        street: 'North 1st street',
        city: 'San Jose',
        state: 'CA',
        country: 'USA'
    },
    friends: ["Steve", ["Nikola"], "Ray", { name: "Jai", lastName: "Roy" }]
};

function superClone(obj) {
    // create new object
    if(['number','boolean','string'].includes(typeof obj)) {
        return obj;
    }
    if(Array.isArray(obj))
    {
        return obj.map((v) => superClone(v));
    }

    let newobj = {};
    // copy all the keys and values
    for (let key in obj) {
        if(Array.isArray(obj[key]))
        {
            newobj[key] = obj[key].map((v) => superClone(v));
        }
        else if (typeof obj[key] == "object") {
            newobj[key] = superClone(obj[key]);
        } else {
            newobj[key] = obj[key];
        }
    }
    //   return the obj
    return newobj;
}

let deeplyClonedObj = superClone(person);
deeplyClonedObj.lastName = "Odinson";
deeplyClonedObj.address.street = "south 1st street";
deeplyClonedObj.friends.push('Ramesh');
deeplyClonedObj.friends[3].name = "zebra";

deeplyClonedObj.friends[1][0] = "Stevanss"


console.log("person", person);
console.log("copiedObject", deeplyClonedObj);


