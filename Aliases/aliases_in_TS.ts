
//Type Aliases or 
// type inference 
// Define Types like a variable and reuse it again and again 


// Defining Type like a variable :-
type myType=string | number | boolean;

let a:myType= "munmun";
let b:myType=11;
let c:myType=true;

console.log(a,b,c);

// Defining type as a object ans using in function :-
type User={
    name:string;
    email:string;
    isActive:boolean
}
// type Mystring=string;

 function createUser(user:User):User{
    return {name:"bst",email:"b@g.com ",isActive:true}
 }

 createUser({name:"bst",email:"b@g.com ",isActive:true})




 //note :- we can not extend any type like interface because (type) is fixed

 type fruit={
    name:string;
    price:number;
 }
 // we can extend one type to another using &

 type mango = fruit & {
color:string;
 }

 let show_fruit_details:mango={
    name:'banana',
    price:30,
    color:"yellow"
 }
 console.log(show_fruit_details);
 
export{}