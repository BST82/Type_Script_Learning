// Interface 
// it helps to handle bulky code 
interface User{
    readonly dbId:number, // readonly not allow to change
    email:string,
    userId:number,
    mailid:string,
    // myfunction:()=>string //Its cool way to use method
    myfunction():string, // always return string
    getCoupon(coupon_name:string):number,
    googleId?:string // it is optional
}

const bbshri:User={
    dbId:101,
    email:"b@gmai.com",
    userId:3123,
    mailid:"ye23@.com",
    myfunction:()=>{
        return "thats good" ;
    },
    getCoupon:(name:"munmun30")=>{
        return 30;
    }
}