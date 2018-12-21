/*
// FUNCTION CONSTRUCTOR

var john = {
	name: 'John',
	yearOfBirth: 1990,
	job: 'teacher'
};

var Person = function(name, yearOfBirth, job) { // Function Constructor
	this.name = name;
	this.yearOfBirth = yearOfBirth;
	this.job = job;
};

Person.prototype.calculateAge = function() { // Prototype property of the Function Constructor
		console.log(2018 - this.yearOfBirth)
	};

var erick = new Person('Erick', 1979, 'Web Developer');
// 1- new: creates a new brand EMPTY object, and points the "this" variable to the new object and NOT to the Global Object
// 2- Person(Function Constructor) is called with the argument that we specified
var oda = new Person('Oda', 1987, 'Dentist');
var ale = new Person('alejandro', 1951, 'Retired');

erick.calculateAge(); // calling a method from the Function Constructor
oda.calculateAge();
ale.calculateAge();

*/

//OBJECT.CREATE

var personProto = {							// this object acts as the prototype
	calculateAge: function() {
		console.log(2018 - this.yearOfBirth);
	}
};

var john = Object.create(personProto);		//then we create a new object
john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'Teacher';

var jane = Object.create(personProto, {
	name: { value: 'Jane' },
	yearOfBirth: { value: 1969 },
	job: { value: 'designer' }
});



// PRIMITIVE vs OBJECTS

// Primitives (they contains the value itself)
var a = 23;
var b = a;
a = 43;
console.log(a); // 43
console.log(b); // 23

// Objects (they do NOT store the object, they point to the location where the actual object is stored)
var obj1 = {
	name: 'John',
	age: 26
}
var obj2 = obj1;
obj1.age = 30;
console.log(obj1.age); // 30
console.log(obj2.age); // 30


// Functions
var age = 39;
var obj = {
	name: 'Erick',
	city: 'Miami'
}

function change(a, b) {
	a = 30;  			// we pass a simple copy is created, so the changes will never affect the variable outside the function		
	b.city = 'Madrid';	// we pass a reference that points to the object, so the change inside the functions are reflected outside of the function
}

change(age, obj)
console.log(age); // 39 - Primitive remains unchange
console.log(obj.city); // Madrid - city in the object has changed





























