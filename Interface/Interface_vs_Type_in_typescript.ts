// /Interface vs Type in typescript

// reopning the Interface
interface User{
    readonly dbId:number, // readonly not allow to change
    email:string,
  
    
}


 interface User{
    githubToken:string
 }

 
 const bshri:User={
    dbId:22,
    email:"as@",
    //reopening the interface 
  githubToken:"mygit", ////reopening the interface 

}

 

 export{}