import NextAuth from 'next-auth';
import { authConfig } from './auth.config';

export default NextAuth(authConfig); // This handles the authentication logic via API routes.
