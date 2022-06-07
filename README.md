# Math Question API

A REST API that returns math questions with randomized numbers. The cactegories of questions are:

Angles in a Triangle - "Two angles in a triangle are 105 degrees and 27 degrees, what is the measure of the third angle?"

Questions Regarding Which Two Perfect Squares the Square Root of a Non-Perfect Square is Between - "Which two whole numbers is the square root of 24 between?"

Two-Step Equation - "What is the value of x? 13x+33=72"

Simple Square Root Question - "What is the square root of 225?"

Question Regarding Whether an Equation Respresents a Proportional or Non-Proportional Relationship - "Does the equation y=6x represent a proportional relationship?"

**Link to frontend that uses this API:** https://math-quiz-app.netlify.app/

## Endpoints

https://firstserverrg.herokuapp.com/api - returns JSON of a random question from each question type available. Example Below:

```json{
    "triangle": {
        "question": "Two angles in a triangle are 105 degrees and 27 degrees, what is the measure of the third angle?",
        "correctAnswer": 48,
        "answers": [
            48,
            74,
            18,
            41
        ]
    },
    "betweenTwoSquares": {
        "question": "Which two whole numbers is the square root of 24 between?",
        "correctAnswer": "4 and 5",
        "answers": [
            "4 and 5",
            "6 and 7",
            "5 and 6",
            "3 and 4"
        ]
    },
    "equation": {
        "question": "What is the value of x? 13x+33=72",
        "correctAnswer": 3,
        "answers": [
            3,
            10,
            40,
            72
        ]
    },
    "proportional": {
        "question": "Does the equation y=9x represent a proportional relationship?",
        "correctAnswer": "Yes",
        "answers": [
            "Yes",
            "No",
            "Maybe",
            "None of the above"
        ]
    }
}
```
https://firstserverrg.herokuapp.com/api/:name - If you replace ':name' with one of the names of the questions listed above, it will return a random question from just that question type.

https://firstserverrg.herokuapp.com/api/random - This will return a random question from the available options of questions.

## How It's Made:

**Tech used:** Node.js, Express

## Optimizations
If I had time I would add better documentation in the index.html file so that other developers could use this API appropriately. 


