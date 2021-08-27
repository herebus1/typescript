/*
Intersection type example
*/
interface Employee3 {
    employeeID: number;
    age: number;
  }
  interface Manager {
    stockPlan: boolean;
  }
 /*  type ManagementEmployee = Employee & Manager;
  let newManager: ManagementEmployee = {
      employeeID: 12345,
      age: 34,
      stockPlan: true
  }; */

  //Definition of literal types
    type testResult = "pass" | "fail" | "incomplete";
    let myResult: testResult;
    myResult = "incomplete";    //* Valid
    myResult = "pass";          //* Valid
    //myResult = "failure";       //* Invalid

    //Array use example
    let list: number[] = [1, 2, 3];
    let list2: Array<number> = [1, 2, 3];

    //Tuple example, arrays with more than 2 types in the array
    let person1: [string, number] = ['Marcia', 35];