function getDigits(number) {
  return number.toString().split("");
}

function has369(digits) {
  let count = 0;
  for (let i = 0; i < digits.length; i++) { //여기서 발견하면 그냥 바로 배열속에 push하고 다 더해버리면?
    if (digits[i] === "3") count++; // let arry = []; arry.push(digits[i]) 
    if (digits[i] === "6") count++; // 아님 let getSum += Number(digets[i]) (숫자화 시켜서 비ㅕㅇㄹ 굳이 안만들고..)  
    if (digits[i] === "9") count++;
  }
  return count;
}

function checkAllNum(number) {
  let countAll = 0;
  let digits;
  for (let i = 1; i <= number; i++) {
    digits = getDigits(i);
    countAll += has369(digits); // 1부터 입력한 값까지
  }
  return countAll;
}

function problem3(number) {
  var answer;
  answer = checkAllNum(number);
  return answer;
}

module.exports = problem3;

//taehwan01
