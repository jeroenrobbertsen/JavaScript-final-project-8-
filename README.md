# JavaScript-final-project-8-

De opdracht:
# WincWinc dating app

**We will provide you with a list of 100 possible people that a user can date. You can access the list by using the variable “mockData”. Your task is to get relevant data from the user and match the user with another person based on certain preferences.**

## Requirements

- [x] Welcome the user with a message in the console.
- [x] Create an empty profile object.
- [x] Create and prompt multiple questions that allow you to collect all the data needed to fill the profile object. The properties of the profile object are the same as the data given in mockData.js. The question you prompt should be clear and related to the property. E.g. a question for first_name could be: “What is your first name?”.
- [x] For each question you check wether the input is valid and if so, store the data in the profile object. If the input is not valid, ask the question again until it is valid.
- [x] Make sure that the first and last name are not empty strings.
- [x] Make sure that all number values are stored as number and not as string
- [ ] Make sure the minimum interested age and maximum interested age is 18 or higher.
- [ ] Make sure the maximum interested age is higher than the minimum interested age.
- [ ] Make sure that gender can only be M, F, X. (X is all not male & female genders)
- [ ] Make sure that the gender_interest can only be M, F, X, B (B stands for Bi)
- [ ] Make sure that location can only be “rural” or “city”.
- [ ] Make sure that max_age_interest is a higher number than min_age_interest
- [ ] Create a loop that iterates on the mockData array
- [ ] Count the number of matches.
- [ ] In this loop, compare the data with your profile data and store a person as a match when they meet the following criteria:
    - Your age range and their age match
    - Their age range and your age match
    - Their gender_interest and your gender match. The value B can match with both M and F.
    - Your gender_interest and their gender match. The value B can match with both M and F.
    - You both have the same location
- [ ] Show all possible matches to the user by printing it in a nice format.
- [ ] Show the number of matches.
- [ ] During development of the matching process it can help to create a filled-in profile object so you don’t have to answer all the questions each time you run the program.
