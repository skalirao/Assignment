// Q1 Reverse a String
const str="hello world"
let newstr=str.split('')
const newwstr=newstr.reverse()
console.log(newwstr.join(''))

// Q2 Remove Duplicate Character from String
const str="banana"
let str1=str.split('')
for(let i=0;i<str1.length;i++){
    for(let j=i+1;j<str1.length;j++){
        if(str1[j]===str1[i]){
            str1[j]='x'
        }
    }
}
console.log(str1.join(''))

//Q3 Check palindrome string
const str="madam"
let last=str.length-1
let isPalindrome=true
for(let start=0;start<=last;start++,last--){
    if(str[start]!=str[last]){
        isPalindrome=false
        break
    }
}
console.log(isPalindrome)

//Q4 Count vowels in a string
const str="javascript"
let count=0
for(let i of str){
    if(i== 'a'|| i=='i'|| i=='o'|| i=='u'|| i=='e')
        count++
}
console.log(count)

//Q5 Capitalize Each Word
const str="welcome to javascript world"
console.log(str.toUpperCase())


//Q7 Replace all occurences of substring
const str="welcome to foojavascript fooworld"
console.log(str.replaceAll('foo','bar'))

//Q8 Remove Special Characters
const str="/I AM; BATMAN{"
let newstr=str.replace(/[^a-zA-Z0-9 ]/g,'')
console.log(newstr)

//Q9 Check if string contains only digits
const str="12345"
let result=true
for(let i of str){
    if(i<'0' || i>'9'){
        result=false
        break
    }
}

console.log(result)
