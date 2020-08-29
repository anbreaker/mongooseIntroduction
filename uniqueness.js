require('./connection');

const User = require('./models/User');

const createUsers = async () => {
  const user1 = new User({
    username: 'antunez',
    password: 'secretPass',
  });

  await user1.save();

  const user2 = new User({
    username: 'lukas',
    password: 'simba',
  });
  await user2.save();
};

createUsers();
