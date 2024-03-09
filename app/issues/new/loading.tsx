import { Skeleton } from '@/app/components';
import { Box } from '@radix-ui/themes';

const LoadingNewIssuePage = () => {
	return (
		<Box className="space-y-3">
			<Skeleton />
			<Skeleton height="20rem" />
		</Box>
	)
}

export default LoadingNewIssuePage