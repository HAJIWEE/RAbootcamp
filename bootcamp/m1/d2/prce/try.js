var fizzBuzz = function (s) {
  const output = [];
  for (var inputLength = s.length; inputLength >= 1; inputLength -= 1) {
    output.push(s[inputLength]);
  }
  return output;
};
