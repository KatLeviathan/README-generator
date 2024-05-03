// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const inquirer = require('inquirer');

const questions = [
  {
    type: 'input',
    name: 'Project-title',
    message: 'What is your project\'s name?',
  },
  {
    type: 'input',
    name: 'Motivation',
    message: 'What was your motivation for this project?',
  },
  {
    type: 'input',
    name: 'Reason',
    message: 'Why did you build this project?',
  },
  {
    type: 'input',
    name: 'Problem-solving',
    message: 'What problem does it solve?',
  },
  {
    type: 'input',
    name: 'Learned',
    message: 'What did you learn?',
  },
  {
    type: 'input',
    name: 'Installation-guide',
    message: 'What are the steps required to install your project?'
  },
  {
    type: 'input',
    name: 'Collaborators?',
    message: 'List your collaborators, if any.'
  },
  {
    type: 'input',
    name: 'License',
    message: 'What license did you use, if any?'
  },
];

inquirer.prompt(questions)
  .then((answers) => {
    console.log(answers);
  })
  .catch((error) => {
    console.error(error);
  });

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

}

// TODO: Create a function to initialize app
function init() {

}

// Function call to initialize app
init();
