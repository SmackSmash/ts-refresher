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
// Functions as params and type alias
type AddFn = (a: number, b: number) => number;

const calculate = (a: number, b: number, calcFn: AddFn): number => {
  return calcFn(a, b);
};

// Interfaces for objects
interface User {
  name: string;
  age: number;
}
// Can be easily extended unlike custom types - declaration merging
interface User {
  isAdmin: boolean;
  id: string | number;
}

const person: User = {
  name: 'Steve',
  age: 45,
  isAdmin: false,
  id: 746
};

const sayName = ({ name }: User): void => {
  console.log(`Hi ${name}`);
};

// Classes and interfaces
class Person implements User {
  constructor(
    public name: string,
    public age: number,
    public isAdmin: boolean,
    public id: string | number
  ) {}
}

// Literal types
type Role = 'admin' | 'user' | 'editor';

let role: Role;
role = 'admin';

const performAction = (role: Role) => {
  // Typeguarding
  if (role === 'admin') {
    // Do something...
  }
};

// Generic types, can make custom ones unlike e.g. Role[]
let roles: Array<Role>;

roles = ['user'];
roles.push('admin');
// Argument 'T' for type, as placeholder to be used in future
type DataStorage<T> = {
  storage: T[];
  add: (data: T) => void;
};
// String used instead of placeholder 'T'
const textStorage: DataStorage<string> = {
  storage: ['yes', 'no', 'maybe'],
  add: (data): void => {
    // data inferred to string from initial T argument
  }
};
