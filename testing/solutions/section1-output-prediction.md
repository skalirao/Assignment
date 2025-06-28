# Section 1: Confusing Object Output Questions - Solutions

## Question 1
```javascript
const obj1 = { a: 1 };
const obj2 = { a: 1 };
console.log(obj1 == obj2);
console.log(obj1 === obj2);
```

**Output:**
```
false
false
```

**Explanation:** Both `==` and `===` compare object references, not their contents. `obj1` and `obj2` are two different objects in memory.

---

## Question 2
```javascript
const objA = { b: 2 };
const objB = objA;
console.log(objA == objB);
console.log(objA === objB);
```

**Output:**
```
true
true
```

**Explanation:** `objB` is assigned the reference of `objA`, so both point to the same object.

---

## Question 3
```javascript
const myObj = { value: 10 };
const anotherObj = myObj;
myObj.value = 20;
console.log(anotherObj.value);
```

**Output:**
```
20
```

**Explanation:** Both variables reference the same object, so changes via one are visible via the other.

---

## Question 4
```javascript
let obj = {};
if (obj) {
    console.log("Object is truthy");
} else {
    console.log("Object is falsy");
}
```

**Output:**
```
Object is truthy
```

**Explanation:** All objects (including empty ones) are truthy in JavaScript.

---

## Question 5
```javascript
console.log({} + []);
```

**Output:**
```
0
```

**Explanation:** The `{}` is interpreted as a block, so it's like `+[]`, which is `0`.

---

## Question 6
```javascript
console.log([] + {});
```

**Output:**
```
[object Object]
```

**Explanation:** `[]` is coerced to an empty string, `{}` to `"[object Object]"`, so result is `"[object Object]"`.

---

## Question 7
```javascript
let x = { a: 1 };
let y = { b: 2 };
console.log(x + y);
```

**Output:**
```
[object Object][object Object]
```

**Explanation:** Both objects are coerced to strings and concatenated.

---

## Question 8
```javascript
const key = "name";
const person = { [key]: "Alice" };
console.log(person.name);
```

**Output:**
```
Alice
```

**Explanation:** Computed property names allow dynamic keys.

---

## Question 9
```javascript
const dynamicKey = "age";
const value = 30;
const info = { [dynamicKey]: value };
console.log(info.age);
```

**Output:**
```
30
```

**Explanation:** Same as above, dynamic key assignment.

---

## Question 10
```javascript
const obj = {
    prop: 10,
    getProp: function() {
        return this.prop;
    }
};
const getIt = obj.getProp;
console.log(getIt());
```

**Output:**
```
undefined
```

**Explanation:** `getIt` is called without an object context, so `this` is `undefined` (or `window` in non-strict mode).

---

## Question 11
```javascript
const user = {
    name: "Bob",
    greet: () => {
        console.log(`Hello, my name is ${this.name}`);
    }
};
user.greet();
```

**Output:**
```
Hello, my name is undefined
```

**Explanation:** Arrow functions do not have their own `this`; they inherit from the parent scope, which is not the `user` object.

---

## Question 12
```javascript
const data = {
    value: 5,
    double: () => {
        return this.value * 2;
    }
};
console.log(data.double());
```

**Output:**
```
NaN
```

**Explanation:** Again, arrow functions do not have their own `this`, so `this.value` is `undefined`, and `undefined * 2` is `NaN`. 