//Interface in Inheritance 

interface User{
    readonly dbId:number, // readonly not allow to change
    email:string,
  
}
//Interface Inheritance 
interface Another{
   age:12 | 13 |14
 
}
interface Admin extends User,Another{
 role:"admin"|"ta"| "learner"
}

const abc=<Admin>{
    dbId:123,
    email:"xys@gmain.com",
    age:12
}
console.log(abc);


export{}