function solution(box, n) {
    return box.map((a)=>parseInt(a/n)).reduce((a,b)=>a*b)
}