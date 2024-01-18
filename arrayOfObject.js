// ??????????????? Array of object ?????????????????????????????

// 1. Count the total value

// let data  = [
//     { value: 10 },
//     { value: 20 },
//     { value: 30 },
//   ];

// function operation(data){
//     return data.reduce((sum, obj) =>  sum + obj.value, 0)
// }

// console.log(operation(data));

// ------------------------------------------------------------------------------------------

// 2. Calculate Total Expense

// const data = [
//   { description: "Groceries", amount: 50.0 },
//   { description: "Dining Out", amount: 30.0 },
//   { description: "Utilities", amount: 70.0 },
// ];

// function operation(data){
//     return data.reduce((sum, obj) => sum + obj.amount ,0)
// }

// console.log(operation(data))

// ------------------------------------------------------------------------------------------

// 3. Calculate the total cost of all products.

// const data = [
//   { product: "Laptop", quantity: 2, price: 800.0 },
//   { product: "Mouse", quantity: 5, price: 20.0 },
//   { product: "Headphones", quantity: 1, price: 50.0 },
// ];

// function operation(data){
//     return data.reduce((sum, obj) => sum + obj.price * obj.quantity , 0)
// }

// console.log(operation(data))

// ------------------------------------------------------------------------------------------

// 4. Calculate the average exam score.

// const data = [
//   { name: "Alice", score: 90 },
//   { name: "Bob", score: 78 },
//   { name: "Charlie", score: 92 },
// ];

// function operation(data){
//     return data.reduce((sum, obj) => sum + obj.score / data.length, 0)
// }

// console.log(operation(data))

// ------------------------------------------------------------------------------------------

// 5. Calculate the total cost including shipping for all orders.

// const data = [
//   { orderNumber: "ABC123", total: 100.0, shippingCost: 5.0 },
//   { orderNumber: "XYZ789", total: 200.0, shippingCost: 15.0 },
//   { orderNumber: "DEF589", total: 150.0, shippingCost: 10.0 },
//   { orderNumber: "JKL600", total: 250.0, shippingCost: 13.0 },
// ];

// function operation(data) {
//     return data.reduce((sum, obj) => sum + obj.total + obj.shippingCost , 0)
// }

// console.log(operation(data));

// ------------------------------------------------------------------------------------------

// 6. Calculate the final account balance.

// const data = [
//   { transactionType: "credit", amount: 100.0 },
//   { transactionType: "debit", amount: 30.0 },
//   { transactionType: "credit", amount: 50.0 },
//   { transactionType: "debit", amount: 20.0 },
// ];

// function operation(data) {
//   const totalBalance = data.reduce((sum, obj) => {
//     return obj.transactionType === "credit"
//       ? sum + obj.amount
//       : sum - obj.amount;
//   }, 0);
//   return totalBalance;
// }

// console.log(operation(data));

// ------------------------------------------------------------------------------------------

// 7. Calculate the maximum salary of an employee.

// const data = [
//   { name: "Alice", salary: 70000 },
//   { name: "Bob", salary: 80000 },
//   { name: "Charlie", salary: 75000 },
//   { name: "Adam", salary: 60000 },
// ];

// function operation(data) {
//   let max = 0;
//   data.reduce((sum, obj) => {
//     max < obj.salary ? (max = obj.salary) : max;
//   }, 0);
//   return max;
// }

// console.log(operation(data));

// ------------------------------------------------------------------------------------------

// 8. Calculate the total pages

// const data = [
//   { title: "Book A", author: "Author X", pages: 200 },
//   { title: "Book B", author: "Author Y", pages: 150 },
//   { title: "Book C", author: "Author Z", pages: 250 },
//   { title: "Book D", author: "Author A", pages: 300 },
// ];

// function operation(data){
//     return data.reduce((sum, obj) => sum + obj.pages, 0)
// }

// console.log(operation(data))

// ------------------------------------------------------------------------------------------

// 9. Count the number of students enrolled in each course.

// const data = [
//   { name: "Alice", courses: ["Math", "History"] },
//   { name: "Bob", courses: ["Science", "History"] },
//   { name: "Charlie", courses: ["Math", "Science"] },
// ];

