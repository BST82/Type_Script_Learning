// objects in TS

// old method of making objects :- 
const User={
    name:"Bst",
    id:21,
    isActivs:true
 }



 /*-------------------------------------------- */


 // creating object inside function
 function createUser({name:string,isPaid:boolean}/* here object pass as parameter*/){

 }
//  createUser({name:"munmun",isPaid:true, email:"bst@gamil.com"})    // it will given error you can't pass extra parameter which not defind in function 

// but you can use it :-
let takeuser ={name:"ram",id:33,email:"ram@gmail.com"}

// not given error 
// createUser(takeuser)




  /*------------------------------------------ */



function createcourse( /* function parameter*/ ):{  name:string,price:number /*this is return type and return type is object */}
{
 /*function definition*/

    return {name:"React Js",price:100}
 }

console.log( createcourse());

 export{}