import { Box, Grid } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import { prisma } from "../../../server/db/client";
import EditIssueButton from "../_components/EditIssueButton";
import IssueDetails from "../_components/IssueDetails";

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
        <EditIssueButton issueId={issueById.id} />
      </Box>
    </Grid>
  );
};

export default IssueDetailsPage;
