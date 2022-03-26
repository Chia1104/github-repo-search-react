
const LoadingRepoDetailAnimation = () => {
    return (
        <div className="bg-white rounded-lg p-3 shadow-lg w-[100%] flex-col">
            <div className="bg-gray-200 w-full animate-pulse h-14 rounded-2xl mb-5" />
            <div className="bg-gray-200 w-full animate-pulse h-3 rounded-2xl mb-2" />
            <div className="bg-gray-200 w-full animate-pulse h-3 rounded-2xl mb-2" />
            <div className="bg-gray-200 w-full animate-pulse h-3 rounded-2xl mb-5" />
            <div className="flex w-full items-center">
                <div className="w-1/4">
                    <div className="bg-gray-200 w-4/5 animate-pulse h-3 rounded-2xl mb-3 mr-3" />
                </div>
                <div className="w-1/4">
                    <div className="bg-yellow-400 w-5 h-5 animate-pulse h-3 rounded-full mb-3" />
                </div>
                <div className="w-1/2">
                    <div className="bg-gray-200 w-full animate-pulse h-3 rounded-2xl mb-3 justify-self-end" />
                </div>
            </div>
        </div>
    );
}

export default LoadingRepoDetailAnimation;
