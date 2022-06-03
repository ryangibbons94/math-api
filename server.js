const { response } = require("express");
const express = require("express");
const app = express();
const PORT = 8000;
const cors = require("cors");

app.use(cors());

function betweenTwoPerfectSquares() {
  let num = Math.floor(Math.random() * 400) ** 0.5;
  let min = Math.floor(num);
  let max = Math.ceil(num);
  return num === parseInt(num)
    ? betweenTwoPerfectSquares()
    : {
        question: `Which two whole numbers is the square root of ${Math.round(
          num ** 2
        )} between?`,
        correctAnswer: `${min} and ${max}`,
        answers: [
          `${min} and ${max}`,
          `${min + 2} and ${max + 2}`,
          `${min + 1} and ${max + 1}`,
          `${min - 1} and ${max - 1}`,
        ],
      };
}

function squareRootSimple() {
  let num1 = Math.ceil(Math.random() * 15);
  let num2 = num1 ** 2;
  let random = Math.floor(Math.random() * 2);
  return random > 0
    ? {
        question: `What is ${num1} squared?`,
        correctAnswer: num2,
        answers: [
          num2,
          num2 + Math.floor(Math.random() * 50),
          num2 + Math.floor(Math.random() * 50),
          num1 ** 0.5,
        ],
      }
    : {
        question: `What is the square root of ${num2}?`,
        correctAnswer: num1,
        answers: [
          num1,
          num1 + Math.floor(Math.random() * 5),
          num1 - Math.floor(Math.random() * 5),
          num2 ** 2,
        ],
      };
}

function missingAngle() {
  let num1 = Math.floor(Math.random() * 180);
  let num2 = Math.floor(Math.random() * (180 - num1));
  let num3 = 180 - num1 - num2;
  return num1 > 9 && num2 > 9 && num3 > 9
    ? {
        question: `Two angles in a triangle are ${num1} degrees and ${num2} degrees, what is the measure of the third angle?`,
        correctAnswer: num3,
        answers: [num3, num3 + 10, 180, Math.floor(Math.random() * 180)],
      }
    : missingAngle();
}

function proportionalOrNot() {
  let random = Math.floor(Math.random() * 2);
  let num1 = Math.ceil(Math.random() * 15);
  const num2 = Math.ceil(Math.random() * 80);
  if (random > 0) {
    return {
      question: `Does the equation y=${num1}x represent a proportional relationship?`,
      correctAnswer: "Yes",
      answers: ["Yes", "No", "Maybe", "None of the above"],
    };
  } else {
    return {
      question: `Does the equation y=${num1}x+${num2} represent a proportional relationship?`,
      correctAnswer: "No",
      answers: ["No", "Yes", "Maybe", "None of the above"],
    };
  }
}

function twoStepEquation() {
  let num1 = Math.ceil(Math.random() * 15);
  const num2 = Math.ceil(Math.random() * 80);
  let num3 = Math.ceil(Math.random() * 15);
  let random = Math.floor(Math.random() * 2);

  return random > 0
    ? {
        question: `What is the value of x? ${num1}x+${num2}=${
          num1 * num3 - num2
        }`,
        correctAnswer: num3,
        answers: [
          num3,
          num3 + Math.ceil(Math.random() * 15),
          num3 + Math.ceil(Math.random() * 50),
          num1 * num3 + num2,
        ],
      }
    : {
        question: `What is the value of x? ${num1}x-${num2}=${
          num1 * num3 + num2
        }`,
        correctAnswer: num3,
        answers: [
          num3,
          num3 + Math.floor(Math.random() * 15),
          num3 + Math.floor(Math.random() * 15),
          num1 * num3 - num2,
        ],
      };
}

app.get("/", (request, response) => {
  response.sendFile(__dirname + "/index.html");
});

app.get("/api/", (request, response) => {
  let betweenTwoSquares = betweenTwoPerfectSquares();
  let triangle = missingAngle();
  let equation = twoStepEquation();
  let squareRoot = squareRootSimple();
  let proportional = proportionalOrNot();
  const questions = {
    triangle: triangle,
    betweenTwoSquares: betweenTwoSquares,
    equation: equation,
    squareRoot: squareRoot,
    proportional: proportional,
  };

  response.json(questions);
});

app.get("/api/:name", (request, response) => {
  let betweenTwoSquares = betweenTwoPerfectSquares();
  let triangle = missingAngle();
  let equation = twoStepEquation();
  let squareRoot = squareRootSimple();
  let proportional = proportionalOrNot();
  const questions = {
    triangle: triangle,
    betweenTwoSquares: betweenTwoSquares,
    equation: equation,
    squareRoot: squareRoot,
    proportional: proportional,
  };
  const questiontype = request.params.name;
  if (questions[questiontype]) {
    response.json(questions[questiontype]);
  } else if (questiontype === "random") {
    var keys = Object.keys(questions);
    response.json(questions[keys[(keys.length * Math.random()) << 0]]);
  } else {
    response.json("not a question type");
  }
});

app.listen(process.env.PORT || PORT, () => {
  console.log(
    `the server is now running on port ${PORT}, you better go catch it`
  );
});
