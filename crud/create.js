require('../connection');

const Product = require('../models/Product');

const createProducts = async () => {
  const laptop1 = new Product({
    name: 'latop hp',
    description: 'Hp pavilion 15',
  });

  await laptop1.save();

  const laptop2 = new Product({
    name: 'latop Lenovo',
    description: 'Lenovo  x15',
  });

  await laptop2.save();
};

createProducts();
