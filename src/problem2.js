function problem2(cryptogram) {
  const charStack = new Array(cryptogram[0]) // 생성자 함수(new Array())를 사용하여 배열을 만들고 초기값 할당)
  //이러면 charStack은 길이 1에 앞글자 하나만 들어있는 건데..?
  //마지막에 얘한테 정답을 추가해서 출력할거임

  for (let charIndex = 1; charIndex < cryptogram.length; charIndex++) {
    if (charStack[charStack.length - 1] === cryptogram[charIndex]) { // 지금까지 추가한 것들 중에서 제일 마지막 놈이랑 계속 비교
      charStack.pop() // 마지막 요소 제거
    }
    else {
      charStack.push(cryptogram[charIndex]) // 마지막에 추가
    }
  }
  return charStack.join("") // 다 합쳐서 문자열 형태로
}

module.exports = problem2;

//youzysu