import { z } from 'zod';

export const issueSchema = z.object({
	title: z.string().min(1, "Title must be at least 1 character long").max(255, "Title must be at most 255 characters long"),
	description: z.string().min(1, "Description must be at least 1 character long").max(65535, "Description must be at most 65535 characters long"),
});

export const patchIssueSchema = z.object({
	title: z.string().min(1, "Title must be at least 1 character long").max(255, "Title must be at most 255 characters long").optional(),
	description: z.string().min(1, "Description must be at least 1 character long").max(65535, "Description must be at most 65535 characters long").optional(),
	assigneedToUserId: z.string().min(1, "Assignee must be at least 1 character long").max(36, "Assignee must be at most 36 characters long").optional().nullable(),
});
