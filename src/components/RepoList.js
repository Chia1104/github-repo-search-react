import { useISOtoDate } from "../hooks/useISOtoDate"
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';

const RepoList = ({ repo }) => {
    return (
        <div className="flex justify-center mb-4">
            <div className="flex-col repo-box">
                <h1 className="text-primary my-1 md:text-xl sm:text-lg">
                    {repo.name}
                </h1>
                <p className="text-secondary my-1 text-base truncate">
                    {repo.description === null ? "There is no description" : repo.description}
                </p>
                <div className="flex items-center">
                    <div className="flex w-[50%] items-center">
                        <p className="text-secondary text-sm w-[50%]" >
                            {repo.language}
                        </p>
                        <div className="flex w-[50%] items-center">
                            {
                                repo.stargazers_count !== 0 ? (
                                    <StarIcon className="text-yellow-400 text-sm"/>
                                ) : (
                                    <StarBorderIcon className="text-yellow-400 text-sm"/>
                                )
                            }
                            <p className="text-secondary text-sm" >
                                {repo.stargazers_count}
                            </p>
                        </div>

                    </div>
                    <p className="text-secondary text-sm w-[50%] text-right">
                        {useISOtoDate(repo.created_at)}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default RepoList;
