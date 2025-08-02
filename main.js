/*

- Create a variable called hexColorCode and assign an empty string to it.  This is where all the hex code you generate goes into. 
- Create a for loop that runs six times, starting from 0 to 5. This loop will generate the hex code for you. 
- Create a variable that generates a random index, this will help in picking a random hex number. 
- You will use the built-in math function to enable you to multiply your hex number array using the math.random function.   This will return a decimal number,  to change the decimal number to a whole number you will use the math.floor function in the codebase.
- Next you will concatenate the hex numbers and the random index variable in the hexColorCode you created earlier on.
```javascript

*/

function handleSubmit() {
  let hexNumbers = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
  ];
  let hexColorCode = '';
  for (let i = 0; i < 6; i++) {
    let randomIndex = Math.floor(Math.random() * hexNumbers.length);
    hexColorCode += hexNumbers[randomIndex];
  }
  document.getElementById('colorCode').innerHTML = hexColorCode;
  document.getElementsByTagName('body')[0].style.background =
    '#' + hexColorCode;
}
