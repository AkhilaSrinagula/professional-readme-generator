// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## License
  [![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)

  ## Table of Contents 
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [Testing](#testing)
  - [Additional Info](#additional-info)


  ## Description:
  ${data.description}

  ## Installation:
  ${data.installation}
  ## Usage:
  ${data.usage}
  ## License:
  ${data.licensing}
  ## Contribution:
  ${data.contribution}
  ## Testing:
  ${data.testing}

  ## Additional Info:
  - Github: [${data.github}](https://github.com/${data.github})
  - Email: ${data.email}
`;
}

module.exports = generateMarkdown;
