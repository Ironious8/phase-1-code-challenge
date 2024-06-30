const getMarks=function() {
   
    //Prompting marks input
    const prompt=require("prompt-sync") ({sigint: true});
    let marks = prompt("Enter marks (between 0 and 100):");
    
    //Validating the input
    if (isNaN(marks)|| marks<0 || marks>100) {
        console.log('Incorrect!Try again');
    }
    else {
        console.log('Input was successful');
    }
    
    let grade;
    
    //Grading conditions
    if (marks>=79 && marks<=100) {
        console.log('A');
    }
    else if (marks>=60 && marks<=79) {
        console.log('B');
    }
    else if (marks>=50 && marks<=59) {
        console.log('C');
    }
    else if (marks>=40 && marks<=49) {
        console.log('D');
    }
    else {console.log('E');

    }
  
}
//Calling the function
getMarks();