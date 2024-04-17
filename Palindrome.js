

function xyz (arr){

    arr.forEach(ele => {
        let sum = 0 ;
        if(ele > 0){
            sum = sum + ele
        }
        return sum;
    });

}


function isPalindrome (str){

    let rev = str.split("").reverse().join(""); 
    if (rev == str) {
        return true
    }
    return false

}