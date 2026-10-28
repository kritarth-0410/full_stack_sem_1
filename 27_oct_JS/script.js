// // Object cannot have duplicate keys
// const student = {
//     name: 'kritarth',
//     age: 19,
//     batch: 'Lecun'
// };
// console.log(student)
// //  Just update the property
// student['name'] = 'Ansh';
// console.log(student)


// // In this case latest value of the duplicate key will be there
// const student1 = {
//     name: 'Ansh',
//     name: 'Kritarth',
//     age: 19,
//     batch: 'Lecun'
// };
// console.log(student1)






//  Array 

const students = ['Kritarth', 'Ansh', 'Shashwat', 'Yash'];
console.log(typeof students);
console.log(students[1]);

console.log(students);


// ---PUSH -- adds element at the end of array
console.log('---PUSH---');
students.push('Ram');
console.log(students);


// this will put these all elements as a single element
// students.push(['raj', 'ram', 'Arjun'])
// console.log(students)

// Adding multiple values individually
students.push('raj', 'ram', 'Arjun')
console.log(students)


// ---POP--- remove element form the end of array

console.log('---POP---');
console.log(students.pop());
console.log(students);


// SHIFT -- removes the first element (0th index)
console.log('---SHIFT---');
const firstname = students.shift()
console.log(firstname);
console.log(students);



// UNSHIFT --add element at the first element (0th index)
console.log('---UNSHIFT---');
students.unshift('Kritarth');
console.log(students);

// Adding multiple values individually form the start
students.unshift('karan', 'pavitram', 'ashish');
console.log(students);


// Printing last element
const len = students.length;
console.log(students[len-1]);

// Reverse indexing does not works in JS


// ---SPLICE---
console.log('---SPLICE---');
console.log(students);

// Start from the start-index and deletes "delete-count" elements
students.splice(5,2);
console.log(students);

// Start from the start-index and deletes till end
students.splice(6);
console.log(students);


// Start from the start-index and deletes it and adds the new value
students.splice(2,1,'Parth');
console.log(students);

// Start from the start-index and deletes it and adds new values
students.splice(2,2,'Yatharth', 'Ram');
console.log(students);

