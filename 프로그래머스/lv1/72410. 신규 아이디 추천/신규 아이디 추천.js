function solution(new_id) {
  //1단계
  new_id = new_id.toLowerCase();
  console.log("1단계 : " + new_id);
  //2단계
  new_id = new_id.replace(/[^a-z0-9-_.]/g, "");
  console.log("2단계 : " + new_id);
  //3단계
  new_id = new_id //
    .split("")
    .filter((a, i) => {
      return a == "." ? a != new_id[i + 1] : a;
      //   a != new_id[i + 1];
    })
    .join("");
  console.log("3단계 : " + new_id);
  //4단계
  if (new_id[0] == ".") {
    new_id = new_id.slice(1);
  }
  if (new_id[new_id.length - 1] == ".") {
    new_id = new_id.substring(0, new_id.length - 1);
  }
  console.log("4단계 : " + new_id);

  //5단계
  if (new_id == "") {
    new_id = "a";
  }
  console.log("5단계 : " + new_id);
  //6단계
  if (new_id.length > 15) {
    new_id = new_id.substring(0, 15);
  }
  if (new_id[new_id.length - 1] == ".") {
    new_id = new_id.substring(0, new_id.length - 1);
  }

  console.log("6단계 : " + new_id);
  //7단계
  while (new_id.length < 3) {
    new_id = new_id + new_id[new_id.length - 1];
  }
  console.log("7단계 : " + new_id);

  return new_id;
}