const express = require("express");
const app = express();
const array = [
  {
    id: 1,
    name: "Shubham",
    r: "london",
  },
  {
    id: 2,
    name: "Parth",
    r: "london",
  },
  {
    id: 3,
    name: "Pratik",
    r: "zhmerynca",
  },
];

const port = 5500;
app.get("/multiply", (request, response) => {
  let value1 = request.query.value1;
  let value2 = request.query.value2;

  let multiplyValues = value2 * value1;
  response.send(multiplyValues);

  console.log(multiplyValues);
});

app.listen(port, function () {
  console.log("Server is listening on port 300. Ready to accept requests!");
});
