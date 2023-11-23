import usersModel from '../dao/models/users.js';
import response from '../services/res/response.js';

export const changeRole = async (req, res) => {
  const uid = req.params.uid;
  const user = await usersModel.findById(uid);
  if (user.role === 'user') {
    user.role = 'premium';
  } else if (user.role === 'premium') {
    user.role = 'user';
  }
  await user.save();
  response(res, 200, user.role);
};
