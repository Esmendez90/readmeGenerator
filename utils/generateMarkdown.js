function renderLicenseBadge(license) {
    // If I choose a license for my application from the list of options
    // then a badge for that license is added near the top on the README
    // and a notice is added to the section of the README entitled 
    // License that explains which license the application is covered 
    // under
    


    
    // If there is no license, return an empty string
    
  }
  
  
  // TODO: Create a function that returns the license link
  // If there is no license, return an empty string
  function renderLicenseLink(license) {
  //   if(answers.license === true){
  //     console.log(`https://img.shileds.io/badge/license-${answers.license}-blue.svg`);
  //   }
  //   return "";
   }
  
  // TODO: Create a function that returns the license section of README
  // If there is no license, return an empty string
  function renderLicenseSection(license) {}
  
  // TODO: Create a function to generate markdown for README
  function generateMarkdown(answers) {
    return `# ${answers.title}
  
  ## User Story
  ${answers.userStory} 
  
  ## Table of Content
  
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Video](#video)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Description
  ${answers.description}
  
  ## Installation
  ${answers.installation}
  
  ## Usage 
  ${answers.usage}

  ## Video
  <https://youtu.be/A4YMhIymC6I>
  
  ## License
  ${answers.license}
  
  ## Contributing
  ${answers.contributing}
  
  ## Tests
  ${answers.tests}
  
  ## Questions
  For questions, please contacte me:
  * [${answers.username}] (https://github.com/${answers.username})
  * Email: ${answers.email}
  `;
  }
  
  module.exports = generateMarkdown;
 
  
  