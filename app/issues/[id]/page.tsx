import { Box, Flex, Grid } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import { prisma } from "../../../server/db/client";
import EditIssueButton from "../_components/EditIssueButton";
import IssueDetails from "../_components/IssueDetails";
import DeleteIssueButton from "../_components/DeleteIssueButton";

interface Props {
  params: { id: string };
}

const IssueDetailsPage = async ({ params: { id } }: Props) => {
  const issueById = await prisma.issue.findUnique({
    where: { id: parseInt(id) },
  });

  if (!issueById) notFound();

  return (
    <Grid columns={{ initial: "1", md: "2" }} gap="3">
      <Box className="space-y-3">
        <IssueDetails issue={issueById} />
      </Box>
      <Box>
        <Flex direction="column" gap="4">
          <DeleteIssueButton issueId={issueById.id} />
          <EditIssueButton issueId={issueById.id} />
        </Flex>
      </Box>
    </Grid>
  );
};

export default IssueDetailsPage;
