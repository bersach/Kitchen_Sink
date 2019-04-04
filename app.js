let fullName = 'Manuel Bersach';
//Assigning a string value to variable
const fiftyStates = 50;
//Assigning a numerical value that is constant
let fivePlusFour = 5 + 4;
// assigning the sum of 5 + 4 to the variable 'fivePlusFour'

function sayHello () {
    alert('Hello World');
    // console.log('Hello World') < used to test function//
}

sayHello ()
//calls the function without any arguments//

function checkAge (name, age){
    if (age < 21){
        alert (messageNo (name));
    } else {
        alert (messageYes(name));
    }
}
// this is the fucntion that will check the age of the people//


function messageNo (name){
    let sor='Sorry ';
    let rest= ', you are not old enough to view this site!';
    return sor + name + rest;
}
// This function writes the rejection message for those under 21//

function messageYes (name){
    let mess1= 'Thank you ';
    let mess2= '. Hope you enjoy your day!'
    return mess1 + name + mess2;
}
//This writes the message for people over 21//

let people = ['Charles','Abby', 'James', 'John'];

let ages = [21, 27, 18, 17];

//console.log(people);

//console.log(ages);

let i=0;

while(i<=3){
    checkAge (people[i],ages[i]);
    i++;
};

let veggies = ['potato', 'garlic', 'celery', 'mint', 'carrot'];

let n=0;

while(n<=4){
    console.log(veggies[n]);
    n++;
};

let person1 ={
    name: 'Maria',
    age: 15
};

let person2 ={
    name: 'Chad',
    age: 17
};

let person3 ={
    name: 'Kenny',
    age: 75
};

let person4 ={
    name: 'Aman',
    age: 32
};

let person5 ={
    name: 'Randy',
    age: 12
};

let group =[person1, person2, person3, person4, person5];

let z=0;

while(z<=4){
    checkAge(group[z].name, group[z].age);
    z++;
};

function getLength(string){
    return string.length;
}

let val = getLength('Hello World');
let value = val%2;
if(value == 0){
    console.log('The world is nice and even!')
}else{
    console.log('The world is an odd place.')
}