
// with function it is compulsory to declare data type

function addTwo(num:number){

    // return "Hello "+(num+2) 

    /*          
     return "hello" will not give error but is not good practice     */

    return num+2;
}

console.log(addTwo(2))
 

//strings function with single parameter 
 function getUpper(val:string){
    return val.toUpperCase()
 }

 console.log(getUpper("mun"));
  
 // multiparameter function 

 function signUp(name:string ,email:string ,isPaid:boolean){
 
    return { name, email,isPaid}
 }

 console.log(signUp("bshri","bshri@gmail.com",true));
 
// arrow function 

let loginUser = (myname:string, myemail:string,paid=false) =>{
// paid=false is default value

return {myname,myemail,paid}
}
console.log(loginUser("b","bst@gmail.com"));

// passing function in a variable 

var user=function(age:number,id:string,flag:boolean){
    if(flag===void 0){
        flag=false;
    }
}

// function with it's return type 

function substraction(value:number):number{

return value+3;
}

console.log(substraction(6));

// return type with aerrow function 

const getHello = (s:string):string =>{
    return "its string return type " +s
}
console.log(getHello("abc"));


// return type void and never
function erroraccure(msg:string):void{
// it will return nothing 
console.log("return nothing because return type is void ");
}

erroraccure("not");

//  with return type never (it will never return anything) 

function correct_way_to_use(anymsg:string):never{

    // never is used where function throws an exception or terminates execution of program

    throw new Error(anymsg);
}






// list or array 

const anyname=["thor","spiderman","ironman"]
anyname.map(anyname=>{
    return `any name can take ${anyname}`
})
export{}