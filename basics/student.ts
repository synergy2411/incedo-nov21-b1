export class Student{
    private firstName : string;
    private lastName : string;
    constructor(firstName : string, lastName : string){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    sayHello(): string{
        return `Hello from ${this.firstName}, ${this.lastName}!!`
    }
}

export const LUCKY_NUMBER = Math.round(Math.random() * 100)
