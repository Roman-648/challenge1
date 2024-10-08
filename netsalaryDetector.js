function netSalaryCalculator(basicSalary,benefits){
    basicSalary = Number(basicSalary);
    benefits = Number(benefits)


    if (isNaN(basicSalary) || isNaN(benefits)){
        return('Please provide valid numbers for both basic salary and benefits.');
    }

 
// tax rates and NSSF
  const nssfDeduction = 200;
  const grossSalary = basicSalary + benefits;

// PAYE
  const payeBrackets = [
    {min:0,max:24000,rate:0.1},
    {min:24001,max:32333,rate:0.25}
    {min:32334,max:Infinity,rate:0.30}
]

// NHIF
  const nhifBrackets = [
    {min: 6000, max: 7999, deduction: 300 },
    { min: 8000, max: 11999, deduction: 400 },
    { min: 12000, max: 14999, deduction: 500 },
    { min: 15000, max: 19999, deduction: 600 },
    { min: 20000, max: 24999, deduction: 750 },
    { min: 25000, max: 29999, deduction: 850 },
    { min: 30000, max: 34999, deduction: 900 },
    { min: 35000, max: 39999, deduction: 950 },
    { min: 40000, max: Infinity, deduction: 1000}, 
  ];

//calculate PAYE
function calculatePaye(grossSalary){
    let paye = 0;
    for (let bracket of payeBrackets){
        if (grossSalary > bracket.min){
            const taxableIncome = Math.min(grossSalary,bracket.max)-bracket.min;
            paye += taxableIncome * bracket.rate;
        }
    }
    return paye;
}  


//calculate NHIF
function calculateNhif(grossSalary){
    for(let bracket of nhifBrackets){
        if (grossSalary >=bracket.min && grossSalary <=bracket.max){
            return bracket.deduction
        }
    }
    return 0;
}

// deductions
  const PAYE = calculatePaye(grossSalary)
  const NHIF = calculayeNHIF(grossSalary)

// Net salary
  const netSalary = grossSalary- (PAYE + NHIF + nssfDeduction);
  return{
    grossSalary : grossSalary
    paye : PAYE
    NHIF : NHIF
    nssfDeduction : nssfDeduction
    netSalary : netSalary
  }

// usage 
let basicSalary = prompt("Enter the basic salary :");
let benefits = prompt("Enter the benefits :");
const result = netSalaryCalculator(Number(basicSalary),Number(benefits));

if(typeof result ==='string'){
    console.log(result);//error(invalid input)
    console.log(`Gross Salary : ${result.grossSalary}`);
    console.log(`PAYE : ${result.paye}`);
    console.log(`NHIF :${result.NHIF}`);
    console.log(`NSSF Deduction : ${result.deduction}`);
    console.log(`Net SaLary : ${result.netSalary} `);
}
} 