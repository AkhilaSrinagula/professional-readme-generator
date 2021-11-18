//Packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");


// An array of questions for user input
const questions = [
  {
    message: "Enter the title or Name of your project? (Required)",
    type: "input",
    name: "title",
    validate: (titleInput) => {
      if (titleInput) {
        return true;
      } else {
        console.log("Please enter the title or Name of your project!");
        return false;
      }
    },
  },
  {
    message: "What is the your name? (Required)",
    type: "input",
    name: "name",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please enter your name!");
        return false;
      }
    },
  },
  {
    message: "Enter your GitHub Username? (Required)",
    type: "input",
    name: "github",
    validate: (gitHubInput) => {
      if (gitHubInput) {
        return true;
      } else {
        console.log("Please enter your name!");
        return false;
      }
    },
  },
  {
    message: "Enter the GitHub URL for the project?",
    type: "input",
    name: "repoURL",
  },
  {
    message: "What is your email address? (Required)",
    type: "input",
    name: "email",
    validate : (emailInput) => {
      if (emailInput) {
        return true;
      }else {
        console.log ("Plaese provide your email address")
      }
    }
  },
  {
    message: "Enter a brief description of your project?",
    type: "input",
    name: "description",
    validate : (descriptionInput) => {
      if (descriptionInput) {
        return true;
      }else {
        console.log ("Plaese provide the description of your project")
      }
    }
  },
  {
    message: "Choose the license that applies to the Project?",
    type: "list",
    choices: ["Apache", "CC", "GPLv3", "GPLv2", "ISC", "MIT", "WTFPL", "None"],
    name: "licensing",
    validate: (licensingList) => {
      if (licensingList) {
        return true;
      } else {
        console.log("Please choose the license that applies to the Project!");
        return false;
      }
    },
  },
  {
    message: "How do you install your project? (Required)",
    type: "input",
    name: "installation",
    validate: (installationInput) => {
      if (installationInput) {
        return true;
      }else {
        console.log("Please provide how to install the project")
      }
    }
  },
  {
    message: "Enter any test instruction for the project? (Required",
    type: "input",
    name: "testing",
    validate: (testingInput) => {
      if (testingInput) {
        return true;
      } else {
        console.log("Please provide any test instruction for the project!");
        return false;
      }
    },

  },
{
  message: "Enter the instructions on how to use the project? (Required)",
  type: "input",
  name: "usage",
  validate: (usageInput) => {
    if (usageInput) {
      return true;
    } else {
      console.log("Please provide the instructions on how to use the project!");
      return false;
    }
  },
},
  {
    message: "What is the copyright year?",
    type: "input",
    name: "year",
  },
  {
    message: "What needs to be known about contributing to the Project? (Required)",
    type: "input",
    name: "contribution",
    validate: (contributionInput) => {
      if (contributionInput) {
        return true;
      } else {
        console.log("Please provide the information on how to contribute to the project")
      }
    }
  },
];

// Function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) throw err;
    console.log("Success! Check out README.md in this directory to see it");
  });
}

// Function to initialize app
function init() {
  inquirer.prompt(questions)
  .then(function (userInput) {
      console.log(userInput)
      writeToFile("README.md", generateMarkdown(userInput));
  });
};

// Function call to initialize app
init();