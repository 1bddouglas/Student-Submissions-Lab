"use strict";

// 1.
// ---------------------------------------------------------------------------------------------------------------
// submissions is an array of objects
const submissions = [
  {
    name: "Jane",
    score: 95,
    date: "2020-01-24",
    passed: true,
  },
  {
    name: "Joe",
    score: 77,
    date: "2018-05-14",
    passed: true,
  },
  {
    name: "Jack",
    score: 59,
    date: "2020-07-05",
    passed: false,
  },
  {
    name: "Jill",
    score: 88,
    date: "2020-04-22",
    passed: true,
  },
];

// 2.
// ---------------------------------------------------------------------------------------------------------------
const addSubmission = (array, newName, newScore, newDate) => {
  let newPassed = null;
  if (newScore >= 60) {
    newPassed = true;
  } else {
    newPassed = false;
  }
  const studentInfo = {
    name: newName,
    score: newScore,
    date: newDate,
    passed: newPassed,
  };
  // now we use push() method to add the new array, studentInfo, to the submissions array
  array.push(studentInfo);
};

// not interested in addSubmission's return value,
// ... so I don't call it in a console log
addSubmission(submissions, "James", 100, "2022-10-05");
addSubmission(submissions, "Andrea", 50, "2022-10-05");
// check work: (data that were modified)
console.log(submissions);
// both were added to the array, and their passed status was calculated properly

// 3.
// ---------------------------------------------------------------------------------------------------------------
const deleteSubmissionsByIndex = (array, index) => {
  array.splice(index, 1);
};
deleteSubmissionsByIndex(submissions, 1);
// check work
console.log(submissions);
// deleted Joe from the second place [1] in the array

// 4.
// ---------------------------------------------------------------------------------------------------------------
const deleteSubmissionsByName = (array, name) => {
  const foundName = array.findIndex((studentName) => {
    return studentName.name === name;
  });
  array.splice(foundName, 1);
};
deleteSubmissionsByName(submissions, "James");
// check work
console.log(submissions);
// deleted James

// 5.
// ---------------------------------------------------------------------------------------------------------------
const editSubmission = (array, index, newScore) => {
  array[index].score = newScore;
  if (newScore >= 60) {
    array[index].passed = true;
  } else {
    array[index].passed = false;
  }
};
// check work
editSubmission(submissions, 0, 40);
console.log(submissions);
// Jane now has a score of 40

// 6.
// ---------------------------------------------------------------------------------------------------------------
const findSubmissionByName = (array, name) => {
  return array.find((item) => {
    return item.name === name;
  });
};
//check work
console.log(findSubmissionByName(submissions, "Jane"));
// logging for "Jane"

// 7.
// ---------------------------------------------------------------------------------------------------------------
const findLowestScore = (array) => {
  let lowest = array[0]; //object
  array.forEach((item) => {
    lowest = Math.min(item.score);
  });
  return lowest;
};
//check work
console.log(findLowestScore(submissions));
// returned 50, Andrea's score, as the lowest

// 8.
// ---------------------------------------------------------------------------------------------------------------
const findAverageScore = (array) => {
  let averageScore = 0;
  for (const item of array) {
    averageScore += item.score / array.length;
  }
  return averageScore;
};
// check work
console.log(findAverageScore(submissions));
// seems good

// 9.
// ---------------------------------------------------------------------------------------------------------------
const filterPassing = (array) => {
  const filteredPassed = array.filter((item) => {
    return item.passed === true;
  });
  return filteredPassed;
};
// check work
console.log(filterPassing(submissions));
// returned two passing scores

// 10.
// ---------------------------------------------------------------------------------------------------------------
const filter90AndAbove = (array) => {
  const filtered90 = array.filter((item) => {
    return item.score >= 90;
  });
  return filtered90;
};
// check work
console.log(filter90AndAbove(submissions));
// returned with Jane's score of 95, so it worked

// extra challenges
// 1.
// ---------------------------------------------------------------------------------------------------------------
const createRange = (start, end) => {
  const giraffe = [];
  // for loop is good when we have a start and end
  for (let llama = start; llama <= end; llama++) {
    giraffe.push(llama);
  }
  return giraffe;
};

console.log(createRange(2, 5));

// 2.
// ---------------------------------------------------------------------------------------------------------------
const countElements = (arrayOfStrings) => {
  const newObject = {};
  // modify objects ... TODO
  // newObject.propertyName = "something";
  // newObject["propertyName"] = "something";
  for (const llama of arrayOfStrings) {
    // not operator (!)
    if (!newObject.hasOwnProperty(llama)) {
      newObject[llama] = 1;
    } else {
      newObject[llama]++;
    }
  }
  return newObject;
};

// finding index with an array or string:
// array[number]
// string[number]

// square bracket notation on obj to find a property
// object[string]

console.log(countElements(["a", "b", "a", "c", "a", "b"]));
// {
//  a: 3,
//  b: 2,
//  c: 1,
// }
