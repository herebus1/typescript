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
}

let iceCream: Icecream = {
    flavor: 'vanilla',
    scoops: 2
 }
 
 console.log(iceCream.flavor);