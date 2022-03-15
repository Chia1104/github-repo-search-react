import { useISOtoDate } from "../hooks/useISOtoDate"

const RepoList = ({ repo }) => {
    return (
        <div className="flex justify-center mb-4">
            <div className="flex-col repo-box">
                <h1 className="text-primary my-1 text-xl">
                    {repo.name}
                </h1>
                <p className="text-secondary my-1 text-base truncate">
                    {repo.description === null ? "There is no description" : repo.description}
                </p>
                <div className="flex">
                    <p className="text-secondary text-sm w-[50%]" >
                        {repo.language}
                    </p>
                    <p className="text-secondary text-sm w-[50%] text-right">
                        {useISOtoDate(repo.created_at)}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default RepoList;