// function operation(data) {
//   return data.reduce((courseCounts, student) => {
//     student.courses.forEach((course) => {
//       courseCounts[course] = (courseCounts[course] || 0) + 1;
//     });
//     return courseCounts;
//   }, {});
// }

// console.log(operation(data));

// ------------------------------------------------------------------------------------------

// 10.  Calculate the total number of hours worked by all employees for the week.

// const data = [
//   { name: "Alice", hoursWorked: [8, 6, 7, 9, 8, 5, 10] },
//   { name: "Bob", hoursWorked: [7, 7, 8, 5, 6, 9, 8] },
//   { name: "Charlie", hoursWorked: [9, 8, 6, 5, 7, 8, 10] },
// ];

// function operation(data) {
//   return data.reduce((sumHours, emp) => {
//     emp.hoursWorked.forEach((hour) => {
//       sumHours[emp.name] = (sumHours[emp.name] || 0) + hour;
//     });
//     return sumHours;
//   }, {});
// }

// console.log(operation(data));

// ------------------------------------------------------------------------------------------

// 11.  Calculate the total sales quantity for all products across all months.

// const data = [
//   { product: "Laptop", sales: [20, 30, 25, 15, 18] },
//   { product: "Phone", sales: [10, 15, 12, 8, 20] },
//   { product: "Tablet", sales: [15, 10, 8, 5, 12] },
// ];

// function operation(data) {
//   return data.reduce((totalSale, products) => {
//     products.sales.forEach((sale) => {
//       totalSale[products.product] = (totalSale[products.product] || 0) + sale;
//     });
//     return totalSale;
//   }, {});
// }

// console.log(operation(data));

// ------------------------------------------------------------------------------------------

// 12.  Calculate the total expenses for each category.

// const data = [
//   { category: "Food", amount: 50 },
//   { category: "Travel", amount: 30 },
//   { category: "Food", amount: 20 },
//   { category: "Utilities", amount: 70 },
//   { category: "Travel", amount: 50 },
// ];

// function operation(data) {
//   return data.reduce((acc, cur) => {
//     acc[cur.category] = (acc[cur.category] || 0) + cur.amount;
//     return acc;
//   }, {});
// }

// console.log(operation(data));

// ------------------------------------------------------------------------------------------

// 13.  Calculate the total duration for each task.

// const data = [
//   { name: "Task A", duration: 4 },
//   { name: "Task B", duration: 2 },
//   { name: "Task A", duration: 3 },
//   { name: "Task C", duration: 5 },
//   { name: "Task B", duration: 1 },
// ];

// function operation() {
//   return data.reduce((acc, cur) => {
//     acc[cur.name] = (acc[cur.name] || 0) + cur.duration;
//     return acc;
//   });
// }

// console.log(operation(data));
// ------------------------------------------------------------------
// 14. Count the total languages

// let data = [
//   { language: "JavaScript" },
//   { language: "JavaScript" },
//   { language: "TypeScript" },
//   { language: "C++" },
// ];

// function operation(data){
//      return data.reduce((acc, obj) => {
//        acc[obj.language] = (acc[obj.language] || 0 ) + 1
//       return acc;
//     }, {})
// }

// console.log(operation(data))

// ?????? With a Count Key ???????
// let data = [
//     { language: 'JavaScript' }, 
//     { language: 'JavaScript' }, 
//     { language: 'TypeScript' }, 
//     { language: 'C++' }
// ]

// function operation(data){
//      return Object.entries(data.reduce((acc, obj) => {
//         acc[obj.language] = (acc[obj.language] || 0) + 1;
//         return acc;
//     }, {})).map(([language, count]) => ({ language, count }));
// }

// console.log(operation(data))

// Interview Asked question

// const emp = [
//   { name: "a", sal: 200 },
//   { name: "b", sal: 200 },
//   { name: "a", sal: 500 },
//   { name: "b", sal: 200 },
//   { name: "c", sal: 300 },
// ];

// function operation(data){
//      return data.reduce((acc, cur) => {
//          acc[cur.name] = (acc[cur.name] || 0 ) + cur.sal
//          return acc;
//      }, {})
// }

// console.log(operation(emp))
