import * as z from 'zod';

export const useLoginSchema = z.object({
  email: z.string().email('Invalid e-mail'),
  password: z.string().min(1, {message: 'Required'}),
});

export type TypeLoginFormSchema = z.infer<typeof useLoginSchema>;
