//Narrowing in TS

function detectType(val:number | string){
    if(typeof val==="string"){
       return val.toLowerCase();
    }
   return val+3;
}
function provideId(id: string | null){
    if(!id){
        console.log("Please provide Id");
        return;
        
    }
      id.toLowerCase();
}

function printAll(str:string | string[] | null){
    if(str){
        if(typeof str==="object"){
            for(const s of str){
                console.log(s);
            }    
        }
    }else if(typeof str==="string"){
        console.log(str);  
    }
}