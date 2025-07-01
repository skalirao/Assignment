/*
// Section 1: Advanced Manipulations
// Q1 indexOf() and lastIndexOf() functions
const color=["Red","Green","Blue","Red","Yellow"]
console.log(`First Index of "Red" is ${color.indexOf("Red")}`)
console.log(`Last Index of "Red" is ${color.lastIndexOf("Red")}`)
console.log(`First Index of "Purple" is ${color.indexOf("Purple")}`)

// Q2 includes() function
const inventory=["laptop","mouse","keyboard"]
console.log(inventory.includes("mouse"))
console.log(inventory.includes("monitor"))

const numbers=[10,20,30]
console.log(numbers.includes(20))
console.log(numbers.includes("20"))

// Q3 every() function
const ages=[18,22,25,30]
console.log(`To check if all ages are 18 or older = ${ages.every(age=>age>18)}`)
const temps=[25,28,30,22]
console.log(`To check if all temperatures are strictly less than 30 = ${temps.every(temp=>temp<30)}`)
const productQuantities=[5,12,8,3]
console.log(`To check if all products have a quantity greater than 0 = ${productQuantities.every(Quantity=>Quantity>0)}`)

// Q4 join() function
const sentenceParts=["Hello", "world", "how", "are", "you?"]
console.log(sentenceParts.join(" "))
const csvData=["id", "name", "email"]
console.log(csvData.join(","))

// Q5 slice() function
const alphabets = ["a", "b", "c", "d", "e", "f"]
const newAlphabets1= alphabets.slice(1,4)
console.log(newAlphabets1)
const newAlphabets2=alphabets.slice(2,alphabets.length)
console.log(newAlphabets2)
const newAlphabets3=alphabets.slice(-2,alphabets.length)
console.log(newAlphabets3)
const shallowCopy=alphabets.slice()
console.log(shallowCopy)

// Q6 splice() function
const planets= ["Mercury", "Venus", "Earth", "Mars", "Jupiter"]
planets.splice(2,1)
console.log(planets)
const marsIndex=planets.indexOf("Mars")
planets.splice(marsIndex+1,0,"Saturn","Uranus")
console.log(planets)
const merIndex=planets.indexOf("Mercury")
planets.splice(merIndex,1,"Sun")
console.log(planets)

// Q7 concat() function
const arr1=[1,2]
const arr2=[3,4]
const arr3=arr1.concat(arr2)
console.log(arr3)
const arr4=arr1.concat(arr2,[5,6])
console.log(arr4)
/* arr1.concat(arr2) and [...arr1,...arr2] primarily do the same job, 
the only difference being that using the later 
one we can insert inline operators in it 

// Q8 forEach() function
const users= [{ name: "Alice", id: 1 }, { name: "Bob", id: 2 }];
users.forEach(user => {
    console.log(`User:${user.name}, ID:${user.id}`)
})
const prices=[10.50,20.00,5.75]
let USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});
prices.forEach(price=>{
    console.log(`${USDollar.format(price)}`)
})

//Q9 map() function
const numbs=[1,2,3,4,5]
console.log(numbs.map(value=>value*2))

const products=[{ name: "Shirt", price: 25 }, 
    { name: "Pants", price: 50 }]
const newProducts=products.map(product=>{
    return product.name
})
console.log(newProducts)

const temp=[0,10,20]
const newTemp=temp.map(value=>{
    return value= (value*9/5) + 32
})
console.log(newTemp)

//Q10 filter() function
const ages1=[12,18,25,6,30]
const newAges1=ages.filter(ages=>ages>18)
console.log(newAges1)

const word=["apple","banana","graoe","avocado"]
const newWord=word.filter(word=>{
    if(word[0]=="a")
        return word
})
console.log(newWord)

//Q11 reduce() function
const data=[10,20,30,40]
console.log(data.reduce((sum,value)=>{
    return sum=sum+value
},0))

const chars=["H","e","l","l","o"]
console.log(chars.reduce((a,b)=> a+b))

const transactions=[{ type: 'debit', amount: 50 }, { type: 'credit', amount: 100 }, { type: 'debit', amount: 20 }]
console.log(transactions.reduce((sum,user)=>{
    return sum=sum+user.amount
},0))

//Section 2: Advanced Concepts & Edge Cases
// 1. Truthiness of Arrays
// All empty objects and arrays are considered 
// truthy whereas everything else is falsy

// 2. Array vs String for length
// typeof function will return the type of the Array/String
// We can change .length for the arrays but for the strings .length is read-only

// 3. Sparse Arrays




// Section 3: Confusing Array Output Questions

// Q1
console.log([]==[])
// Reason = Even though they look the same ([]), each [] creates a new array object with its own reference.

// Q2
console.log([]===[])
// Reason = Even though they look the same ([]), each [] creates a new array object with its own reference.

// Q3
console.log([] == ![]);
// Reason = It means both the arrays are not equal so returns true

// Q4
console.log([]+[])
// Reason: In javascript when we use the + operator , because it is overloaded 
// in js so it first converts them to string and then concatenates them 
// and finally returns a string as output

// Q5
console.log([1] + [2]);
// Reason: + operates concatenates and 
// first converts the arrays to strings

// Q6
console.log([]+{});
// Reason: [] is converted to ""
// {} is converted to [object Object]
// object means it is an object, Object means which class it belongs to

// Q7 
console.log({}+[])
// Reason: [] is converted to ""
// {} is converted to [object Object]
// object means it is an object, Object means which class it belongs to

// Q8
let a = [];
let b = [];
console.log(a == b);
console.log(a === b);
// Reason : Even though they look the same ([]), each [] creates a new array object with its own reference.

// Q9
let c = [];
let d = c;
console.log(c == d);
console.log(c === d);
// Reason : c and d point to the same array in memory
// So it returns true

// Q10
let result;
result = [12] + [13];
console.log(result);
console.log(typeof result);
// Reason : Type conversion to string by using +

// Q11
console.log(+"");
console.log(+"10");
console.log(+[]);
console.log(+["10"]);
console.log(+["abc"]);
// Reason: The unary + operator tries to convert its operand to a number

// Q12
let arr = [1, 2];
arr[10] = 11;
console.log(arr.length);
console.log(arr[5]);

// Section 4: Output Prediction

// Q1
let aray = [10, 20, 30];
aray.push(40);
console.log(aray.length);
console.log(aray[2]);

// Q2
let data1 = ["A", "B", "C", "D"];
let slicedData = data1.slice(1, 3);
console.log(data1);
console.log(slicedData);

// Q3
let values = [1, 2, 3, 4, 5];
values.splice(2, 1, 10, 11);
console.log(values);

// Q4
let words = ["hello", "world"];
let transformed = words.map(word => word.toUpperCase());
console.log(transformed);

// Q5
let scores = [85, 92, 78, 65, 95];
let highScores = scores.filter(score => score > 80);
console.log(highScores);

// Section 5: Debugging Common Mistakes
// Q1
let items = ["item1", "item2"];
console.log(items[2]);
// Reason : Out of bounds index

// Q2
let colors = ["red", "green", "blue"];
colors.splice(1, 0, "yellow"); // Goal was to replace "green" with "yellow"
console.log(colors);
// Reason: should replace 0 with 1 as it inputs how many values to delete

// Q3
let originalNumbers = [1, 2, 3];
originalNumbers.forEach(num => {
    originalNumbers.push(num * 2); // This will lead to an infinite loop or unexpected behavior
});
console.log(originalNumbers);
// During iteration 
// Iteration 1: num = 1 → push 2 → [1, 2, 3, 2]
// Iteration 2: num = 2 → push 4 → [1, 2, 3, 2, 4]
// Iteration 3: num = 3 → push 6 → [1, 2, 3, 2, 4, 6]

//Q4
let chars1 = ["a", "b", "c"];
let result1 = chars1.reduce((acc, char1) => acc + char1);
console.log(result1); // What if the array was empty?

// Section 6: Real-World Problem Solving
// 1. Shopping List Manager
let ShoppingList=["Laptop","Phone","Charger","Adaptor"]
function NewItem(item){
    ShoppingList.push(item)
}
NewItem("Cover");
console.log(ShoppingList)

function RemoveItem(item){
    const index = ShoppingList.indexOf(item);
    if (index !== -1) {
        ShoppingList.splice(index, 1); 
    }
}
RemoveItem("Cover")
console.log(ShoppingList)

function HasItem(item){
   return ShoppingList.includes(item)
}
console.log(HasItem("Laptop"))

function HasItemCaseInSensitive(item){
    const target = item.toUpperCase();
    return ShoppingList.some(value => value.toUpperCase() === target);
}
console.log(HasItemCaseInSensitive("lApToP"))

function Display(){
    ShoppingList.forEach((value,index)=>console.log(`Item is ${value} at ${index}`))
}

function Clear(){
    ShoppingList.splice(0,ShoppingList.length)
}

// 2. Student Grade Calculator
const StudentNames = ["Alice", "Bob", "Charlie"];
const StudentGrades = [85, 92, 78];

function average(grades) {
    if (!grades.length) return 0;
    const result = grades.reduce((sum, value) => sum + value, 0);
    return result / grades.length;
}
console.log("Average Grade:", average(StudentGrades));

function HighestGrade(grades) {
    if (!grades.length) return 0;
    return Math.max(...grades); 
}
console.log("Highest Grade:", HighestGrade(StudentGrades));

function NameWithHighestGrade(grades) {
    if (!grades.length) return 0;
    const highest = HighestGrade(grades);
    const index = grades.indexOf(highest);
    return StudentNames[index];
}
console.log("Topper:", NameWithHighestGrade(StudentGrades));

function PassedStudents(names, grades) {
    if (!grades.length) return 0;
    return names.filter((name, index) => grades[index] > 80);
}
console.log("Passed Students: ",PassedStudents(StudentNames, StudentGrades))

function FailedStudents(names, grades) {
    if (!grades.length) return 0;
    return names.filter((name, index) => grades[index] < 80);
}
console.log("Failed Students: ",FailedStudents(StudentNames, StudentGrades))
*/

