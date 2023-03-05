// class User{
//     email:string
//     name:string
//     readonly city:string="Kanpur"

//     constructor(email:string,name:string){
//         this.email=email;
//         this.name=name;
//     }
// }

// const munmun=new User("@mun.gmail","bshri")

//profession code writing

class User{

    constructor(
       public name:string,
       private age:number,
       public city:string
    ){

    }
}
const show= new User("munmun",9,"kanpur");

export{}