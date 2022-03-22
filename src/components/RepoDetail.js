import GitHubIcon from '@mui/icons-material/GitHub';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import ForkRightIcon from '@mui/icons-material/ForkRight';

const RepoDetail = ({ details }) => {

    return(
        <div className="w-[100%] rounded-lg border-slate-500 flex-col">
            <div>
                <h1>
                    {details?.name}
                </h1>
            </div>
        </div>
    )

}

export default RepoDetail;
