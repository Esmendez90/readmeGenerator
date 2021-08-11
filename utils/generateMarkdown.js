const fs = require("fs");

function renderLicenseBadge(license_name, badge_color) {
  let renderLicense = renderLicenseLink(license_name, badge_color);
  let licenseBadge = `![license](${renderLicense})`;
  return licenseBadge;
}

// TODO: Create a function that returns the license link
function renderLicenseLink(license_name, badge_color) {
  let badgeURL = `https://img.shields.io/badge/license-${license_name}-${badge_color}`;
  return badgeURL;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(
  license,
  license_name,
  badge_color,
  year,
  full_name
) {
  let section;
  if (license) {
    section = renderLicenseBadge(license_name, badge_color);
    fs.writeFile(
      "License.txt",
      `MIT License

    Copyright (c) ${year} ${full_name}
    
    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:
    
    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.
    
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.`,
      (error) => {
        error ? console.log(error) : console.log("License file was created!");
      }
    );
  } else {
    section;
  }
  return section;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.title} ${renderLicenseSection(
    answers.license,
    answers.license_name,
    answers.badge_color,
    answers.year,
    answers.full_name
  )}
  
  ## User Story
  ${answers.story} 
  
  ## Table of Content
  
  * [Description](#description)
  * [Requirements](#requirements)
  * [Link-To-Application](#link-to-application)
  * [Tools](#tools)
  * [Questions](#questions)
  
  ## Description
  ${answers.project_description}

  ## Requirements
  ${answers.project_requirements}

  ## Link To Application
  ${answers.app_link}

  ## Tools
  ${answers.tools}

  ## Questions
  For questions, please contacte me:
  * [${answers.username}] (https://github.com/${answers.username})
  * Email: ${answers.email}
  `;
}

module.exports = generateMarkdown;
