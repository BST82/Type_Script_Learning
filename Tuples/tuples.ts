//specialised array 

// const User:(string|number)[]=['mon','sun','tue',1,0,2];

// tuples are same as array with some restrictions 

let User:[string,number,boolean]

User=["munmun",111,true] // order is same as data type (maintained order)

type myUser=[number,string]
let newUser:myUser=[131,"abz@gmail.com"]
 
// multiple values

type store=[string,number,...boolean[]]
let first:store=["cake Shop",33,true,false,true,true,false]

for(let k in first){
    console.log(first[k])
}


function doSomething(pair: [string, number]) {
    const a = pair[0];
        
    const b = pair[1];
         
 console.log(a+" "+b);
 
  }
doSomething(["bst_Tam", 13]);
 