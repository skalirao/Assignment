/*Section 1: Confusing Object Output Questions
1.	Output: False False
Reasoning: Two separate objects even with same content are not the same in memory because objects are checked by reference and value in Javascript, so both == and === return false.

2.	Output: True True
Reasoning: Both objA and objB point to the same object in memory, so they are equal in both loose and strict comparison.

3.	Output: 20
Reasoning: Both variables reference the same object, so changes reflect through any reference.

4.	Output: Object is truthy
Reasoning: All non-null objects are truthy, even empty ones.

5.	Output: [object Object]
Reasoning: JS parses this as a block {} followed by +[] → which becomes +"" → 0. It is NOT interpreted as object + array.

6.	Output: [object Object] 
Reasoning: 
[ ] → "" (empty string)
{ } → "[object Object]"
Concatenation gives: "" + "[object Object]" → "[object Object]"
7.	Output: [object Object][object Object]
Reasoning: Both objects are coerced to strings:
•	x → "[object Object]"
•	y → "[object Object]"
Concatenation: "[object Object][object Object]"
8.	Output: Alice
Reasoning: Computed property [key] becomes "name" → so person.name exists.
9.	Output: 30
Reasoning: Computed property works again: info["age"] = 30.

10.	Output: undefined
Reasoning: getIt loses its context (this), which defaults to undefined in strict mode or window in non-strict.

11.	Output: Hello, my name is undefined
Reasoning: Arrow functions don’t bind their own this. Here, this refers to the global object, not user.

12.	Output: NaN
Reasoning: Arrow functions don’t have their own this, so this.value is undefined, and undefined * 2 = NaN.

Section 2: Output Prediction

1.	Output: 2023 undefined
Reasoning: car.year was updated to 2023, so it reflects the new value. car.color was never defined, so it returns undefined.

2.	Output: 3
{ name: "Eve", course: "Computer Science" }
Reasoning: After adding course, the object has 3 keys. Then age is deleted, leaving just name and course.

3.	Output: title: 1984
author: George Orwell
Reasoning: for...in loops through all enumerable properties in the object.

4.	Output: { volume: 50, brightness: 90, mode: "dark" }
{ volume: 50, brightness: 80 }
Reasoning: The spread operator copies settings into newSettings. Then brightness is overwritten and mode is added. Original settings remains unchanged.

5.	Output: Thriller by Michael Jackson, released in 1982.
Reasoning: this inside the getDetails method refers to the album object, so it correctly accesses the properties.

Section 3: Debugging Common Mistakes

1.	Error: You can’t use dot notation with property names that have spaces.
Fix: console.log(movie["movie title"]);

2.	Error: Inside Timeout, ‘this’ refers to global object
Fix: Use arrow function
 setTimeout(() => {  
 this.count++;
 console.log(this.count);
 }, 100);

3.	Error: forEach works only on arrays, not plain objects.
Fix: Object.values(scores).forEach(score => console.log(score));

4.	Error: const prevents reassignment of the variable CONFIG, but does not freeze the contents of the object.
Fix: Object.freeze(CONFIG);

Section 4: Real-World Problem Solving
*/

//1.User Profile Manager
const user = {
    username: "sahiljit",
    email: "sahil@email.com",
    age: 51,
    isActive: true,
    roles: ["user"]
}
console.log(user)

user.email = "sahiljit.k@email.com";

user.isActive = !user.isActive;

(function addRole(role) {
    if (!user.roles.includes(role)) {
        user.roles.push(role);
    }
})("admin");

(function removeRole(role) {
    user.roles = user.roles.filter(r => r !== role);
})("user");

function hasRole(role) {
    return user.roles.includes(role);
}

(function displayProfile() {
    console.log("User Profile:", user);
})();

//2. Product Catalog
const catalog = [
    { id: 1, name: "Macbook", price: 100, stock: 3, categories: ["electronics", "computing"] },
    { id: 2, name: "Notebook", price: 25, stock: 1, categories: ["stationery"] },
    { id: 3, name: "Pencil", price: 2, stock: 100, categories: ["stationery"] }
  ];
  
  (function addProduct(product) {
    catalog.push(product);
  })({ id: 4, name: "Mouse", price: 25, stock: 10, categories: ["electronics"] });
  
  function findProductById(id) {
    return catalog.find(product => product.id === id);
  }
  console.log("Find Product (id=2):", findProductById(2));
  
  (function updateStockById(id, newStock) {
    const product = findProductById(id);
    if (product) {
      product.stock = newStock;
    }
  })(2, 20); 
  
  function filterByCategory(category) {
    return catalog.filter(product => product.categories.includes(category));
  }
  console.log("Filtered (electronics):", filterByCategory("electronics"));
  
  function getTotalInventoryValue() {
    return catalog.reduce((total, product) => total + (product.price * product.stock), 0);
  }
  console.log("Total Inventory Value:", getTotalInventoryValue());
  
  function getOutOfStockProducts() {
    return catalog.filter(product => product.stock === 0);
  }
  console.log("Out of Stock Products:", getOutOfStockProducts());
  
  console.log("Final Product Catalog:", catalog);

  //3. Blog Post System
  const blogPosts = [
    {
      id: 1,
      title: "Intro to JavaScript",
      content: "JavaScript is a powerful scripting language.",
      author: "sahiljit",
      tags: ["javascript", "web"],
      comments: [
        { commentId: 101, user: "dev01", text: "Great article!" },
        { commentId: 102, user: "reader99", text: "Helpful, thanks!" }
      ]
    },
    {
      id: 2,
      title: "CSS Tips",
      content: "Make your UI stand out with these CSS tricks.",
      author: "alex",
      tags: ["css", "design"],
      comments: []
    }
  ];
  
  function addBlogPost(post) {
    blogPosts.push(post);
  }
  
  function addCommentToPost(postId, comment) {
    const post = blogPosts.find(p => p.id === postId);
    if (post) {
      post.comments.push(comment);
    }
  }
  
  function findPostsByAuthor(authorName) {
    return blogPosts.filter(post => post.author === authorName);
  }
  
  function findPostsByTag(tag) {
    return blogPosts.filter(post => post.tags.includes(tag));
  }
  
  function deleteComment(postId, commentId) {
    const post = blogPosts.find(p => p.id === postId);
    if (post) {
      post.comments = post.comments.filter(c => c.commentId !== commentId);
    }
  }
  
  function countComments(postId) {
    const post = blogPosts.find(p => p.id === postId);
    return post ? post.comments.length : 0;
  }
  
 console.log(blogPosts)
  

