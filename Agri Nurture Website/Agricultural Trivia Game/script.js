//References
let timeLeft = document.querySelector(".time-left");
let quizContainer = document.getElementById("container");
let nextBtn = document.getElementById("next-button");
let countOfQuestion = document.querySelector(".number-of-question");
let displayContainer = document.getElementById("display-container");
let scoreContainer = document.querySelector(".score-container");
let restart = document.getElementById("restart");
let userScore = document.getElementById("user-score");
let startScreen = document.querySelector(".start-screen");
let startButton = document.getElementById("start-button");
let questionCount;
let scoreCount = 0;
let count = 11;
let countdown;

//Questions and Options array

const quizArray = [
    {
      id: "0",
      question: "Which of the following is the commercial crop in India?",
      options: ["Mustard", "Tobacco", "Jute", "All of the above"],
      correct: "All of the above"
    },
    {
      id: "1",
      question: "Which Indian state produces the largest quantity of pulses?",
      options: ["Maharashtra", "Uttar Pradesh", "Madhya Pradesh", "Rajasthan"],
      correct: "Madhya Pradesh"
    },
    {
      id: "2",
      question: "What is the correct descending order of rice producing states in India?",
      options: ["Punjab, West Bengal, Uttar Pradesh And Andhra Pradesh", "Punjab, West Bengal, Uttar Pradesh And Andhra Pradesh", "Punjab, West Bengal, Uttar Pradesh And Andhra Pradesh", "West Bengal, Uttar Pradesh, Punjab, And Andhra Pradesh"],
      correct: "West Bengal, Uttar Pradesh, Punjab, And Andhra Pradesh"
    },
    {
      id: "3",
      question: "What is the correct descending order of food grain producing states?",
      options: ["Uttar Pradesh, Punjab, Madhya Pradesh And West Bengal", "Punjab, Uttar Pradesh, Madhya Pradesh And West Bengal", "Uttar Pradesh, Punjab, West Bengal And Madhya Pradesh", "Uttar Pradesh, Madhya Pradesh, Punjab, And West Bengal"],
      correct: "Uttar Pradesh, Punjab, Madhya Pradesh And West Bengal"
    },
    {
      id: "4",
      question: "Which of the following is not matched correctly?",
      options: ["Rabi Crop………Mustard, Cucumber", "Rabi Crop………Mustard, Barley", "Zaid Crop………Moong, vegetables", "Kharif Crop…..Cotton"],
      correct: "Rabi Crop………Mustard, Cucumber"
    },
    {
      id: "5",
      question: "Which of the following statement is not correct?",
      options: ["India is the second largest producer of fruits in the world.", "India is the biggest producer of vegetables in the world.", "Production of fruits, vegetables and spices called horticulture.", "Uttar Pradesh is the largest producer of the wheat in India."],
      correct: "India is the biggest producer of vegetables in the world."
    },
    {
      id: "6",
      question: "Which agency is responsible for procurement, distribution and storage of food grain production in India?",
      options: ["Ministry of Agriculture", "Food Corporation of India", "NAFED", "TRIFED"],
      correct: "Food Corporation of India"
    },
    {
      id: "7",
      question: "Who approves the Fair and Remunerative Price (FRP) of sugarcane?",
      options: ["Cabinet Committee on Economic Affairs", "Commission for Agricultural Costs and Prices", "Directorate of Marketing and Inspection, Ministry of Agriculture", "Agricultural Produce Market Committee"],
      correct: "Cabinet Committee on Economic Affairs"
    },
    {
      id: "8",
      question: "Who regulates the markets in agricultural products in India?",
      options: ["Essential Commodities Act, 1955", "Agricultural Produce Market Committee Act enacted by States", "Agricultural Produce (Grading and Marking) Act, 1937", "Food Products Order, 1956 and Meat and Food Products Order, 1973"],
      correct: "Agricultural Produce Market Committee Act enacted by States"
    },
    {
      id: "9",
      question: "Which of the following statement is not correct?",
      options: ["India is the second largest producer of fruits in the world.", "India is the biggest producer of vegetables in the world.", "Production of fruits, vegetables and spices called horticulture.", "Uttar Pradesh is the largest producer of the wheat in India."],
      correct: "India is the biggest producer of vegetables in the world."
    }
];

