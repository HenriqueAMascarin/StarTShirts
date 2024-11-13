import * as z from 'zod';

export const useResetFirstSchema = z.object({
  email: z.string().email('Invalid e-mail'),
});

export type TypeResetFirstFormSchema = z.infer<typeof useResetFirstSchema>;
