import * as z from 'zod';

export const useResetRequestSchema = z.object({
  email: z.email('Invalid e-mail'),
});

export type typeResetRequestSchema = z.infer<typeof useResetRequestSchema>;
