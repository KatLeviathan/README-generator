// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license) {
      // Return the license badge based on the license provided
      return `[![License](https://img.shields.io/badge/License-${license}-brightgreen.svg)](https://opensource.org/licenses/${license})`;
  } else {
      // If no license is provided, return an empty string
      return '';
  }
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license) {
      // Return the license link based on the license provided
      return `[License](https://opensource.org/licenses/${license})`;
  } else {
      // If no license is provided, return an empty string
      return '';
  }
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
      // Return the license section with the license name and link
      return `## License

This project is licensed under the ${license} license. Click [here](${renderLicenseLink(license)}) for more information.`;
  } else {
      // If no license is provided, return an empty string
      return '';
  }
}
// TODO: Create a function to generate markdown for README
const generateMarkdown = (data) => {
  return `
# ${data['Project-title']}

## Motivation
${data['Motivation']}

## Reason
${data['Reason']}

## Problem-solving
${data['Problem-solving']}

## Learned
${data['Learned']}

## Installation Guide
${data['Installation-guide']}

## Collaborators
${data['Collaborators']}

## License
${data['License']}
`;
};

module.exports = generateMarkdown;