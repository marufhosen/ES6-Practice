//defauld

function addTwoNumber(num1, num2 =5){
    return num1 + num2;
}

//console.log(addTwoNumber(7,3));

//Template

const firstName = "Niroby";
const lastName = "Tokyo";

const fullName = `${firstName} ${310+110} ${lastName}`
//console.log(fullName);

//ArrowFunction

const doMath = (x,y) => {
    return x+y;
}
//console.log(doMath(4,5));

//ThreeDots

const friendsList = ["Tom", "Denver", "Berlin"];
const friendsList2 = ["Professor", "Oslo", "Mosscow"];

const tootalFriends = [...friendsList , ...friendsList2];

//console.log(tootalFriends);

// JS Class

class School{
    constructor(){
        this.schoolname = "AHMHS Residencial";
    }
}

class Student extends School{
    constructor(name , id){
        super();
        this.name = name;
        this.ID = id;
    }
}

const student1 = new Student("Borrows", 1591);

//console.log(student1);

//Destructure

