// const express = require("express");
// const app = express();
// const userRoutes = require("./routes/userRoutes")




// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));


// app.use("/api/v1/users", userRoutes)

// // app.use("/api/v1/", userRoutes);


// const port = process.env.PORT || 5000;


// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });












// 1. Callback function
// 2. Promise
// 3. Async/await


console.log("Start");


async function fetchTodo() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const json = await response.json();
  console.log(json);
}
fetchTodo();








