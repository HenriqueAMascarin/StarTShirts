import * as z from 'zod';

export const useLoginSchema = z.object({
  email: z.email('Invalid e-mail'),
  password: z.string('The field is required').min(1, 'The field is required' ),
});

export type typeLoginSchema = z.infer<typeof useLoginSchema>;
