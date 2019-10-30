// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16

function power(num,expo){
    if(expo === 0){
        return 1
    }
    return num * power(num,expo-1);
}

power(2,0);