// 1. Date 객체를 ‘yyyy-mm-dd’ 형식의 문자열로 변환하기

const formatDate = newDate => {
  const year = newDate.getFullYear();
  const month = newDate.getMonth() + 1;
  const date = newDate.getDate();

  return `${year}-${month < 10 ? '0' + month : month}-${date < 10 ? '0' + date : date}`;
};

console.log(formatDate(new Date('2021/07/24'))); // "2021-07-24"
console.log(formatDate(new Date('1900/1/4'))); // "1900-01-04"
