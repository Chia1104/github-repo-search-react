import { useISOtoDate } from "../hooks/useISOtoDate"
import {useNavigate, useParams} from "react-router-dom";
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import {forwardRef, useCallback} from "react";
import {setRepoDetails} from "../redux/actions/ReposAction";
import {useDispatch} from "react-redux";
import {OPEN_REPO_DETAIL_MODAL} from "../utils/constants";

const RepoList = forwardRef(({repo}, ref) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const params = useParams();
    const getRepo = useCallback(() => {
        dispatch({ type: OPEN_REPO_DETAIL_MODAL });
        dispatch(setRepoDetails(params.userName, repo.name));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [params.userName, repo.name])

    return (
        <div className="flex justify-center mb-4" ref={ref || null}>
            <div className="flex-col repo-box">
                <div className="flex w-[100%] mb-3">
                    <h1 className="text-primary my-1 md:text-xl sm:text-lg w-[85%] truncate">
                        {repo.name}
                    </h1>
                    <button
                        className="w-[15%] bg-[#2B2E4A] rounded-full drop-shadow-lg text-white hover:bg-[#FF9000] transition ease-in-out md:text-md sm:text-sm h-9"
                        onClick={()=> {
                            getRepo()
                            setTimeout(() => {
                                navigate(`/users/${params.userName}/repos/${repo.name}`)
                            }, 100)
                        }}>
                        More
                    </button>
                </div>
                <p className="text-secondary my-1 text-base truncate min-h-[24px]">
                    {repo.description}
                </p>
                <div className="flex items-center">
                    <div className="flex w-[50%] items-center">
                        <p className="text-secondary text-sm w-[50%]" >
                            {repo.language}
                        </p>
                        <div className="flex w-[50%] items-center">
                            {
                                repo.stargazers_count !== 0 ? <StarIcon className="text-yellow-400 text-sm"/> : <StarBorderIcon className="text-yellow-400 text-sm"/>
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
})

export default RepoList;
