import { notFound } from 'next/navigation';
import { prisma } from '../../../../server/db/client';
import dynamic from 'next/dynamic';
import IssueFormSkeleton from './loading';

interface Props {
	params: { id: string }
}

const EditIssuePage = async ({ params: { id } }: Props) => {
	const issueById = await prisma.issue.findUnique({
		where: { id: parseInt(id) },
	})
	
	if (!issueById) notFound();

	const IssueForm = dynamic(
		() => import("@/app/issues/_components/IssueForm"),
		{
			ssr: false,
			loading: () => <IssueFormSkeleton />
		}
	)
	
	return (
		<IssueForm issue={issueById} />
	)
}

export default EditIssuePage