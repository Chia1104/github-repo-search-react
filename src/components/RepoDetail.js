import GitHubIcon from '@mui/icons-material/GitHub';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import BookmarksOutlinedIcon from '@mui/icons-material/BookmarksOutlined';
import {useISOtoDate} from "../hooks/useISOtoDate";

const RepoDetail = ({ details }) => {

    return(
        <div className="bg-white rounded-lg p-3 shadow-lg w-[100%] flex-col">
            <div className="md:flex w-[100%] md:mb-3">
                <div className="flex sm:mb-3">
                    <BookmarksOutlinedIcon fontSize="medium" className="mr-3"/>
                    <h1 className="text-lg mr-5">
                        {details.full_name}
                    </h1>
                </div>
                <div className="flex sm:mb-3">
                    <h1 className="text-lg border rounded-full px-2 mr-3">
                        {details.visibility}
                    </h1>
                    <a href={details.svn_url} target="_blank" rel="noopener noreferrer">
                        <GitHubIcon className="hover:text-[#FF9000]"/>
                    </a>
                </div>
            </div>
            <div className="w-[100%] mb-3">
                <p>
                    {details.description}
                </p>
            </div>
            <div className="flex items-center">
                <div className="flex w-[50%] items-center">
                    <p className="text-secondary text-sm w-[50%]" >
                        {details.language}
                    </p>
                    <div className="flex w-[50%] items-center">
                        {
                            details.stargazers_count !== 0 ? (
                                <StarIcon className="text-yellow-400 text-sm"/>
                            ) : (
                                <StarBorderIcon className="text-yellow-400 text-sm"/>
                            )
                        }
                        <p className="text-secondary text-sm" >
                            {details.stargazers_count}
                        </p>
                    </div>

                </div>
                <p className="text-secondary text-sm w-[50%] text-right">
                    {useISOtoDate(details.created_at)}
                </p>
            </div>
        </div>
    )

}

export default RepoDetail;
