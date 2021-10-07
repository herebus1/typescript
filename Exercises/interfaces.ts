//Definition of interfaces
//Interface  with 2 properties and a method of an employee object
interface Employee {
    firstName: string;
    lastName: string;
    fullName(): string;
}

//Implementing the interface
let employee: Employee = {
    firstName : "Emil",
    lastName: "Andersson",
    fullName(): string {
        return this.firstName + " " + this.lastName;
    }
}

//employee.firstName = 10;  //* Error - Type 'number' is not assignable to type 'string'

interface Icecream{
    flavor: string;
    scoops: number;
    instructions?: string;
}

let iceCream: Icecream = {
    flavor: 'vanilla',
    scoops: 2
 }
 
 console.log(iceCream.flavor);

 //function that calls the icecream interface as parameter type to check the number of scoops in Icecream
 function tooManyScoops(dessert: Icecream) {
    if (dessert.scoops >= 4) {
       return dessert.scoops + ' is too many scoops!';
    } else {
       return 'Your order will be ready soon!';
    }
 }
 
 console.log(tooManyScoops({flavor: 'vanilla', scoops: 3}));