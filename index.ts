let username: string = "Imran";
const age: number = 12;
const isOld: boolean = false;

// Type
type UserDetails = {
  name: string,
  age: number
}

// Interface
interface UserDetail {
  name: string,
  age: number
}

// Object with Type
const user : UserDetails = {
  name: username,
  age
}

// Object with Interface
const user2 : UserDetail = {
  name: username,
  age
}

// Arrow Function
const checkAge = (num: number): string => {
  if (num === age) {
    return "Correct age"
  }
  return "Wrong age"
}

// Normal Function
function checkAg(num: number): string {
  if (num === age) {
    return "Correct age"
  }
  return "Wrong age"
}

// Lists
// or == |
const friends: string[] = ["Imran", "Ashim"]
const luckyNumber: number[] = [10, 7]
const bool: boolean[] = [true, false] // Not useful

// Combine two types in a list
const friendsAndNumbers: (string | number)[] = ["Imran", 10, "Ashim"]

// Combine Type and number
const lotteryWinner : (number | UserDetails)[] = [{
  name: "Awonke",
  age: 18
}, 13]

// Lists of Interface or Types
const users : UserDetail[] = [{
  name: "",
  age: 0
}, {name: "", age: 2}]

console.log(users)