//Restart Quiz
restart.addEventListener("click", () => {
  initial();
  quizArray.sort(() => Math.random() - 0.5);
  displayContainer.classList.remove("hide");
  scoreContainer.classList.add("hide");
});

//Next Button
nextBtn.addEventListener(
  "click",
  (displayNext = () => {
    if (questionCount < quizArray.length - 1) {
      questionCount++;
      quizDisplay(questionCount);
      count = 11;
      clearInterval(countdown);
      timerDisplay();
    } else {
      displayContainer.classList.add("hide");
      scoreContainer.classList.remove("hide");
      userScore.innerHTML =
        "Your score is " + scoreCount + " out of " + quizArray.length;
    }
  })
);

//Timer
const timerDisplay = () => {
  countdown = setInterval(() => {
    count--;
    timeLeft.innerHTML = `${count}s`;
    if (count == 0) {
      clearInterval(countdown);
      displayNext();
    }
  }, 1000);
};

//Display quiz
const quizDisplay = (questionCount) => {
  let quizCards = document.querySelectorAll(".container-mid");
  //Hide other cards
  quizCards.forEach((card) => {
    card.classList.add("hide");
  });
  //display current question card
  quizCards[questionCount].classList.remove("hide");
};

//Quiz Creation
function quizCreator() {
  //randomly sort questions
  quizArray.sort(() => Math.random() - 0.5);
  //generate quiz
  for (let i of quizArray) {
    //randomly sort options
    i.options.sort(() => Math.random() - 0.5);
    //quiz card creation
    let div = document.createElement("div");
    div.classList.add("container-mid", "hide");
    //question number
    // countOfQuestion.innerHTML = 1 + " of " + quizArray.length + " Question";
    //question
    let question_DIV = document.createElement("p");
    question_DIV.classList.add("question");
    question_DIV.innerHTML = i.question;
    div.appendChild(question_DIV);
    //options
    div.innerHTML += `
    <button class="option-div" onclick="checker(this)">${i.options[0]}</button>
    <button class="option-div" onclick="checker(this)">${i.options[1]}</button>
    <button class="option-div" onclick="checker(this)">${i.options[2]}</button>
    <button class="option-div" onclick="checker(this)">${i.options[3]}</button>
    `;
    quizContainer.appendChild(div);
  }
}

//Checker Function to check if option is correct or not
function checker(userOption) {
  let userSolution = userOption.innerText;
  let question =
    document.getElementsByClassName("container-mid")[questionCount];
  let options = question.querySelectorAll(".option-div");

  //if user clicked answer == correct option stored in object
  if (userSolution === quizArray[questionCount].correct) {
    userOption.classList.add("correct");
    scoreCount++;
  } else {
    userOption.classList.add("incorrect");
    //For marking the correct option
    options.forEach((element) => {
      if (element.innerText == quizArray[questionCount].correct) {
        element.classList.add("correct");
      }
    });
  }

  //clear interval(stop timer)
  clearInterval(countdown);
  //disable all options
  options.forEach((element) => {
    element.disabled = true;
  });
}

//initial setup
function initial() {
  quizContainer.innerHTML = "";
  questionCount = 0;
  scoreCount = 0;
  count = 11;
  clearInterval(countdown);
  timerDisplay();
  quizCreator();
  quizDisplay(questionCount);
}

//when user click on start button
startButton.addEventListener("click", () => {
  startScreen.classList.add("hide");
  displayContainer.classList.remove("hide");
  initial();
});

//hide quiz and display start screen
window.onload = () => {
  startScreen.classList.remove("hide");
  displayContainer.classList.add("hide");
};
