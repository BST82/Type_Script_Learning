
abstract class TakePhoto{
    constructor(
        public cameramode:string,
        public filter:string
        ){}
        //method definition 

        abstract getSepia():void
        
}

// const munmun=new TakePhoto("test","AnotherTest")

class Instagram extends TakePhoto{

     constructor(
        public cameramode:string,
        public filter:string,
        public brust:number){

            super(cameramode,filter)
    }

    getSepia(): void {
        console.log("Hello");
        
    }
}
const munmun=new Instagram("test","AnotherTest",101)


export{}