require('./connection');

const Product = require('./models/Product');

const laptop = new Product({
  name: 'laptop',
  description: 'lenovo thinkpad x1 carbon 6th generation',
  price: 1300.99,
});

laptop.save((error, document) => {
  if (error) console.log(error);
  console.log(document);
});

//min33

console.log(laptop);
