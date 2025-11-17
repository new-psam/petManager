import "dotenv/config";

import { z } from 'zod';

const envEschema = z.object({
    NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
    PORT: z.coerce.number().default(3000),
});

const _env = envEschema.safeParse(process.env);

if (!_env.success) {
    console.error("Invalid enviroment variables", _env.error.format());

    throw new Error("Invalid environment variables");
}

export const env = _env.data;