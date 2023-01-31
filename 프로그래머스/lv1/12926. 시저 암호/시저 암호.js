function solution(s, n) {
    let answer =""
    for(let i=0;i<s.length;i++){
        let charCode =" "
        let char =s[i].charCodeAt()
        if(char>=65&&char<=90&&char+n>90){
                charCode = char+n-26
        }else if(char>=97&&char<=122&&char+n>122){
                charCode = char+n-26
        }else {charCode = char+n}
        answer+=s[i]!==" "?String.fromCharCode(charCode) : " "
    }
    return answer
}