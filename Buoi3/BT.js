//Cau 1
function PrimeNumber(n) {
    
    if (n<2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

//cau 2
function SumOdd(n) {
    let S=0;
    for (i=1;i<=n-1;i+=2) {
        S=S + i
        console.log(i);
    }
    console.log(S);
}

//Cau 3
function Array(a) {
    let newArray = [];
    let max = a[0];
    console.log("Cac so chan trong mang la:");
    for (let i = 0; i < a.length; i++) {
        if (a[i] %2 === 0){
            console.log(a[i]);
        }

        if (a[i] > max) {
            max = a[i];
        }
        if (a[i] > 0) {
            newArray.push(a[i]);
        }
    }

    console.log("So lon nhat trong mang la: " + max);
    console.log("Mang chua cac so lon hon 0 la: " + newArray);
    
}

