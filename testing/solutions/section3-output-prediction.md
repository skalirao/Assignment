# Section 3: Output Prediction - Solutions

## Question 1
```javascript
const car = {
    make: "Toyota",
    model: "Camry",
    year: 2020
};
car.year = 2023;
console.log(car.year);
console.log(car.color); // Accessing non-existent property
```

**Output:**
```
2023
undefined
```

**Explanation:** `car.year` is updated to 2023. `car.color` does not exist, so it returns `undefined`.

---

## Question 2
```javascript
const student = { name: "Eve", age: 22 };
student.course = "Computer Science";
console.log(Object.keys(student).length);
delete student.age;
console.log(student);
```

**Output:**
```
3
{ name: 'Eve', course: 'Computer Science' }
```

**Explanation:** After adding `course`, there are 3 keys (`name`, `age`, `course`). After deleting `age`, only `name` and `course` remain.

---

## Question 3
```javascript
const book = { title: "1984", author: "George Orwell" };
for (let key in book) {
    console.log(`${key}: ${book[key]}`);
}
```

**Output:**
```
title: 1984
author: George Orwell
```

**Explanation:** `for...in` iterates over enumerable properties of the object.

---

## Question 4
```javascript
const settings = { volume: 50, brightness: 80 };
const newSettings = { ...settings, brightness: 90, mode: "dark" };
console.log(newSettings);
console.log(settings);
```

**Output:**
```
{ volume: 50, brightness: 90, mode: 'dark' }
{ volume: 50, brightness: 80 }
```

**Explanation:** Spread operator creates a shallow copy and overrides `brightness` with 90, adds `mode: "dark"`. Original `settings` remains unchanged.

---

## Question 5
```javascript
const album = {
    title: "Thriller",
    artist: "Michael Jackson",
    year: 1982,
    getDetails: function() {
        return `${this.title} by ${this.artist}, released in ${this.year}.`;
    }
};
console.log(album.getDetails());
```

**Output:**
```
Thriller by Michael Jackson, released in 1982.
```

**Explanation:** `this` refers to the `album` object when the method is called on it. 