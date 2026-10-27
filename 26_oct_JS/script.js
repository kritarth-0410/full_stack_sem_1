const title = "Hello"

// const studentName = 'Kritarth';
// const city = 'Delhi';
// const college = 'ZSAI';
// const rollNumber = '2616400231';

const student = {
    name: 'Kritarth',
    city: 'Delhi',
    college: 'ZSAI',
    rollNumber: '2616400231'
};

console.log(student);
console.log(typeof student);



// ----READ----

console.log(student.name);
console.log(student["name"]);


// ----CREATE----

// student.country = 'INDIA'
student['country'] = 'INDIA';
console.log(student);

// ----UPDATE----

student.city = 'Mumbai';
student['college'] = 'Zenith';


// ----DELETE----

delete student.name;
delete student['college'];

console.log(student)



// -----------------------------

const product = {
    title: 'Laptop',
    price: 80000,
};

console.log(product);

product.price = 9000;
console.log(product);

product.title = 'Keyboard';

const keyboard = product;

keyboard.title = 'keyboard';

console.log(keyboard);
console.log(product);