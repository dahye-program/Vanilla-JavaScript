//function
function sayHello(name, age){
    console.log(`Hello ${name} you are ${age} years old`);
}

const greetNicolas = sayHello("Nicolas", 14)

console.log(greetNicolas)

//calculator
const calculator = {
    plus: function(a,b){
        return a+b;
    }
}
const plus = calculator(5,5)
console.log(plus)