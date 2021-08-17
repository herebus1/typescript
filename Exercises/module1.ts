function addNumbers(x: number, y: number){
    return x + y;
}
console.log(addNumbers(3,6))

//Variable type declarations
let a: number;  //Explicitly declares a as a number type
let b = 1;      //Implicitly declares b as a number type
let c;          // Declares c without initializing it

/* a = 1;
a = 'one';
b = 'one';
c = 1;
c = 'one';

let x: number;
let y = 0;
let z: number = 123.456;
let big: bigint = 100n; */

//Definition and variable management in a declaration of a variable
// let firstName: string = "Jairo";
// let sentence: string = `My name is ${firstName}.
//     I am new to TypeScript.`;
// console.log(sentence);

//enunm type example
enum ContractStatus {
    Permanent = 1,
    Temp,
    Apprentice
}

let employeeStatus: ContractStatus = ContractStatus.Temp;
console.log(employeeStatus);
console.log(ContractStatus[employeeStatus]);

//any type example
let randomValue: any = 10;
randomValue = true;      // OK
randomValue = 'Mateo';   // OK

//performs the necessary check to determine if randomvalue is a string and then use type assertion
if (typeof randomValue === "string") {
    console.log((randomValue as string).toUpperCase());    //* Returns MATEO to the console.
} else {
    console.log("Error - A string was expected here.");    //* Returns an error message.
}

//console.log(randomValue.name);  // Logs "undefined" to the console
//randomValue();                  // Returns "randomValue is not a function" error
//randomValue.toUpperCase();      // Returns "randomValue is not a function" error

//unknown type example
/* let randomValue2: unknown = 10;
randomValue2 = true;      // OK
randomValue2 = 'Mateo again';   // OK

console.log(randomValue2.name);  // Error: Object is of type unknown
randomValue2();                  // Error: Object is of type unknown
randomValue2.toUpperCase();      // Error: Object is of type unknown */