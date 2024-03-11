import { IssueStatusBadge } from "@/app/components";
import { Box, Button, Card, Flex, Grid, Heading, Text } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import Markdown from 'react-markdown';
import { prisma } from "../../../server/db/client";
import { Pencil2Icon } from '@radix-ui/react-icons'
import Link from "next/link";

interface Props {
  params: { id: string };
}

const IssueDetailsPage = async ({ params: { id } }: Props) => {
  const issueById = await prisma.issue.findUnique({
    where: { id: parseInt(id) },
  });

  if (!issueById) notFound();

  return (
    <Grid columns={{ initial: '1', md: '2' }} gap="3">
    <Box className="space-y-3">
      <Heading>{issueById.title}</Heading>
      <Flex gap="3">
        <IssueStatusBadge status={issueById.status} />
        <Text>{issueById.createdAt.toDateString()}</Text>
      </Flex>
      <Card className="mt-4 prose">
        <Markdown>{issueById.description}</Markdown>
      </Card>
      </Box>
      <Box>
        <Button>
          <Pencil2Icon />
          <Link href={`/issues/${issueById.id}/edit`}>Edit Button</Link>
        </Button>
      </Box>
    </Grid>
  );
};

export default IssueDetailsPage;
