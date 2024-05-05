const inquirer = require('inquirer');
const fs = require('fs');

// License functions
function renderLicenseBadge(license) {
  if (license) {
      return `[![License](https://img.shields.io/badge/License-${license}-brightgreen.svg)](https://opensource.org/licenses/${license})`;
  } else {
      return '';
  }
}

function renderLicenseLink(license) {
  if (license) {
      return `[License](https://opensource.org/licenses/${license})`;
  } else {
      return '';
  }
}

function renderLicenseSection(license) {
  if (license) {
      return `## License\n\nThis project is licensed under the ${license} license. Click [here](${renderLicenseLink(license)}) for more information.`;
  } else {
      return '';
  }
}

const questions = [
    { type: 'input', name: 'Project-title', message: 'What is your project\'s name?' },
    { type: 'input', name: 'Motivation', message: 'What was your motivation for this project?' },
    { type: 'input', name: 'Reason', message: 'Why did you build this project?' },
    { type: 'input', name: 'Problem-solving', message: 'What problem does it solve?' },
    { type: 'input', name: 'Learned', message: 'What did you learn?' },
    { type: 'input', name: 'Installation-guide', message: 'What are the steps required to install your project?' },
    { type: 'input', name: 'Collaborators', message: 'List your collaborators, if any.' },
    { type: 'input', name: 'License', message: 'What license did you use, if any?' }
];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log(`${fileName} file created successfully`);
    });
}

function init() {
    inquirer.prompt(questions)
        .then((answers) => {
            const readmeContent = `
# ${answers['Project-title']}

## Motivation
${answers['Motivation']}

## Reason
${answers['Reason']}

## Problem-solving
${answers['Problem-solving']}

## Learned
${answers['Learned']}

## Installation Guide
${answers['Installation-guide']}

## Collaborators
${answers['Collaborators']}

## License
${answers['License']}
`;

            writeToFile('README.md', readmeContent);
        })
        .catch((error) => {
            console.error(error);
        });
}

function init() {
  inquirer.prompt(questions)
      .then((answers) => {
          const licenseBadge = renderLicenseBadge(answers['License']);
          const licenseSection = renderLicenseSection(answers['License']);

          const readmeContent = `# ${answers['Project-title']}\n\n## Motivation\n${answers['Motivation']}\n\n## Reason\n${answers['Reason']}\n\n## Problem-solving\n${answers['Problem-solving']}\n\n## Learned\n${answers['Learned']}\n\n## Installation Guide\n${answers['Installation-guide']}\n\n## Collaborators\n${answers['Collaborators']}\n\n${licenseSection}\n\n${licenseBadge}`;

          writeToFile('README.md', readmeContent);
      })
      .catch((error) => {
          console.error(error);
      });
}
// Function call to initialize app
function startApp() {
    init();
}

// Call the startApp function to begin the app initialization
startApp();