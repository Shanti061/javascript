// this is a json practice

var car = {
    
    "model" : "Audi",
    "price" : 2500,
    "engine" : "Petrol"
    
}

//json notation

/*console.log(car.model);

var f1drivers = ["Lewis", "Kimi", "Fernando"];
console.log(f1drivers[1]);*/

var f1 ={
    
    "data" :[
        {
            "car": "Mercedes",
            "driver": "Lewis",
            "wins": 2
            
            
            
        },
        
        {
            
            "circuit": "Monaco", 
            "pointSystem": [
                {
                    "firstplace ": 25,
                    "secondplace": 18,
                    "thirdplace":15
                }
                
            ],
            
            "teams": 11
            
        }
        
       ]
    
}


console.log(f1.data[1].pointSystem[0].thirdplace);

