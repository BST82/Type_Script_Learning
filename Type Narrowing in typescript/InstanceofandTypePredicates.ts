

//Instanceof and Type Predicates

// Instance of Narrowing 
 function logValue(x:Date | string){
    if(x instanceof Date){
        console.log(x.toUTCString());    
    }else{
        console.log(x.toUpperCase());
        
    }
 }

 // using type predicates

 type Fish={swim:()=>void};
 type bird={fly:()=>void};

 function isFish(pet :Fish | bird):pet is Fish{
   return (pet as Fish).swim!==undefined
 }
 function getFood(pet :Fish | bird){
    if(isFish(pet)){
        pet
        return "fish food";
    }
 }
