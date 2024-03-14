import { Box, Flex, Grid } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import { prisma } from '@/prisma/client';
import EditIssueButton from "../_components/EditIssueButton";
import IssueDetails from "../_components/IssueDetails";
import DeleteIssueButton from "../_components/DeleteIssueButton";
import { getServerSession } from "next-auth";
import authOptions from "@/app/auth/authOptions";
import AssigneeSelect from "../_components/AssigneeSelect";

interface Props {
  params: { id: string };
}

const IssueDetailsPage = async ({ params: { id } }: Props) => {
  const session = await getServerSession(authOptions);

  const issueById = await prisma.issue.findUnique({
    where: { id: parseInt(id) },
  });

  if (!issueById) notFound();

  return (
    <Grid columns={{ initial: "1", md: "2" }} gap="3">
      <Box className="space-y-3">
        <IssueDetails issue={issueById} />
      </Box>
      {session && (
        <Box>
          <Flex direction="column" gap="4">
            <AssigneeSelect issue={issueById} />
            <DeleteIssueButton issueId={issueById.id} />
            <EditIssueButton issueId={issueById.id} />
          </Flex>
        </Box>
      )}
    </Grid>
  );
};

export default IssueDetailsPage;
