let romanMatrix = [
    [1000, 'M'],
    [900, 'CM'],
    [500, 'D'],
    [400, 'CD'],
    [100, 'C'],
    [90, 'XC'],
    [50, 'L'],
    [40, 'XL'],
    [10, 'X'],
    [9, 'IX'],
    [5, 'V'],
    [4, 'IV'],
    [1, 'I']
  ];
  
  function convertToRoman(num) {
    let answer = ''
    for (let i = 0; i < romanMatrix.length; i++) {
      if (num >= romanMatrix[i][0]) {
            answer += romanMatrix[i][1];
            num -= romanMatrix[i][0]
            i--
      }
    }
    return answer
  }

console.log(convertToRoman(123)) //CXXIII