const person = {Name: "Thomas Lemer", Adress: "Madrid", Phone: '+88012324322', friends: ["Cristina Rose", "Tom Cruse", "Miller"]};

const { Phone, Name, friends } = person;         // Array Destructuring
const adress = person.Adress;

console.log(Name, '-' , Phone, friends[0]);

const friends2 = ['Brahim', 'Rodrygo', 'Junior V', 'Victor Chust'];

person.friends.push(...friends2);
console.log(friends);
