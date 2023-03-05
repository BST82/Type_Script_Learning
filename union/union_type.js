// you don't know about data type 
// you can use (union) insted of (any)
// union narrowing 
//union represent as (pipe sign)( | )
var score = 33;
score = 55;
score = "44";
var myname = {
    name: "Bhagyashri",
    id: 113
};
myname = { user_name: "bst", user_id: 33 };
function get_Id(id) {
    // console.log(`id is = ${id}`);
    if (typeof id === "string") {
        console.log(id.toUpperCase());
    }
    else {
        console.log(id);
    }
}
get_Id(22);
get_Id("bhagyashri");
//union with arrays :-
var data = ["b", "h", "a", 1, 3, 2, "u", 7];
// const data:any[]=["a","b","c",4,5,6] //do not use it 
for (var i in data) {
    console.log(data[i]);
}
// more extraction :-
var seatAllotment;
// more secure 
