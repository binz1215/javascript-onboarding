function problem6(forms) {
  const targetEmail = []
  const wordCase = {} // 객체(object)중복여부 판단.
  forms.forEach((form) => {
    const email = form[0]
    wordOfCrew(form).forEach((word) => {
      if (!wordCase[word]) wordCase[word] = email
      else {
        const presavedEmail = wordCase[word]
        targetEmail.push(presavedEmail)
        targetEmail.push(email)
      }
    })
  })
  return [...new Set(targetEmail)].sort() // 오름차순 정렬(유니코드)
  //Set는 클래스임.
} 

function wordOfCrew(form) { // form에는 한 크루의 메일과 이름 세트 배열이 들어옴.
  const nickname = form[1]
  const wordList = []
  for (let char = 0; char < nickname.length - 1; char++) {
    wordList.push(nickname.substring(char, char + 2)) // 연속적인 두글자로 나눈 모든 단어로 담은 array, (사작, 종료전)까지 분자열 반환.메서드
  }
  return [...new Set(wordList)]
}

module.exports = problem6;