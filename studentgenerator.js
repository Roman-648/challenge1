function studentgradeGenerator
marks=Numbers(marks)
if (marks>79){
    return A
}else if (marks >= 60 && marks <= 79){
    return 
 }else if (marks >= 49 && marks <= 59){
    return C
 }else if (marks >= 40 && marks <= 49){
    return D
 }else if (marks >= 39 && marks <= 0){
    return E
 }


 let marks = prompt ("Enter the student's marks (between 0 and 100):");


 if (isNaN(marks) && marks >= 0 && marks <= 100){
    console.log(`The student's grade id :$;
    {studentgradeGenerator(marks)}`)
 }else {
    console.log('Please enter a valid number between 0 and 100.');
 }