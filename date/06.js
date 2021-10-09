// 6. 두 날짜 사이의 일수 구하기

const diffDays = (day1, day2) => Math.abs(day1 - day2) / (24 * 60 * 60 * 1000);

console.log(diffDays(new Date('2021/01/01'), new Date('2021/12/31'))); // 364
