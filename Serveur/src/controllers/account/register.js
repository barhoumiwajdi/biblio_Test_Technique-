import { registerUser } from 'services/users';
import { getEnv, getTokens } from 'utils';

export default async function register(request, response) {
  try {
    const { body: data } = request;
    const user = await registerUser(data);
    const { id, email } = user;
    const appSecret = getEnv('APP_SECRET', 'app-super-secret');
    const { token, } = getTokens({ user: id, email: email }, appSecret);
    return response.json({ token });
  } catch (error) {
    console.log('erro: ', error);
    if (error.status) return response.status(error.status).json(error);
    return response.sendStatus(500);
  }
}
