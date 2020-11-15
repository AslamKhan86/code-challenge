# Problem Statement -

# Create a web application with the following screens:

Upon clicking the “New Request” button, the user is navigated to Page 1

### Page 1
1) A stepper component is displayed at the top which highlights the current page
2) Display an input field that gets the number of parts from user
3) If the input is empty, then the “Next” button is not clickable
4) When “Next” is clicked, the user is navigated to Page 2. “Previous” navigates the user to previous
page.

### Page 2
1) Stepper highlights Page 1 and 2
2) Based on the number of parts obtained from user in Page 1, display the corresponding number of
inputs. If number of parts is 3, then display 3 inputs. If it was 10, then display 10.
3) If the inputs are empty or adding the inputs doesn’t equal to 100, then the “Next” button is not
clickable.
4) When “Next” is clicked, the user is navigated to Page 3. “Previous” navigates the user to previous
page.

### Page 3
1) Stepper highlights Page 1, 2 and 3
2) Success is displayed and clicking “Home” button takes the user to Home page

#---
Stack
Use Typescript, React, Redux, StyledComponents to build this.
Grading criteria
Code organization, maintainability, readability.
Write unit test for atleast one component.
---

#Run

Execute 'yarn install' to install all the dependencies.
Run 'yarn start' to launch the application.
