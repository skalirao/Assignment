// Q1 Reverse a String
const str="hello world"
let newstr=str.split('')
const newwstr=newstr.reverse()
console.log(newwstr.join(''))

// Q2 Remove Duplicate Character from String
str="banana"
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
str="madam"
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
str="javascript"
let count=0
for(let i of str){
    if(i== 'a'|| i=='i'|| i=='o'|| i=='u'|| i=='e')
        count++
}
console.log(count)

//Q5 Capitalize Each Word
str="welcome to javascript world"
console.log(str.toUpperCase())

//Q6 Find Longest Word in String
const sentence="welcome to javascript world"
const words = sentence.split(" ")
let longest = "";
console.log(words)
for (let word of words) {
    if (word.length > longest.length) {
            longest = word;
    }
}
console.log(longest)

//Q7 Replace all occurences of substring
str="welcome to foojavascript fooworld"
console.log(str.replaceAll('foo','bar'))

//Q8 Remove Special Characters
str="/I AM; BATMAN{"
newstr=str.replace(/[^a-zA-Z0-9 ]/g,'')
console.log(newstr)

//Q9 Check if string contains only digits
str="12345"
let result=true
for(let i of str){
    if(i<'0' || i>'9'){
        result=false
        break
    }
}
console.log(result)

//Q10 Convert snake case to camel case
str="hello_world_test"
result=""
for(let i=0;i<str.length;i++){
    if(str[i]==="_"){
        i++
        result=result + str[i].toUpperCase()
    }
    else{
        result=result + str[i]
    }
}
console.log(result)