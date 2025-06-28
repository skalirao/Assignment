# Section 2: Debugging Common Mistakes - Solutions

## Problem 1: Property with Space in Name

**Original Code:**
```javascript
const movie = { "movie title": "Inception", director: "Christopher Nolan" };
console.log(movie.movie title);
```

**Mistake:** Cannot use dot notation for property names with spaces.

**Correction:**
```javascript
const movie = { "movie title": "Inception", director: "Christopher Nolan" };
console.log(movie["movie title"]);
```

**Explanation:** Use bracket notation for property names with spaces or special characters.

---

## Problem 2: `this` Context in setTimeout

**Original Code:**
```javascript
const counter = {
    count: 0,
    increment: function() {
        setTimeout(function() {
            this.count++; // 'this' is not what you expect here
            console.log(this.count);
        }, 100);
    }
};
counter.increment();
```

**Mistake:** `this` inside `setTimeout` refers to the global object, not `counter`.

**Correction 1 (Arrow Function):**
```javascript
const counter = {
    count: 0,
    increment: function() {
        setTimeout(() => {
            this.count++;
            console.log(this.count);
        }, 100);
    }
};
counter.increment();
```

**Correction 2 (bind):**
```javascript
const counter = {
    count: 0,
    increment: function() {
        setTimeout(function() {
            this.count++;
            console.log(this.count);
        }.bind(this), 100);
    }
};
counter.increment();
```

**Correction 3 (that/self variable):**
```javascript
const counter = {
    count: 0,
    increment: function() {
        const that = this;
        setTimeout(function() {
            that.count++;
            console.log(that.count);
        }, 100);
    }
};
counter.increment();
```

---

## Problem 3: Using forEach on Object

**Original Code:**
```javascript
const scores = { math: 90, science: 85, history: 75 };
scores.forEach((value, key) => {
    console.log(`${key}: ${value}`);
});
```

**Mistake:** Objects do not have `forEach` method.

**Correction 1 (Object.entries):**
```javascript
const scores = { math: 90, science: 85, history: 75 };
Object.entries(scores).forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
});
```

**Correction 2 (for...in loop):**
```javascript
const scores = { math: 90, science: 85, history: 75 };
for (let key in scores) {
    console.log(`${key}: ${scores[key]}`);
}
```

**Correction 3 (Object.keys):**
```javascript
const scores = { math: 90, science: 85, history: 75 };
Object.keys(scores).forEach(key => {
    console.log(`${key}: ${scores[key]}`);
});
```

---

## Problem 4: Modifying "Constant" Object Properties

**Original Code:**
```javascript
const CONFIG = {
    API_KEY: "abc123",
    MAX_RETRIES: 5
};
CONFIG.API_KEY = "new_key"; // This is allowed!
console.log(CONFIG.API_KEY);
```

**Mistake:** `const` only prevents reassignment of the variable, not modification of object properties.

**Solution 1 (Object.defineProperty):**
```javascript
const CONFIG = {
    API_KEY: "abc123",
    MAX_RETRIES: 5
};

Object.defineProperty(CONFIG, "API_KEY", {
    writable: false,
    configurable: false
});

// Now this will throw an error in strict mode or fail silently
CONFIG.API_KEY = "new_key"; // TypeError in strict mode
```

**Solution 2 (Object.freeze):**
```javascript
const CONFIG = {
    API_KEY: "abc123",
    MAX_RETRIES: 5
};

Object.freeze(CONFIG);

// Now this will throw an error in strict mode or fail silently
CONFIG.API_KEY = "new_key"; // TypeError in strict mode
CONFIG.NEW_PROP = "value"; // TypeError in strict mode
```

**Solution 3 (Object.seal):**
```javascript
const CONFIG = {
    API_KEY: "abc123",
    MAX_RETRIES: 5
};

Object.seal(CONFIG);

// This will still work (modifying existing properties)
CONFIG.API_KEY = "new_key";

// But this will fail (adding new properties)
CONFIG.NEW_PROP = "value"; // TypeError in strict mode
```

**Explanation:**
- `Object.freeze()` makes the object completely immutable
- `Object.seal()` prevents adding/removing properties but allows modifying existing ones
- `Object.defineProperty()` with `writable: false` makes specific properties read-only 