// 7. 2개의 Date 객체가 같은 년도/월/날짜를 가리키는지 확인하기

const isEqualDate = (day1, day2) => {
  const day1Time = day1.getTime();
  const day2Time = day2.getTime();

  return day1Time === day2Time;
};

console.log(isEqualDate(new Date('2021/07/24'), new Date('2021/07/24'))); // true
console.log(isEqualDate(new Date('2021/07/24'), new Date('2022/07/2'))); // false
