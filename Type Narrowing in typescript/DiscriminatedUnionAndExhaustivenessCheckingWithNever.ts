//Discriminated Union and Exhaustiveness Checking with never

// disceiminated Union 

interface Circle{
 kind:"circle",
 radious:number
}
interface Square{
    kind:"square",
    side:number
}
interface Rectangle{
    kind:"rectangle",
    length:number,
    width:number
}

type Shape=Circle | Square | Rectangle

function getTrueShape(shape:Shape){
    if(shape.kind==="circle"){
        return Math.PI* shape.radious**2;
    }
   // return shape.side*shape.side;
}

function getArea(shape:Shape){
 switch(shape.kind){
    case "circle":
        return Math.PI* shape.radious**2;
    case "square":
        return shape.side*shape.side;
    case "rectangle":
        return shape.length*shape.width;
    default:
        const _defaultforshape:never=shape
        return _defaultforshape;
 }
}