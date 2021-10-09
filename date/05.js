// 5. 말일의 요일을 나타내는 정수(0 ~ 6) 구하기. 0은 일요일이고 6은 토요일이다.

const getLastDayOfMonth = (year, month) => new Date(year, month + 1, 0).getDay();

console.log(getLastDayOfMonth(2021, 0)); // 0
console.log(getLastDayOfMonth(2021, 11)); // 5
