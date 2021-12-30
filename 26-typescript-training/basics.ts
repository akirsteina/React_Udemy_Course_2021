// primitive types
let age: number;
age = 5;
let userName: string;
userName = 'akvarelis1';
let isInstructor: boolean;
isInstructor = true;

// More complex types

// arrays
// array of strings
let hobbies: string[];
hobbies = ['1', 'Abi'];

// objects
let person: { name: string; age: number };

person = {
	name: 'Max',
	age: 32,
};

// mixed
let people: { name: string; age: number }[];

// Type inference
// ts assings type itself
let course = 'React';
// course = 5;

// allowing multiple types - union types
let sth: string | number = 'sth';
sth = 3411;

// base type and type aliases
// type keyword doesnt exist in js
type Person = {
	name: string;
	age: number;
};

let user: Person = {
	name: 'Janis',
	age: 14,
};

// Functions and types
function add(a: number, b: number): number | string {
	return a + b;
}

function printOutput(value: any) {
	console.log(value);
}

// generics
// type safe and flexible!!!
function insertAtBeginning<T>(array: T[], value: T) {
	const newArray = [value, ...array];
	return newArray;
}

const demoArray = [1, 2, 3];
const updatedArray = insertAtBeginning(demoArray, -1);

const otherArray = ['g', 'a'];
const updateAgainArr = insertAtBeginning(otherArray, 'c');
