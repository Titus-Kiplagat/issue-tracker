import React from 'react'
import { prisma } from '../../../server/db/client';
import { notFound } from 'next/navigation';

interface Props {
	params: { id: string}
}

const IssueDetailsPage = async ({ params: { id } }: Props ) => {
	const issueById = await prisma.issue.findUnique({
		where: { id: parseInt(id) }
	});

	if (!issueById)
		notFound()

	return (
		<div>
			<h1>{issueById.title}</h1>
			<p>{issueById.description}</p>
			<h1>{issueById.status}</h1>
			<h1>{issueById.createdAt.toDateString()}</h1>
		</div>
	)
}

export default IssueDetailsPage