// 3. Inventory Management
const Inventory=[
    {Name:"Laptop",Quantity:5,Price:70000},
    {Name:"Phone",Quantity:10,Price:20000},
    {Name:"Charger",Quantity:20,Price:10000}]

function NewProduct(name,quantity,price){
    if(!name || !quantity || !price) return 0
    Inventory.push({Name:name,Quantity:quantity,Price:price})
}
NewProduct("Fan",12,1500)
console.log(Inventory)


function UpdateProduct(name, quantity, price) {
    const index = Inventory.findIndex(product => product.Name === name);
  
    if (index !== -1) {
      Inventory[index].Quantity = quantity;
    } else {
      Inventory.push({ Name: name, Quantity: quantity, Price: price });
    }
}
UpdateProduct("Charger",25,10000)
console.log(Inventory)

function RemoveProduct(name){
    const index=Inventory.indexOf(name)
    Inventory.splice(index,1)
}
RemoveProduct("Fan")
console.log(Inventory)

function TotalValue(items) {
    return items.reduce((sum, item) => {
        return sum + (item.Quantity * item.Price);
    }, 0);
}
console.log(TotalValue(Inventory))

function LowStock(items){
    const low= items.filter(value => {
        if(value.Quantity <10)
            return value})
    console.log("Low on Stock Items",low)
}
LowStock(Inventory)

function MostExpensive(items) {
    const maxPrice = Math.max(...items.map(item => item.Price));
    const expensiveItem = items.find(item => item.Price === maxPrice);
    console.log("Most Expensive Item:", expensiveItem);
}
MostExpensive(Inventory)