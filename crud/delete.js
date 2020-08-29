require('../connection');

const Product = require('../models/Product');

const deleteManyInput = async () => {
  const result = await Product.deleteMany({name: 'keyboard'});
  console.log(result);
};

const deleteOneInput = async () => {
  const result = await Product.deleteOne({name: 'latop Lenovo'});
  console.log(result);
};

const findOneAndDeleteInput = async () => {
  const result = await Product.findByIdAndDelete({name: 'keyboard'});
  console.log(result);
};

const deleteByID = async () => {
  const result = await Product.findByIdAndDelete({_id: '5f4aaaeca799461d31bc104b'});
  console.log(result);
};

deleteByID();
