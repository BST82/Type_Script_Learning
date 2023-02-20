// readonly (keyword)
// ? (optionl ) 

type User={
    readonly _id:string // readonly(you can't change it's value )
    name:string;
    email:string;
    isActive:boolean;
    credit_Card?:number; // ? is used for optional it will not through error inside myUser (most IMP)
}

let myuser:User={
    _id:"123",
    name:"b",
    email:"b@.com",
    isActive:false
}
myuser.email="c@.com";
// myuser._id="1237"; it will show error because it is related with (readonly)


/*------------- mixing and matching ------ */

type card_Number={
    card_num:string;
}
type card_date={
    card_date:string;
}
type card_details=card_Number &  card_date & /*here & is used to combine */{
   cvv:number;
}

// more examples :-
//eg 1) :-
type A={
    readonly a:number;
}
let store_A:A={ a:10};
// store_A.a=22;// it is showing error 

//eg 2) :-

type B={
    b:number;
}
let store_B:Readonly<B>={ b:25};
//store_B.b=33; // it will show error because it is readonly

export{}