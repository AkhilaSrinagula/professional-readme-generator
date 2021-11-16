// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

const promptUser = () => {
  return inquirer.prompt(questions);
};
// TODO: Create an array of questions for user input
const questions = [
  {
    message: "Enter the title or Name of your project? (Required)",
    type: "input",
    name: "title",
  },
  {
    message: "What is the Author's name?",
    type: "input",
    name: "title",
  },
  {
    message: "Enter your GitHub Username?",
    type: "input",
    name: "username",
  },
  {
    message: "Enter the GitHub URL for the project?",
    type: "input",
    name: "repoURL",
  },
  {
    message: "What is your email address?",
    type: "input",
    name: "email address",
  },
  {
    message: "Enter a brief description of your project?",
    type: "input",
    name: "description",
  },
  {
    message: "Choose the license that applies to the Project?",
    type: "list",
    choices: ["Apache", "CC", "GPLv3", "GPLv2", "ISC", "MIT", "WTFPL", "None"],
    name: "license",
  },
  {
    message: "What command should be run to install dependencies?",
    type: "input",
    name: "installation",
  },
  {
    message: "Enter any test instruction for the project?",
    type: "input",
    name: "tests",
  },
  {
    message: "Enter the instructions on how to use the project?",
    type: "input",
    name: "usage",
  },
  {
    message: "What is the copyright year?",
    type: "input",
    name: "year",
  },
  {
    message: "What needs to be known about contributing to the Project?",
    type: "input",
    name: "contributing",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if(err) throw err
        console.log("Success! Information transferred to the README!")
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(promptUser)
    .then(function (userInput) {
        console.log(userInput)
        writeToFile("README.md", generateMarkdown(userInput));
    });
};

// Function call to initialize app
init();
