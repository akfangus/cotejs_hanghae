function solution(my_string) {
    mo = ["a","e","i","o","u"]
    return my_string.split("").filter(a=> !mo.includes(a)).join("")
}