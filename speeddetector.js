functionspeedDetector(speed){ 
    speed = Numbers(speed)

    const speedLimit = 70;
    const kmperdemerit = 5

    if (speed <= speedLimit){
        console.log('Ok')
    }else{
        constdemeritpoints = Math.floor((speed-speedLimit) / kmperdemerit);
        if (demeritpoints > 12){
            console.log('License suspended');
        }else{
            console.log(`Points:$ {demeritPoints}`);
        }
    }

}


//usage;
let speed = prompt('Enter the car speed:');

if (isNaN(speed) && speed > 0){
    speeddetector(speed);
}else{
    console.log('Please enter a valid number of speed ')
}