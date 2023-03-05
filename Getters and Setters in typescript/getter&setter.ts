class User{
    // private course=1
    protected course=1
    email:string
    name:string
    readonly city:string="Kanpur"

    constructor(email:string,name:string){
        this.email=email;
        this.name=name;
    }

    private delete3(){
        console.log("Deleted");
        
    }
    get getApple():string{
         return `apple{this.name}`
    }
    get courseCount():number{
         return this.course;
    }
    set courseCount(coursenaem){
      if(this.course<=1){
        throw new Error("default course count")
      }
      this.course=coursenaem
    }
}

class Subclass extends User{
 isFamily:boolean=true
 course_count(){
//  this.course=5  //not acceseble outsite the class

this.course=5 // after using protected modifire
 }
}

const munmun=new User("@mun.gmail","bshri")

export{}