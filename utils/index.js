/**
 * Logs in to Jira with the specified username and password.
 * @param {string} username - The username to log in with.
 * @param {string} password - The password to log in with.
 */
const cyLogin = (username, password) => {
    cyTypeInput("'os_username'", username);
    cyTypeInput("'os_password'", password);
    cyClick("input[name='login']");
}

/**
 * Logs out from Jira.
 */
const cyLogout = () => {
    cyClick("#header-details-user-fullname");
    cyClick("#log_out");
    cyClickText("a", "Se reconnecter.")
}

/**
 * Clicks on an element with the specified ID.
 * @param {string} id - The ID of the element to click.
 */
const cyClick = (id) => {
    cy.get(id).click({force: true});
}

/**
 * Types text into an input field with the specified name.
 * @param {string} customField - The name of the input field.
 * @param {string} value - The text to type into the input field.
 */
const cyTypeInput = (customField, value) => {
    cy.get(`:input[name=${customField}]`).type(value, {force: true});
}

/**
 * Selects an option from a dropdown with the specified name.
 * @param {string} customField - The name of the dropdown field.
 * @param {string} fieldName - The option to select.
 * @param {string} value - The value of the selected option.
 */
const cySelect = (customField, fieldName, value) => {
    cy.get(`:input[name=${customField}]`).select(fieldName).should('have.value', value);
}

/**
 * Types text into a custom input field with the specified selector.
 * @param {string} customField - The selector of the input field.
 * @param {string} value - The text to type into the input field.
 */
const cyTypeCustomInput = (customField, value) => {
    cy.get(customField).type(value, {force: true});
}

/**
 * Clicks on an element containing the specified text.
 * @param {string} selector - The selector of the element containing the text.
 * @param {string} text - The text to click on.
 */
const cyClickText = (selector, text) => {
    cy.contains(selector, text).click({force: true});
}

/**
 * Displays the details of the first issue on the specified dashboard.
 * @param {string} dashboardName - The name of the dashboard.
 */
const cyDisplayIssue = (dashboardName) => {
    cyClickText("a", dashboardName)
    cyClick(".issue-link:first");
}

module.exports = {
    cyLogin,
    cyLogout,
    cyClick,
    cyTypeInput,
    cySelect,
    cyTypeCustomInput,
    cyClickText,
    cyDisplayIssue
};