abstract class Person{
 name:string;

 constructor(myname:string){
    this.name=myname
 }

 display():string{
    return 'Hello....'
 }

 abstract find(name:string):any;  // must include 
}

class Student extends Person{
    stuId:number

    constructor(myname:string,Id:number){
   super(myname)
   this.stuId=Id
    }

    find(name: string) {
        return `Your name is ${name}`
    }
}

let myData=new Student("Bhagyashri",12345678);
console.log(myData);
console.log(myData.name);
console.log(myData.find('Rupa'));
console.log(myData.display());



