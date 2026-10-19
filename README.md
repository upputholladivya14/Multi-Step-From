# Multi-Step Form Using React

## Project Description

The Multi-Step Form is a web application developed using React that allows users to enter their details through multiple steps. Instead of displaying all the fields on a single page, the form is divided into separate sections to make the registration process simple and organized.

The form collects personal details, educational information, skills, and project details. Users can navigate between steps using the Next and Previous buttons. The application also includes basic validation to ensure that the required personal details are filled in before moving to the next step.

## Features

- Collects personal details such as name, email, gender, and phone number.
- Collects educational details such as college, branch, and CGPA.
- Provides separate steps for skills and project information.
- Allows navigation using Next and Previous buttons.
- Prevents users from proceeding when required personal details are empty.
- Displays the Submit button only on the final step.
- Uses React state to manage the current step and form interactions.

## Technologies Used

- **React.js** – For building the user interface.
- **JavaScript** – For handling form logic and validation.
- **HTML** – For structuring the form.
- **CSS** – For styling the application.

## How to Run the Project

1. Install Node.js on your computer.
2. Open the project folder in VS Code.
3. Open the terminal and install the required dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL displayed in the terminal to view the application in your browser.

## Learning Outcomes

This project helps in understanding React components, the `useState` hook, conditional rendering, event handling, form validation, and navigation between multiple steps.

## Conclusion

The Multi-Step Form provides a simple and organized way to collect student information. It demonstrates how React can be used to create interactive forms with step-by-step navigation and basic input validation.