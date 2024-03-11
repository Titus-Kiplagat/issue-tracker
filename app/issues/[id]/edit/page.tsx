import React from 'react'
import IssueForm from '../../_components/IssueForm'
import { prisma } from '../../../../server/db/client';
import { notFound } from 'next/navigation';

interface Props {
	params: { id: string }
}

const EditIssuePage = async ({ params: { id } }: Props) => {
	const issueById = await prisma.issue.findUnique({
		where: { id: parseInt(id) },
	})
	
	if (!issueById) notFound();
	
	return (
		<IssueForm issue={issueById} />
	)
}

export default EditIssuePage