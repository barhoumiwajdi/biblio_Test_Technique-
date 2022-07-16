import { generateToken } from '../services/jwtify';

export default function geTokens(payload, secret) {
  return generateToken([
    {
      name: 'token',
      options: {
        payload,
        secret,
        options: { expiresIn: 1 },
      },
    },
    {
      name: 'tokenEmail',
      options: {
        payload,
        secret,
        options: { expiresIn: '1h' },
      },
    },
    {
      name: 'refreshToken',
      options: {
        payload,
        secret: `${secret}${payload.toString()}`,
        options: { expiresIn: 604800 },
      },
    },
  ]);
}
