require('../connection');

const User = require('../models/User');

const updateUserSpecific = async () => {
  const user = await User.findOne({username: 'jeje'});
  console.log(user);
  user.password = 'miNuevaSeña';
  user.save();
  console.log(user);
};

const otherFunction = async () => {
  const user = await User.findOneAndUpdate(
    {username: 'anbreaker'},
    {
      name: 'Job AsyncAPI',
    },
    {new: true}
  );

  console.log('dentro', user);
};

const updateUser = async () => {
  const user = await User.update(
    {username: 'anbreaker'},
    {
      password: 'nuevaContraseña',
    }
  );
  console.log(user);
};

// updateUserSpecific();
// updateUser();
otherFunction();
