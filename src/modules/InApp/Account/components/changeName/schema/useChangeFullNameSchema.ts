import * as z from 'zod';

export const useChangeFullNameSchema = z
  .object({
    firstName: z.email('Invalid e-mail'),
    lastName: z.string('Invalid e-mail'),
    currentPassword: z.string('The field is required').min(1, 'The field is required'),
  })

export type typeChangeFullNameSchema = z.infer<typeof useChangeFullNameSchema>;
