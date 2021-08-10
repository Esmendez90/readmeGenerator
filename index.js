// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is your GitHub username?",
    name: "username",
    validate: (answer) =>
      answer.length < 2 ? console.log("Enter a valid username") : true,
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "email",
    validate: (answer) =>
      answer.length < 2 ? console.log("Enter a valid username") : true,
  },
  {
    type: "input",
    message: "What is your project's title?",
    name: "title",
    validate: (answer) =>
      answer.length < 2 ? console.log("Enter a valid username") : true,
  },
  {
    type: "confirm",
    message: "Do you want to add a user story?",
    name: "userStory",
  },
  {
    type: "input",
    message: "Enter user story",
    name: "story",
    when: (answers) => answers.userStory === true,
  },
  {
    type: "confirm",
    message: "Do you want to add a description?",
    name: "description",
  },
  {
    type: "input",
    message: "Enter description",
    name: "project_description",
    when: (answers) => answers.description === true,
  },
  {
    type: "confirm",
    message: "Do you want to add a requirements field?",
    name: "requirements",
  },
  {
    type: "input",
    message: "Add requirements",
    name: "project_requirements",
    when: (answers) => answers.requirements === true,
  },
  {
    type: "confirm",
    message: "Do you want to add a license?",
    name: "license",
  },
  {
    type: "input",
    message: "Enter license name",
    name: "license_name",
    when: (answers) => answers.license === true,
  },
  {
    type: "confirm",
    message: "Do you want to add a link to your application",
    name: "link",
  },
  {
    type: "input",
    message: "Enter link to application",
    name: "app_link",
    when: (answers) => answers.link === true,
  },
  {
    type: "input",
    message: "What tools did you use to build this project",
    name: "tools",
  },
];

// TODO: Create a function to write README file
// function writeToFile(fileName, answers) {
//   fs.writeFile(fileName, answers, function (err) {
//     console.log(fileName),
//       console.log(answers),
//       err ? console.error(err) : console.log("Written to file...");
//   });
// }

function writeToFile(answers) {
  fs.writeFile("README.md", answers, function (err) {
      console.log(answers),
      err ? console.error(err) : console.log("Written to file...");
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    console.log(answers);
    writeToFile(answers);
  
    //writeToFile("README.md", generateMarkdown(answers));
  });
}

// Function call to initialize app
init();
