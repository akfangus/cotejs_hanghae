function solution(n) {
    //사람수 n이 주어졌을때 1조각이상 먹기위판 피자의 최소값?
    //1~7 1판 , 2~14 2판, 15~21 3판... 개념이므로
    return parseInt((n-1)/7) + 1
    //return Math.ceil(n / 7)
}