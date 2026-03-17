import * as z from 'zod';

export const useChangeFullNameSchema = z.object({
  firstName: z.string('The field is required').min(1, 'The field is required'),
  lastName: z.string('The field is required').min(1, 'The field is required'),
  currentPassword: z.string('The field is required').min(1, 'The field is required'),
});

export type typeChangeFullNameSchema = z.infer<typeof useChangeFullNameSchema>;
