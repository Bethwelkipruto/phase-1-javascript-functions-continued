// code your solution here
// 1. Define saturdayFun function (function declaration)
function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}

// 2. Define mondayWork function (function expression)
const mondayWork = function(activity = "go to the office") {
  return `This Monday, I will ${activity}.`;
}

// 3. Define wrapAdjective function (function returning another function)
function wrapAdjective(flair = "*") {
  return function(adjective = "special") {
    return `You are ${flair}${adjective}${flair}!`;
  }
}