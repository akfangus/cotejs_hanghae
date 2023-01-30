function solution(s) {
  dict = {
    zero: "0",
    two: "2",
    one: "1",
    three: "3",
    four: "4",
    five: "5",
    six: "6",
    seven: "7",
    eight: "8",
    nine: "9",
  };
  //   for (item of Object.keys(dict)) {
  //     // console.log(item);
  //     s = s.replace(item, dict[item]);
  //   }

  Object.keys(dict).map((a, i) => {
    s = s.replaceAll(a, dict[a]);
  });
  return Number(s);
}