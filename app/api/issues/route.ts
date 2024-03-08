import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from '../../../server/db/client';

const createIssueSchema = z.object({
	title: z.string(),
	description: z.string(),
});

export async function POST(request: NextRequest) {
	const body = await request.json();

	const validation = createIssueSchema.safeParse(body);

	if (!validation.success) {
		return NextResponse.json({ error: validation.error.errors }, { status: 400 });
	}

	const newIssue = await prisma.issue.create({
		data: {
			title: body.title,
			description: body.description,
		}
	})

	return NextResponse.json(newIssue, { status: 201 });
};