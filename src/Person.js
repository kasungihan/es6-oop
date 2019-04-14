"use strict" //some new syntex not functing without this that was js developers not remove old syntex
// class

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.active = true;
    }
    getMsg() {
        console.log(`who is ${this.name}`)
    }
    getDetail(){
        return `I am a ${this.name}, I am ${this.age} old and I am ${this.active ? 'with' : 'without'} you`
    }
    setActive(result = true){
        this.active = result;
    }
    //Polymorphism
    speak() {
        return `he is a ${this.name}`
    }
}

export default Person;
/* ========================

const p1 = new Person('kasun', 23);
const p2 = new Person('gihan', 24);
p2.setActive(false)
console.log(p2.getDetail())
p1.getMsg()

==========================*/
