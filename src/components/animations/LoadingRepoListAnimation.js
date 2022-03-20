import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';

const LoadingRepoListAnimation = () => {
    return (
        <div className="flex flex-col items-center">
            <Box className="repo-box my-5">
                <Skeleton />
                <Skeleton animation="wave" />
                <Skeleton animation={false} />
            </Box>
            <Box className="repo-box my-5">
                <Skeleton />
                <Skeleton animation="wave" />
                <Skeleton animation={false} />
            </Box>
            <Box className="repo-box my-5">
                <Skeleton />
                <Skeleton animation="wave" />
                <Skeleton animation={false} />
            </Box>
            <Box className="repo-box my-5">
                <Skeleton />
                <Skeleton animation="wave" />
                <Skeleton animation={false} />
            </Box>
        </div>
    );
}

export default LoadingRepoListAnimation;
