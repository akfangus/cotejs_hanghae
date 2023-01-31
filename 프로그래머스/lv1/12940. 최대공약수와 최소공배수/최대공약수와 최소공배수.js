function solution(n, m) {
    let gcd = 1;
    // 최대공약수
    for(let i = 2; i <= Math.min(n, m); i++){
        if(n % i === 0 && m % i === 0){
            gcd = i;
        }
    }
    //최소공배수
    const lcm = n * m / gcd;
    return [gcd, lcm];
    
}
