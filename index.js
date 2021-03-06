// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");'/'

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is your GitHub username?",
    name: "username",
    validate: (answer) => {
      if (answer.length < 1) {
        return console.log("Enter a valid username");
      }
      return true;
    },
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "email",
    validate: (answer) => {
      if (answer.length < 1) {
        return console.log("Enter a valid email address");
      }
      return true;
    },
  },
  {
    type: "input",
    message: "What is your project's title?",
    name: "title",
    validate: (answer) => {
      if (answer.length < 1) {
        return console.log("Enter a valid title");
      }
      return true;
    },
  },
  {
    type: "input",
    message: "What is your user story?",
    name: "userStory",
  },
  {
    type: "input",
    message: "Please, write a short description of your project",
    name: "description",
  },
  {
    type: "input",
    message: "What command should be run to install dependencies?",
    name: "installation",
  },
  {
    type: "input",
    message: "What does the user need to know about using the repo?",
    name: "usage",
  },
  {
    type: "list",
    message: "What kind of license should your project have? (Use arrow keys)",
    name: "license",
    choices: ["MIT", "APACHE", "APACHE 2", "BSD", "GPL", "None"],
    
  },
  {
    type: "list",
    message: "License color? (Use arrow keys)",
    name: "color",
    choices: ["green", "blue", "lightgrey", "yellow", "9cf", "None"],
    
  },
  {
    type: "input",
    message: "What does the user need to know about contributing to the repo?",
    name: "contributing",
  },
  {
    type: "input",
    message: "What command should be run to run tests?",
    name: "tests",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, answers) {
  fs.writeFile(fileName, answers, function (err) {
    console.log(fileName),
      console.log(answers),
      err ? console.error(err) : console.log("Written to file...");
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    writeToFile("README.md", generateMarkdown(answers));
    console.log(answers);
  });
}

// Function call to initialize app
init();
