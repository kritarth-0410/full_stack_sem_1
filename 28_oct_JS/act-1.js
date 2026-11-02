const POLICAD_QUESTION_DATA = {
  "products": [
    {
      "id": 26,
      "title": "Green Chili Pepper",
      "price": 0.99
    },
    {
      "id": 27,
      "title": "Honey Jar",
      "price": 6.99
    },
    {
      "id": 28,
      "title": "Ice Cream",
      "price": 5.49
    },
    {
      "id": 29,
      "title": "Juice",
      "price": 3.99
    },
    {
      "id": 30,
      "title": "Kiwi",
      "price": 2.49
    },
    {
      "id": 31,
      "title": "Lemon",
      "price": 0.79
    },
    {
      "id": 32,
      "title": "Milk",
      "price": 3.49
    },
    {
      "id": 33,
      "title": "Mulberry",
      "price": 4.99
    },
    {
      "id": 34,
      "title": "Nescafe Coffee",
      "price": 7.99
    },
    {
      "id": 35,
      "title": "Potatoes",
      "price": 2.29
    }
  ],
  "total": 194,
  "skip": 25,
  "limit": 10
};

const data = POLICAD_QUESTION_DATA;

// Write your code below
const items = data.products;
let total = 0
let i = 0;
const n = items.length;

//  For printing values
// while (i < n){
//   console.log(items[i].title,':', Math.round(items[i].price*100));
//   total+=i
//   i++;
// }

// For Sum of prices



// For maximum prices and its title
let mx = 0;
let mx_items;
while(i<n){
    if(mx < items[i].price){
        mx = items[i].price             // For maximum price
        mx_items = items[i].title    // For item name having maximum price
    }
    i++;
}
console.log(mx_items)