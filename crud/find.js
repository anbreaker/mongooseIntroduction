require('../connection');

const Product = require('../models/Product');

const main = async () => {
  const products = await Product.find({name: 'keyboard'});
  console.log(products);
};

main();
