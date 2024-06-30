const calculateNetSalary=function(basicSalary, benefits) {

//Gross salary calculation
let grossPay=basicSalary+benefits;
   
// PAYE calculation
let taxableIncome=10000;
if (taxableIncome<=24000) {
    return 'taxableIncome*0.1';
}
else if (taxableIncome<=32333) {
    return '(taxableIncome-24000)*0.25';
}
else if (taxableIncome<=500000) {
    return '(taxableIncome-32333)*0.3';
}
else if (taxableIncome<=800000) {
    return '(taxableIncome-500000)*0.325';
}
else {
    console.log('taxableIncome-800000)*0.35');
}
  console.log(taxableIncome);

//NHIF calculation
if(grossPay<=5999) {
    return 'nhif=150';
}
else if(grossPay<=7999) {
    return 'nhif=300';
}    
else if(grossPay<=11999) {
    return 'nhif=400';
}    
else if (grossPay<=14999) {
    return 'nhif=500';
}
else if(grossPay<=19999) {
    return 'nhif=600';
}
else if(grossPay<=24999) {
    return 'nhif=750';
}
else if(grossPay<=29999) {
    return 'nhif=850';
}
else if(grossPay<=34999) {
    return 'nhif=900';
}
else if(grossPay<=39999) {
    return 'nhif=950';
}
else if(grossPay<=44999) {
    return 'nhif=1000';
}
else if(grossPay<=49999) {
    return 'nhif=1100';
}
else if(grossPay<=59999) {
    return 'nhif=1200';
}
else if(grossPay<=69999) {
    return 'nhif=1300';
}
else if(grossPay<=79999) {
    return 'nhif=1400';
}
else if(grossPay<=89999) {
    return 'nhif=1500';
}
else if(grossPay<=99999) {
    return 'nhif=1600';
}
else {
    console.log ('nhif=1700');
}

//NSSF calculation
let tier1=Math.min(grossPay, 7000)*0.06;
 let tier2=Math.min(grossPay-7000, 29000)*0.06;
 let nssf=tier1+tier2;
    

 // Net salary calculation
let netPay=grossPay-paye-nhif-nssf


}
calculateNetSalary();


