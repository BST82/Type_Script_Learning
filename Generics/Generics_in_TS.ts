const score: Array <number>=[]
const names:Array<string>=[]

function identityOne(val:boolean | number):boolean | number{
return val;
}

function identitytwo(val:any):any{
    return val;
}

function identityThree<Type>(val:Type):Type{
    return val;
}
console.log(identityThree(3));
console.log(identityThree("Bhagyashri"));

function identityFour<T>(val:T){
    return val;
}

interface Bootel{
    brand:string;
    type:number;
}

// identityFour<Bootel>({})

function getSearchProducts<T>(products:T[]):T{

    const myIndex=3
    return products[myIndex]
}

const getMoreSearchProducts=<T,>(products: T[]):T =>{
     const ind=4;
     return products[ind]
}
//using Type parameters in Generic Constraints 

interface dataBase{
    connection:string,
    username:string,
    password:string
}
// function anotherFunction<T, U extends number>(valOne:T, valTwo:U):object{

//     return{
//    valOne,
//    valTwo
//     }
// }
function anotherFunction<T, U extends dataBase>(valOne:T, valTwo:U):object{

    return{
   valOne,
   valTwo
    }
}

// anotherFunction(3,{});


interface quiz{
    name:string,
    type:string
}

interface Course{
    name:string,
    author:string,
    subject:string
}

class Sellable<T,>{
    public cart:T[]=[]

    addToCart(products: T){
        this.cart.push(products)
    }
}