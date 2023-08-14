import { registerOTel } from '@vercel/otel';

export function register() {
  registerOTel('nextjs-starter-kit-app');
}
