function solution(s) {
    return s
    .split(" ")
    .map((el) =>
      el
        .split("")
        .map((word, index) =>
          index % 2 == 0 ? word.toUpperCase() : word.toLowerCase()
        )
        .join("")
    )
    .join(" ")
}