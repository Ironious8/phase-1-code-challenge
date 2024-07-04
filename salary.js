const calculateNetSalary=function(basicSalary, benefits) {

    const prompt=require("prompt-sync") ({sigint: true});
    let taxableIncome= prompt("Enter salary");
   



    //Gross salary calculation 
let grossPay=basicSalary+benefits;
   
// PAYE calculation
let paye=10000;
if (taxableIncome<=24000) {
    console.log ('paye=taxableIncome*0.1');
}
else if (taxableIncome<=32333) {
    console.log('paye=24000*0.1+(taxableIncome-24000)*0.25');
}
else if (taxableIncome<=500000) {
    console.log('paye=24000*0.1+8333*0.25(taxableIncome-32333)*0.3');
}
else if (taxableIncome<=800000) {
    console.log('paye=24000*0.1+8333*0.25+41667*0.03(taxableIncome-500000)*0.325');
}
else {
    console.log('paye=24000*0.1+8333*0.25+41667*0.03+32333*0.325(taxableIncome-800000)*0.35');
}
  

//NHIF calculation
let nhif=1500;
if(grossPay<=5999) {
    console.log('nhif=150');
}
else if(grossPay<=7999) {
    console.log('nhif=300');
}    
else if(grossPay<=11999) {
    console.log('nhif=400');
}    
else if (grossPay<=14999) {
    console.log('nhif=500');
}
else if(grossPay<=19999) {
    console.log('nhif=600');
}
else if(grossPay<=24999) {
    console.log('nhif=750');
}
else if(grossPay<=29999) {
    console.log('nhif=850');
}
else if(grossPay<=34999) {
    console.log('nhif=900');
}
else if(grossPay<=39999) {
    console.log('nhif=950');
}
else if(grossPay<=44999) {
    console.log('nhif=1000');
}
else if(grossPay<=49999) {
    console.log('nhif=1100');
}
else if(grossPay<=59999) {
    console.log('nhif=1200');
}
else if(grossPay<=69999) {
    console.log('nhif=1300');
}
else if(grossPay<=79999) {
    console.log('nhif=1400');
}
else if(grossPay<=89999) {
    console.log('nhif=1500');
}
else if(grossPay<=99999) {
    console.log('nhif=1600');
}
else {
    console.log ('nhif=1700');
}

//NSSF calculation
let tier1=Math.min(grossPay, 7000)*0.06;
 let tier2=Math.min(grossPay-7000, 29000)*0.06;
 let nssf=`${tier1}+${tier2}`;
    

 // Net salary calculation
let netPay=grossPay-(paye+nhif+nssf);
return netPay;


}
calculateNetSalary();


