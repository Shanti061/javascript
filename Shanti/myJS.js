// This is my JS File

//alert("this is the first class of DPP");

//1. Variables and Data Types

//Number
//String
//Boolean
//Array
//Object

//var pass= true;



/*var CityName ="lONDON"; //string
var busNumber = 16; //number

var shoppingList= ["Milk", "Sugar", 2, true];

var living ={
    CityName: "LONDON",
    country: "UK" //OBJECT
    
}

console.log(CityName);*/

/*
var firN = 25;
var secN = "15";

console.log(secN + 2 + firN);
*/

//2. Arrays

/*var jsF=[]; //array literal
var jsF= new Array(); //Array consructor

//JavaScript Arrays are index based starting from zero

//JavaScript objects are name index based

var jsF =["jQuery", "nodeJS","reactJS"];
//var jsF =new Array(2) ;
jsF.push("Manuel");
//console.log(jsF.length);
alert(jsF);*/

//3. Loops


//for loop
/*
for(var i=0; i<10; i++)
    {
        
        console.log(i);
    }

*/


//while loop
/*
var i=0;
while(i<=10){
    console.log(i);
    i++;
}
*/

//do while loop

/*var i = 0;
do {
    console.log(i);
    i ++;
} while(i <= 10);*/


/*var myN=[23, 75, 2, 9];
myN.reverse();
for (var i=0; i<myN.length; i++)
    {
        console.log(myN[i]);
    }*/

//9. Conditions

/*
if( 6 === "6"){
    
    console.log("This is true");
} else{
    console.log("This is false");
}
*/


//switch condition

/*
var car="porch";

switch(car){
        
    case "Mercedes":
        alert("I hate this car");
        break;
        
    case "ferrari":
        alert("I love this car");
        break;
        
    default:
        alert("none of the above");
        break;
        
        
}
*/


//10. Functions
//Javascript function is a block of code designed to perform a particular task
/*
var height= 5;
var width= 9;
var total;
 

function area(){
   total = height * width; 
     //console.log(total);
    return total;
   
    
}
area();
console.log(total);

//alert("out here");*/



//ANONYMOUS FUNCTIONS ARE THE ONE'S WITHOUT A NAME
/*
window.onload = function(){
    
    alert("I have arrived!!");
}*/

/*setTimeout(function() {
    alert("hi");
    
}, 10000);*/

//Assigning a function to a variable

/*var height= 5;
var width= 9;
var total;

(function(){
   total = height * width; 
     console.log(total);
    //return total;
    
    
    
})();

//myArea();
//console.log(myArea());*/


//PARAMETERS AND ARGUMENTS

/*function calcVolume (height, width, length){
    return height * width * length;   
    
}

var livingRoom = calcVolume(2,3,4);
var kitchen = calcVolume(5,6,7);
console.log(livingRoom);
console.log(kitchen);*/

// 11. OBJECTS - An object is a unordered collection of a key value pairs.

// Not a very good practice
/*
var student = new Object();

student.firstName = "Manuel";
student.lastName = "Cubuca";

//console.log(student.firstName, student.lastName);

var ages = new Array(23);
console.log(ages);*/

//the good practice

var student = {
    
    firstName: "Manuel",
    lastName: "Cubuca",
    getname: function(){
       
    return this.firstName + " " + this.lastName;
},
    address : {
        doorN: 20,
        street: "Bond street",
        postCode: "SE94HL"
        
    
}
};

console.log(student.address.doorN);
 /*var ages = [45];
console.log(student.firstName);*/



