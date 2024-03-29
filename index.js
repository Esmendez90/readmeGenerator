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
    default: "edmendez90",
    validate: (answer) =>
      answer.length < 2 ? console.log("Enter a valid username") : true,
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "email",
    default: "edmendezn@gmail.com",
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
    type: "input",
    message: "Enter user story",
    name: "story",
  },
  {
    type: "input",
    message: "Enter description",
    name: "project_description",
  },
  {
    type: "input",
    message: "Add requirements",
    name: "project_requirements",
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
    type: "input",
    message: "Enter current year",
    name: "year",
    when: (answers) => answers.license === true,
    validate: (answers) =>
      answers.length === 4 ? true : console.log("Enter a valid year"),
  },
  {
    type: "list",
    message: "Enter badge color",
    name: "badge_color",
    choices: ["blue", "green", "red", "yellow"],
    when: (answers) => answers.license === true,
  },
  {
    type: "input",
    message: "Enter your full name",
    name: "full_name",
    default: "Esteban Mendez",
    when: (answers) => answers.license === true,
  },
  {
    type: "input",
    message: "Enter link to application",
    name: "app_link",
  },
  {
    type: "input",
    message: "What tools did you use to build this project",
    name: "tools",
  },
];

// TODO: Create a function to write README file
function writeToFile(answers) {
  //const { username, email, title } = answers;
  fs.writeFile("README.md", generateMarkdown(answers), (err) =>
    err ? console.error(err) : console.log("Written to file...")
  );
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    console.log(answers);
    writeToFile(answers);
  });
}

// Function call to initialize app
init();
