"use strict"
//inheritance
import Person from "./Person.js"
import { firstWord, endWord } from './module.js';

// Don't use private like variable name because is a reserved word
const secret = new WeakMap();

class Employee extends Person {
    constructor(name, age, phone, nic) {
        super(name, age)
        /*In JavaScript we don’t have the private keyword like Java and C# have,
         something important is that in JavaScript we have a convention to use for ‘private’ values */
        this._phone = phone;
        //console.log(nic)
        secret.set(this, { _nicnumber: nic });
        this.value = 0;
    }
    static whatIs() {
        return `${firstWord('hi')} A dog is a beatiful animal ${endWord()}`;
    }
    //Getters and Setters
    get nicNumber() {
        return secret.get(this)._nicnumber;
    }
    set nicNumber(newNumber) {
        secret.get(this)._nicnumber = newNumber;
    }
    //Polymorphism
    speak() {
        return `he is a ${this.name} and age of ${this.age}`
    }
    get val() {
        return this.value;
    }
    //spread operator
    sum(...args){
        this.value = args.reduce((sum, current) => sum + current, 0);
        return this;
    }
    add(newvalue){
        this.value = this.value + newvalue;
        return this;
    }
    subtract(newvalue){
        this.value = this.value - newvalue;
        return this;
    }
    average(...args){
        this.value = args.length
        ? (this.sum(...args).value) / args.length
        : undefined;
      return this;
    }
}
//instance agument can not use without cotation mark integer ex: new Employee('jone', 075717416)
const e1 = new Employee('jone', '13', '075717416', '45464');

// So, with static we can access to methods without the need to instantiate a new object of the class.
console.log( Employee.whatIs() );

// But 'phone' is not a private propertie because we can do this:
console.log(e1._phone);

// Now the idnumber is a private propertie.
console.log(e1._nic); // Print's undefined

e1.getMsg()
console.log( e1.getDetail() );

// Now we can access to the nic by using the getter: 
console.log(e1.nicNumber); // Print's the number
// Set a new number
e1.nicNumber = 432232323;
console.log(e1.nicNumber); // We get the new number

//Polymorphism
console.log( e1.speak() );

//method chainning
let result = e1.sum(1, 3, 6)   // => { value: 10 } 
  .subtract(3)   // => { value: 7 }
  .add(4)        // => { value: 11 }
  .val        // => 11 
//console.log(e1.value)
console.log(result)