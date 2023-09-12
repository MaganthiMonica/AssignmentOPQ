
// 1.  Generate * pattern to construct a pyramid
    

var numRows = 5;

for (var i = 1; i <= numRows; i++) {
  var row = '';
  for (var j = 1; j <= numRows - i; j++) {
    row += ' '; 
  }
  for (var k = 1; k <= 2 * i - 1; k++) {
    row += '*'; 
  }
  console.log(row);
}


// 2. Upside down pyramid

var numRows = 5;

for (var i = numRows; i >= 1; i--) { 
  var row = '';
  for (var j = 1; j <= numRows - i; j++) {
    row += ' '; 
  }
  for (var k = 1; k <= 2 * i - 1; k++) {
    row += '*'; 
  }
  console.log(row);
}

// 3. Find sum of N numbers
// eg  1,2,3,4,5....N

function findSumOfNumbers(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}


const N = 10;
const result = findSumOfNumbers(N);
console.log(`The sum of the first ${N} numbers is: ${result}`);

// 4. diamond shape

var numRows = 5;

for (var i = 1; i <= numRows; i++) {
  var row = '';
  var space = '';
  var stars = '';
  
  for (var j = 1; j <= numRows - i; j++) {
    space += ' ';
  }

  for (var k = 1; k <= 2 * i - 1; k++) {
    stars += '*';
  }

  // Combine spaces and asterisks for the row
  row = space + stars;
  
  console.log(row);
}

for (var i = numRows - 1; i >= 1; i--) {
  var row = '';
  var space = '';
  var stars = '';
  
 
  for (var j = 1; j <= numRows - i; j++) {
    space += ' '
  }
  
  for (var k = 1; k <= 2 * i - 1; k++) {
    stars += '*';
  }

  row = space + stars;
  console.log(row);
}




