import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';

const LoadingRepoList = () => {
    return (
        <div className="flex flex-col items-center">
            <Box sx={{ width: 480 }} className="repo-box my-5">
                <Skeleton />
                <Skeleton animation="wave" />
                <Skeleton animation={false} />
            </Box>
            <Box sx={{ width: 480 }} className="repo-box my-5">
                <Skeleton />
                <Skeleton animation="wave" />
                <Skeleton animation={false} />
            </Box>
            <Box sx={{ width: 480 }} className="repo-box my-5">
                <Skeleton />
                <Skeleton animation="wave" />
                <Skeleton animation={false} />
            </Box>
            <Box sx={{ width: 480 }} className="repo-box my-5">
                <Skeleton />
                <Skeleton animation="wave" />
                <Skeleton animation={false} />
            </Box>
        </div>
    );
}

export default LoadingRepoList;
