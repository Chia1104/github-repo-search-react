import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';

const LoadingRepoListAnimation = () => {
    return (
        <div className="flex flex-col items-center">
            <Box className="repo-box my-5">
                <Skeleton animation="wave" />
                <Skeleton animation="wave" />
                <Skeleton animation="wave" />
            </Box>
            <Box className="repo-box my-5">
                <Skeleton animation="wave" />
                <Skeleton animation="wave" />
                <Skeleton animation="wave" />
            </Box>
            <Box className="repo-box my-5">
                <Skeleton animation="wave" />
                <Skeleton animation="wave" />
                <Skeleton animation="wave" />
            </Box>
            <Box className="repo-box my-5">
                <Skeleton animation="wave" />
                <Skeleton animation="wave" />
                <Skeleton animation="wave" />
            </Box>
        </div>
    );
}

export default LoadingRepoListAnimation;
