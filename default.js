function add(num1, num2 = 20){ //default value set here
    //num2 = num2 || 1591;
    return num1+num2;
}

const total = add(1591, 1);  // if we call function with parameter from here, it fine.
console.log(total);          //Otherwise, num2's value seted in function Perameter.
