// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const axios = require("axios");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

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
    choices: ["MIT", "APACHE 2.0", "BSD 3", "GPL 3.0", "None"],
    
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
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, function (err) {
    console.log(fileName),
      console.log(data),
      err ? console.error(err) : console.log("Written to file...");
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((data) => {
    writeToFile("README.md", generateMarkdown(data));
    console.log(data);
  });
}

// Function call to initialize app
init();
