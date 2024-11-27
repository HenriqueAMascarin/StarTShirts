import * as z from 'zod';

export const useFirstPasswordSchema = z.object({
  email: z.string().email('Invalid e-mail'),
});

export type typeFirstPasswordSchema = z.infer<typeof useFirstPasswordSchema>;
