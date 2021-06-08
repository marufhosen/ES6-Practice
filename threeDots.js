const ages = [11,43,65,34,53,24];
const ages2 = [15,16,17,12,18];

//const allAges = ages.concat(ages2); //marge multiple array (Old Version)

const allAges = [...ages, ...ages2];  //Marge Two array

const maximumAge = Math.max(...allAges); 
console.log(allAges);
console.log(maximumAge);
