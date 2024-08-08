// 1.Creating object and accessing the properties with dot notation
// const books = {
//     title: "harry-potter",
//     author: "Rajiv",
//     available: true,
//     price: 100
// }
// Accessing the properties with dot notation
// console.log(books.title)
// console.log(books.author)
// console.log(books.available)
// console.log(books.price)


// 2.Creating object and accessing the properties with square bracket notation
// const books = {
//     title: "harry-potter",
//     author: "Rajiv",
//     available: true,
//     price: 100
// }
// Accessing the properties with square bracket notation
// const bookPrice = books["price"]
// console.log(bookPrice)

// console.log(books['title'])


// 3.Creating object and Adding properties to objects
// const books = {
//     title: "harry-potter",
//     author: "Rajiv",
//     available: true,
//     price: 100
// }
// // Adding properties to the object with dot notation
// books.userName = "raju";
// books.userEmail = "mahirjv@gmail.com"

// console.log(books)


// 4.Creating object and Adding properties to objects
// const books = {
//     title: "harry-potter",
//     author: "Rajiv",
//     available: true,
//     price: 100
// }
// // Adding properties to the object with square bracket notation
// books["userName"] = "raju";
// books['userEmail'] = "mahirjv@gmail.com"

// console.log(books)


// 5.Creating object and Adding nested properties to objects
// const books = {
//     title: "harry-potter",
//     author: "Rajiv",
//     available: true,
//     price: 100
// }
// // Adding nested properties
// books.contents = {
//     mountains: "geography",
//     mughals: "history",
//     sound: "physics"
// }

// console.log(books)


// 6.Creating object, Adding nested properties and accessing the properties of nested objects
// const books = {
//     title: "harry-potter",
//     author: "Rajiv",
//     available: true,
//     price: 100
// }
// // Adding nested object and accessing its properties
// books.contents = {
//     mountains: "geography",
//     mughals: "history",
//     sound: "physics"
// }

// console.log(books.contents.mountains)


// 7.Creating function with paramenters and arguments
// const greetings = function (name, age) {
//     console.log(`Welcome ${name} and your age is ${age}`);
// }

// greetings("rajiv kumar", 35);
// greetings("rahul kumar", 30);


// 8.Creating a function to add any two number
// const addTwoNumber = function (a, b) {
//     const result = a + b;
//     console.log(result);
// }

// addTwoNumber(4, 6);


// 9.Creating a function wit default parameters
// const greet = function (name = "rajiv kumar", age = 35) {
//     console.log(`Hello ${name} and your age is ${age}`)
// }

// greet()


// 10.Destructuring the arrays
// const numbers = [1, 2, 3, 4, 105];
// const [first, second, third, fourth, fifth] = numbers;
// console.log(first);
// console.log(fifth);
// console.log(numbers[3]);


// 11.
// const userData = {
//     id: 1,
//     info: {
//         name: "rajiv kumar",
//         age: 34,
//     },
// }
// console.log(userData.info.name)

// 11.1
// const {
//     id,
//     info: { name, age },
// } = {
//     id: 1,
//     info: {
//         name: "rajiv",
//         age: "34",
//     },
// };

// console.log(age);



// 12. Map method of javascript
// const shoppingCart = [
//     { name: "laptop", price: 1000, qty: 1 },
//     { name: "tv", price: 10000, qty: 12 },
//     { name: "radio", price: 5000, qty: 21 },
//     { name: "walkmen", price: 4000, qty: 3 },
// ];

// const discountedCart = shoppingCart.map((product) => {
//     return {
//         name: product.name,
//         price: product.price * 0.9,
//     }
// });

// console.log(discountedCart)


// 13.Filter method of javascript
// const users = [
//     {
//         id: 1,
//         isActive: false,
//         name: "Rajiv",
//     },
//     {
//         id: 2,
//         isActive: false,
//         name: "Rohan",
//     },
//     {
//         id: 3,
//         isActive: true,
//         name: "Rakesh",
//     },
//     {
//         id: 4,
//         isActive: false,
//         name: "Ramesh",
//     },
//     {
//         id: 5,
//         isActive: true,
//         name: "Ronny",
//     },
// ];

// const activeUsers = users.filter((user) => {
//     return user.isActive === true;
// })

// console.log(activeUsers)


// 13.1 Filter method of javascript
// const transactions = [
//     { id: 1, amount: 10 },
//     { id: 2, amount: 20 },
//     { id: 3, amount: 30 },
//     { id: 4, amount: 40 },
// ];

// const largeTransactions = transactions.filter(
//     (transaction) => transaction.amount > 20);

// console.log(largeTransactions)


// 14.Splice method of javascript




console.log(window.innerHeight);

console.log(window.location);
console.log(window.history);
console.log(window.navigator);
window.prompt();
