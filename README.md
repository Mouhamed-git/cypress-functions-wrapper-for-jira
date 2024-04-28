# :green_circle: Cypress Functions Wrapper for Jira :gear:

[![npm version](https://img.shields.io/npm/v/cypress-functions-wrapper-for-jira.svg?style=flat-square)](https://www.npmjs.com/package/cypress-functions-wrapper-for-jira)
[![License](https://img.shields.io/github/license/Mouhamed-git/cypress-functions-wrapper-for-jira.svg?style=flat-square)](https://github.com/Mouhamed-git/cypress-functions-wrapper-for-jira/blob/main/LICENSE)
[![Cypress.io](https://img.shields.io/badge/tested%20with-Cypress-04C38E.svg)](https://www.cypress.io/)
[![cypress](https://img.shields.io/endpoint?url=https://cloud.cypress.io/badge/simple/ypt4pf/develop&style=flat&logo=cypress)](https://cloud.cypress.io/projects/ypt4pf/runs)



A collection of utility functions for Cypress tests to simplify testing of Jira workflows.

## Installation :fire:

```bash
npm install cypress-functions-wrapper-for-jira --save-dev
```

## Usage :shield:

Import the functions you need from the package and use them in your Cypress tests.

```javascript
import { 
    cyLogin, 
    cyLogout,
    cyClick, 
    cyTypeInput, 
    cySelect, 
    cyTypeCustomInput, 
    cyClickText, 
    cyDisplayIssue
} from 'cypress-functions-wrapper-for-jira';

describe('Jira Workflow Tests', () => {
  beforeEach(() => {
    // Setup your Cypress tests
  });

  it('should login to Jira', () => {
    cyLogin("username", "password");
    // Add assertions
  });

  it('should logout from Jira', () => {
    cyLogout();
    // Add assertions
  });

  // Additional tests with your functions
  it('should click on an element', () => {
    cyClick("#some-button");
    // Add assertions
  });

  it("should type input", () => {
    cyTypeInput("'username'", "testuser");
    // Add assertions
  });

  it('should select an option', () => {
    cySelect("'#customfield_10200'", "Project A", "1");
    // Add assertions
  });

  it('should type into a custom input', () => {
    cyTypeCustomInput("#custom-input", "testvalue");
    // Add assertions
  });

  it('should click on text', () => {
    cyClickText("a", "Click Me");
    // Add assertions
  });

  it('should display issue details', () => {
    cyDisplayIssue("Dashboard 1");
    // Add assertions
  });
});
```

## Available Functions :thinking:

### `cyLogin(username, password)`

Logs in to Jira with the specified username and password.

- `username` (string): The username to log in with.
- `password` (string): The password to log in with.

### `cyLogout()`

Logs out from Jira.

### `cyClick(id)`

Clicks on an element with the specified ID.

### `cyTypeInput(customField, value)`

Types text into an input field with the specified name.

- `customField` (string): The name of the input field.
- `value` (string): The text to type into the input field.

### `cySelect(customField, fieldName, value)`

Selects an option from a dropdown with the specified name.

- `customField` (string): The name of the dropdown field.
- `fieldName` (string): The option to select.
- `value` (string): The value of the selected option.

### `cyTypeCustomInput(customField, value)`

Types text into a custom input field with the specified selector.

- `customField` (string): The selector of the input field.
- `value` (string): The text to type into the input field.

### `cyClickText(selector, text)`

Clicks on an element containing the specified text.

- `selector` (string): The selector of the element containing the text.
- `text` (string): The text to click on.

### `cyDisplayIssue(dashboardName)`

Displays the details of the first issue on the specified dashboard.

- `dashboardName` (string): The name of the dashboard.

## Contribution :heart:

Contributions are welcome! Feel free to open issues and submit pull requests to improve this package.

## License :brown_square:

This package is licensed under the [MIT License](https://github.com/Mouhamed-git/cypress-functions-wrapper-for-jira/blob/main/LICENSE).
