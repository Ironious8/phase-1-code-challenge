const Speed=function() {
    
    //Prompt speed input
    const prompt=require("prompt-sync") ({sigint: true});
    let carSpeed= prompt("Enter car speed");
   
    //Validating speed input
    if(isNaN(carSpeed) || carSpeed<0) {
        console.log('Incorrect!Try again');
    }
    //Declaring relevant variables
    let speed=80;
    const speedLimit=70;
    const kmPerPoint=5;
    let demeritPoints=Math.floor((speed-speedLimit)/kmPerPoint);
    
    //Speed limit and demerit points conditions
    if(speed<speedLimit) {
        console.log('Ok');
    }
    else if (speed>speedLimit && demeritPoints<=12); {
        console.log(`Points:${demeritPoints}`);
    }
    if (speed>speedLimit && demeritPoints>12) {
        console.log('License suspended');
    }
    
}
//Calling the function
Speed();