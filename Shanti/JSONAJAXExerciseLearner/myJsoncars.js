//This is my JS for the luxury car practice


var mySurvey = document.getElementById("survey");
mySurvey.addEventListener("change", loadData, false);

var myManufacturer = document.getElementById("manufacturer");
myManufacturer.addEventListener("change", loadData, false);

function loadData(){
    
    var manufacturerStored = myManufacturer.options[myManufacturer.selectedIndex].value;
      
    //console.log(manufacturerStored);
    
    //XMLHttpRequest is the main object to establish the communication between the server and the browser.
    
    var myRequest = new XMLHttpRequest;
    
    //The open method receives 3 parameters
    myRequest.open("GET", "https://raw.githubusercontent.com/biatoSalo/Training/master/JSONAJAXExerciseLearner/expensiveLuxuryCars.json", true);
    
    //we need a condition to check if the data has arrived
    myRequest.onload = function(){
        
        
        if(myRequest.readyState == 4 && myRequest.status == 200){
            
            //JSON.parse method is the one that changes the JSON format of the data to JS object
            
            var myData=JSON.parse(myRequest.responseText);
            //console.log(myData);
            
            if(manufacturerStored === ""){
                
                
                function clearAll(){
                    
                    var hideText = document.getElementsByClassName("data");
                    for(var i=0; i<hideText.length; i++)
                        {
                            hideText[i].innerHTML = "";
                        }
                    
                }
                
                clearAll();
                
                document.getElementById("messageAlert").innerHTML="Please, you must choose a manufacturer to load data..";
            } else{
                
                
                document.getElementById("manufacturerC").innerHTML=myData.data[manufacturerStored].manufacturer;
                document.getElementById("modelC").innerHTML=myData.data[manufacturerStored].model;
            }
        }
    }
    
    myRequest.send();    
    
    //console.log(myRequest);
}
