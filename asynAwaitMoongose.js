require('./connection');

const Product = require('./models/Product');

const main = async () => {
  const keyboard = new Product({
    name: 'keyboard',
    description: 'Coursair k68 RGB keyboard',
    price: 150,
  });

  const productSave = await keyboard.save();
  return productSave;
};

main()
  .then((productSave) => console.log(productSave))
  .catch((error) => console.log(error));
