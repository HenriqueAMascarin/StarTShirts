import * as z from 'zod';

export const useSchema = z.object({
    firstName: z.string().min(1, { message: 'Required' }),
  });