
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


