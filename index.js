function introduction(name){

    return `Hi My name is ${name}`;
}

console.log(introduction(nour));

function logTwoValues(value1,value2){
    console.log(`the two values are ${value1} and ${value2}`);
}


function introductionWithLanguage(name , language){

    return `Hi , my name is ${name} and I'm learning two program in laguage ${language}`;

}


function sayHelloTo(firstName = "User") {
    console.log(`Hello, ${firstName}!`);
  }