// you don't know about data type 
// you can use (union) insted of (any)
// union narrowing 
//union represent as (pipe sign)( | )
let score:number | string =33;
score=55;
score="44"

type User={
    name:string;
    id:number;
}
type Admin={
    user_name:string;
    user_id:number;
}

let myname: User | Admin={
name:"Bhagyashri",
id:113
}

myname={ user_name:"bst",user_id:33}

function get_Id(id:number | string){
    // console.log(`id is = ${id}`);

    if(typeof id === "string"){
        
        console.log(id.toUpperCase());
        
    }else{
        console.log(id);
        
    }
    
}
get_Id(22);
get_Id("bhagyashri");


//union with arrays :-

const data: (string | number)[]=["b","h","a",1,3,2,"u",7];

// const data:any[]=["a","b","c",4,5,6] //do not use it 

for(let i in data){
    console.log(data[i]);
    
}

// more extraction :-

let seatAllotment: "cs" | "it" | "bca"
 // more secure 