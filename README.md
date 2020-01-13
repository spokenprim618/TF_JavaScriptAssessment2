# JavaScript Assessment - Teaching Fellow 

The All Star Code Teaching Fellow JavaScript Assessment consists of 3 tasks, to be completed and turned in to dante@allstarcode.org as a GitHub gist.

### **IT IS NOT NECESSARY PASS ALL TEST SPECS TO GET HIRED. JUST DO YOUR BEST! :smile:**

### Steps to Tackling the Assessment
1. Clone or download this repo.

2. Navigate into the repo from command line and before doing anything else, run the command `npm install`.
    - If any error occurs, run `npm init`. Hit enter for all the questions and enter `npm install` again.
    - If command is not found for `npm install` or `npm init`, install node.js here: [https://nodejs.org/en/download/](https://nodejs.org/en/download/) and repeat step #2. 

3. Follow the prompts for each task and do your best!
<br>

### Notes
- The tasks are designed to get progressively harder and you are advised to attempt the tasks in the given order.
- The tests folder contains test files in which your functions will be tested with. Feel free to look at the tests, but **DO NOT** edit them. These exact tests will be used to test your answers when you submit your work.
- **Info on testing your work with the provided test specs is included at the <a href="#tests">end of the document</a>**.  
<br>

---

## Task #1 - Odd One Out
- Write your code in **oddoneout.js** in the cloned or downloaded folder.
- The function oddOneOut takes an array *nums* and **returns the first odd number** in the given array or **-1 if there are no odd numbers**.
    <br><br>
    - **EXPECTED OUTPUT:**
        - `oddOneOut([1, 2, 3]) → 1`
            - First odd number: `1` 
            <br>
        - `oddOneOut([10, 12, 13, 14, 16, 18]) → 13`
            - First odd number: `13` 
            <br>
        - `oddOneOut([2, 4, 6]) → -1`
            - No odd numbers - function returns `-1` 

<br>

## Task #2 - Fizzbuzz
- Write your code in fizzbuzz.js in the cloned or downloaded folder. 
- The function fizzBuzz takes an integer *start*, an integer *end*, an integer *skip*, and **returns an array** that has all integers from *start* to *end*, excluding integers with the digit *skip* in it.
    <br><br>
    - **EXPECTED OUTPUT:**
        - `fizzBuzz(1, 9, 5) → [1, 2, 3, 4, 6, 7, 8, 9]`
            - `5` was skipped!
            <br>
        - `fizzBuzz(1, 20, 1) → [2, 3, 4, 5, 6, 7, 8, 9, 20]`
            - `1` was skipped!
            - `10`, `11`, `12`, `13`, `14`, `15`, `16`, `17`, `18`, and `19` were also skipped because they contain the digit 1!
            <br>
        - `fizzBuzz(99, 101, 0) → [99]`
            - `100` and `101` were skipped because they contain the digit 0!
            <br>
        - `fizzBuzz(99, 101, 2) → [99, 100, 101]`
            - No skip!

<br>

## Task #3 - String Cleaning
- Write your code in **stringcleaning.js** in the cloned or downloaded folder.
- The function strClean takes an array of strings and **returns an array** of cleaned strings, cleaned meaning:
    - Any leading or trailing whitespaces gets removed.
        - E.g. `'  Blah!  ' → 'Blah!'`
        <br>
    - Any digit that isn't 0 or 1 gets removed.
        - E.g. `'10023' → 'onezerozero'`
        <br>
    - Any digit that is 0 or 1 gets replaced with the word for that digit.
        - E.g. `'100' → 'onezerozero'`
        <br>
    - Each space in the string gets replaced with an underscore. 
        - E.g. `'I am   spaced'  → 'I_am___spaced'`
    <br><br>
    - **EXPECTED OUTPUT:**
        - `strClean(['  Blah!  ','10023','100']) → ['Blah!', 'onezerozero', 'onezerozero']`
        - `strClean(['I am   spaced']) → ['I_am___spaced']`

<br>

---

<h2 id="tests"> TESTING YOUR FUNCTIONS</h2>
- The tests are setup with commands to test your answers for each individual task. This will only work properly if there are:
    - No errors for `npm install` command
    - No modifications to any files in the `tests` folder
    - No modifications to any scripts commands in the `package.json` file
    - No modifications to `module.exports` at the end of `pokemon.js`

- Use the following command to test your work in the cloned or downloaded folder: 
    - `npm run test` to test your Pokemon class and methods.
<br>

The output for a test:

```shell
Test Suites: 1 failed, 1 total
Tests:       7 failed, 1 passed, 8 total
Snapshots:   0 total
Time:        1.781s
Ran all test suites matching /tests\\pokemon.test.js/i.
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! teachingFellows@1.0.0 test_string: `jest tests/pokemon.test.js`
npm ERR! Exit status 1
```
Your output may look different based on the specific task and the number of tests passed/failed. 
<br><br>
Take note of these 2 lines: 

```shell
Test Suites: 1 failed, 1 total
Tests:       7 failed, 1 passed, 8 total
```

The output above indicates that the function only passed 1 out 8 tests :cry:
<br>
You can scroll up the console to diagnose the errors by comparing the expected outputs and what your function returned. 

For example:
```shell
    Expected: "string"
    Received: "undefined"

      11 |     it('should properly initialize all 5 traits', () => {
      12 |         const charmander = new Pokemon('Charmander', 100, 110, 130, 'fire');
    > 13 |         expect(typeof charmander.name).toBe('string');
         |                                        ^
```

The test failed because the program expected the output of `typeof charmander.name` to be `'string'`, but received the output `undefined` instead. 

Your solutions will be tested with these exact test files. Your goal is to have your functions pass as many tests as possible.
<br> 
**REMEMBER: IT IS NOT NECESSARY TO PASS ALL TESTS TO BE HIRED. PLEASE SUBMIT WHATEVER YOU MANAGE TO COMPLETE!**