exports.toRoman = function(num){
    let myRomanNumbers={
        "M":1000,
        "CM":900,
        "D":500,
        "CD":400,
        "C":100,
        "XC":90,
        "L":50,
        "XL":40,
        "X":10,
        "IX":9,
        "V":5,
        "IV":4,
        "I":1
    }
    let myNum=num
    let answer=[]
    for(i in myRomanNumbers){
        while(myRomanNumbers[i]<=myNum){
            myNum-=myRomanNumbers[i]
            answer.push(i)
        }
    }
    // console.log(answer.join(''))
    return answer.join('')
};