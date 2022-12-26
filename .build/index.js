"use strict";
let username = "Imran";
const age = 12;
const isOld = false;
const user = {
  name: username,
  age
};
const user2 = {
  name: username,
  age
};
const checkAge = (num) => {
  if (num === age) {
    return "Correct age";
  }
  return "Wrong age";
};
function checkAg(num) {
  if (num === age) {
    return "Correct age";
  }
  return "Wrong age";
}
const friends = ["Imran", "Ashim"];
const luckyNumber = [10, 7];
const bool = [true, false];
const friendsAndNumbers = ["Imran", 10, "Ashim"];
const lotteryWinner = [{
  name: "Awonke",
  age: 18
}, 13];
const users = [{
  name: "",
  age: 0
}, { name: "", age: 2 }];
console.log(users);
//# sourceMappingURL=index.js.map
