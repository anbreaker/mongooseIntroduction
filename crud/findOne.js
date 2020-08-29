require('../connection');

const User = require('../models/User');

const getUser = async () => {
  const user = await User.findOne({username: 'anbreaker'});
  console.log(user);
};

getUser();
