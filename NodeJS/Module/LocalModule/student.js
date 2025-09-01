const getName = () => {
  return "Subrata Biswas";
};

// We can also export like that
// exports.getAge = () => {
//   return 25;
// };

const getAge = () => {
  return 25;
};

const cgpa = 3.36;

// exports.getName = getName;
// exports.Age = getAge;
// exports.cgpa = cgpa;

//If we want to export large item,we can export them like that
module.exports = {
  getName,
  getAge,
  cgpa,
};
