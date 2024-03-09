import { Card, Flex } from "@radix-ui/themes";
import { Skeleton } from '@/app/components';

const LoadingIssueDetailsPage = () => {
  return (
    <div className="space-y-3">
      <Skeleton />
      <Flex gap="3">
        <Skeleton width="5rem" />
        <Skeleton width="8rem" />
      </Flex>
      <Card className="mt-4 prose">
        <Skeleton count={3} />
      </Card>
    </div>
  );
};

export default LoadingIssueDetailsPage;
