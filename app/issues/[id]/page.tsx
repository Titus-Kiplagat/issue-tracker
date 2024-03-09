import { IssueStatusBadge } from "@/app/components";
import { Card, Flex, Heading, Text } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import Markdown from 'react-markdown';
import { prisma } from "../../../server/db/client";

interface Props {
  params: { id: string };
}

const IssueDetailsPage = async ({ params: { id } }: Props) => {
  const issueById = await prisma.issue.findUnique({
    where: { id: parseInt(id) },
  });

  if (!issueById) notFound();

  return (
    <div className="space-y-3">
      <Heading>{issueById.title}</Heading>
      <Flex gap="3">
        <IssueStatusBadge status={issueById.status} />
        <Text>{issueById.createdAt.toDateString()}</Text>
      </Flex>
      <Card className="mt-4 prose">
        <Markdown>{issueById.description}</Markdown>
      </Card>
    </div>
  );
};

export default IssueDetailsPage;
