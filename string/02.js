const solution = newId => {
  const id = newId
    .toLowerCase() // 1단계, 소문자 변환
    .replace(/[^A-Za-z0-9-_.]/g, '') // 2단계 소문자, 숫자, _, .을 제외한 특수문자 삭제
    .replace(/\.{2,}/g, '.') // 3단계 '.'이 2개 이상 연속되어있으면 '.'으로 바꾸기
    .replace(/^\.|\.$/, '') // 4단계 '.'이 문자열의 시작점에 있거나 마지막에 있으면 삭제
    .replace(/^$/g, 'a') // 5단계 빈 문자열일 경우 'a'대입
    .slice(0, 15) // 6단계 15자리까지 끊기
    .replace(/\.$/, ''); // 6단계, 마지막 음절이 '.'으로 끝나면 삭제

  const idLength = id.length;

  return idLength > 2 ? id : id + id.substring(idLength - 1).repeat(3 - idLength);
};

console.log(solution('...!@BaT#*..y.abcdefghijklm'));
console.log(solution('=.='));
console.log(solution('abcdefghijklmn.p'));
