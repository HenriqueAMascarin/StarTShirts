import * as z from 'zod';

export const useLoginSchema = z.object({
  email: z.email('Invalid e-mail'),
  password: z.string().min(1, { message: 'The field is required' }),
});

export type typeLoginSchema = z.infer<typeof useLoginSchema>;
