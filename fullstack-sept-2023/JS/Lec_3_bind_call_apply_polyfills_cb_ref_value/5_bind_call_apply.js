const parent = {
    health : 50,
    abcd: 'ds',
    addHealth(n1,n2) {
        // console.log(this);
        this.health += n1 + n2;
    }
}

// method borrowing
const child = {
    health : 70,
    tests: 4
}


//parent.addHealth(10,20);
//console.log(parent);
//parent.addHealth.call(child,20,30); // params separated by commas
//parent.addHealth.apply(child,[20,30]);// array as 2nd param
//console.log(child);


// const logthis = () => {console.log(this)}
// const myobj = {
//     name: 'vishal'
// }
// logthis.call(myobj);












let cap = {
    name: "Steve",
    team: "Cap",
    petersTeam: function (mem1, mem2, ...otherMem) {
        console.log(`Hey ${this.name} I am your neighborhood's  
        spiderman and i belong to ${this.team}'s team`);

        console.log(`I am working with ${mem1} & ${mem2} with ${otherMem}`);

    }
}
let ironMan = {
    name: "Tony",
    team: "Iron Man"
}

//cap.petersTeam("black panther", "Winter soldier");

// borrow a fn from another obj another object 
// used to call it 
//cap.petersTeam.call(ironMan,"Natsha","WarMachine");

// apply -> borrow for n number of paramters
// cap.petersTeam.apply(ironMan, ["Natsha", "WarMachine", "doctor strange", "loki", "thor"]);





// bind -> copies function that you can call later with the same this

// const importantfn = cap.petersTeam;
// importantfn();

//let ironManStolenMem = cap.petersTeam.bind(ironMan);












// ironManStolenMem("Natsha", "WarMachine", "doctor strange");
// console.log('-------------------------')
// ironManStolenMem("loki", "thor")











const intro = function(...args) {
    console.log(args,"arguments");
    console.log(`${this.name} lives in ${args[0]} live in city ${args[1]} state ${args[2]} country ${args[3]} planet ${args[4]}`)
}


const obj = {
    name : 'vishal',
}

// normal bind
//intro.call(obj,"lucknow", "uttar pradesh", "india",'earth');
//const giveIntro = intro.bind(obj,"lucknow", "uttar pradesh");
//giveIntro();




const person = {name : 'varun'};
function sayHi(age) {
    return `${this.name} is ${age} years old`;
}

//console.log(sayHi.call(person, 24));
//let fn = sayHi.bind(person, 24);
//console.log(typeof fn);
//console.log(fn());
// console.log(sayHi.bind(person, 24)());
















// var status = "online";
//  setTimeout(()=>{

//     const status = 'offline';

//     const data = {
//         status : 'working',
//         getStatus() {
//             return this.status
//         }
//     };
//     console.log(this);
//     console.log(data.getStatus()); //
//     console.log(data.getStatus.call(this)); //
//  },1000); 



 var status = "online";
 const objectstatus = {
    status: 'offline',
    data: {
        status : 'working',
        getStatus() {
            return this.status
        }
    },
    fncall : function() {
        console.log(objectstatus.data.getStatus.call(this));
    }
 }

 console.log(objectstatus.data.getStatus());
 console.log(objectstatus.fncall());