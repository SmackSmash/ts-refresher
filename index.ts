// Inferred types
let firstName = 'Dan'; // String
let age = 37; // Number
let isValid = true; // Boolean

// Union types
let userId: string | number;
userId = 'gahjsd';
userId = 893469;

// Object types
const user: {
  name: string;
  age: number;
  isAdmin: boolean;
  id: string | number;
} = {
  name: 'Dan',
  age: 37,
  isAdmin: true,
  id: 'abc' //123
};

// Array types
let hobbies: string[];
// let hobbies: Array<string> Alternatively
hobbies = ['Sports', 'Cooking', 'Reading'];

// Object arrays
let people: { name: string; age: number }[];
people = [
  { name: 'Dan', age: 37 },
  { name: 'Steve', age: 65 }
];

// Functions
const add = (a: number, b: number): number => {
  return a + b;
};
// Functions as params
const calculate = (a: number, b: number, calcFn: (a: number, b:number) => number): number{
  return calcFn(a, b)
}