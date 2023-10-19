function reverseChar(char) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('') // 배열
  const frogDic = new Object() // 빈 객체 생성하고 변수 frogDic에 저장
  
  for (let alphabetIndex = 0; alphabetIndex < alphabet.length; alphabetIndex++) {
    const key = alphabet[alphabetIndex]
    frogDic[key] = alphabet[alphabet.length - 1 - alphabetIndex] // frogDic[0] = alphabet[25];
  }
  return frogDic[char] //?도대체 char이 어디서 나온거임..
}

function changeChar(char) {
  if (/^[a-z]*$/.test(char)) char = reverseChar(char) // 정규식 활용
  if (/^[A-Z]*$/.test(char)) char = reverseChar(char.toLowerCase()).toUpperCase()
  return char
}

function problem4(word) {
  const wordChar = word.split('')
  const changedWord = wordChar.map((char) => changeChar(char)).join("")
  return changedWord
}

module.exports = problem4;

//taehwan01