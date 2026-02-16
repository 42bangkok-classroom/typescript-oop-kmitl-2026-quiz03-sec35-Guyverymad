export class Person {
    firstname?:string
    lastname?:string
    private age? = 0;
    static COUNTRY:string = "thailand"

    constructor(firstname:string,lastname:string){
        if(firstname){
            this.firstname=firstname
        }
        if(lastname){
            this.lastname=lastname
        }
        this.lastname=lastname
    }setAge(age:number){
        this.age = age; 
    }getAge(){
        return this.age; 

    }getFullName(){
        return(`${this.firstname} ${this.lastname}`)

    }
}