import { trim } from 'lodash';
import * as bcrypt from 'bcryptjs';
import { ClientModel } from '../../models';

async function register(data) {
  const { email, password, type } = data;
  const formattedEmail = trim(email).toLowerCase();
  const user = await ClientModel.findOne({ email: formattedEmail });
  console.log('user: ', user);
  if (user) throw { status: 422, code: 'USER_ALREADY_EXISTS', message: 'email address is taken' };
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new ClientModel({
    email: formattedEmail,
    password: hashedPassword,
    type: type
  });
  const { _id: id } = await newUser.save();
  return { id, email };
}

export default register;
