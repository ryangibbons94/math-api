const { response } = require("express");
const express = require("express");
const app = express();
const PORT = 8000;
let random = Math.random();

const rappers = {
  "21 savage": {
    birthName: random,
    birthLocation: "London, England",
    age: 29,
  },
  "chance the rapper": {
    birthName: "Chancelor Johnathan Bennett",
    birthLocation: "Chicago, Illinois,",
    age: 29,
  },
  unknown: {
    birthName: "Unknown",
    birthLocation: "Unknown,",
    age: 0,
  },
};

app.get("/", (request, response) => {
  response.sendFile(__dirname + "/index.html");
});

app.get("/api/:name", (request, response) => {
  const rapperName = request.params.name.toLowerCase();
  if (rappers[rapperName]) {
    response.json(rappers[rapperName]);
  } else {
    response.json(rappers["unknown"]);
  }
});

app.listen(process.env.PORT || PORT, () => {
  console.log(
    `the server is now running on port ${PORT}, you better go catch it`
  );
});
