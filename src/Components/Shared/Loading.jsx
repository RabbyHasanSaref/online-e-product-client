
const Loading = () => {
    return (
        <div className="w-full md:min-h-[calc(100vh-302px)] min-h-[calc(100vh-252px)] my-10 gap-x-2 flex justify-center items-center">
        <div className="w-5 bg-[#d991c2] animate-pulse h-5 rounded-full animate-bounce"></div>
        <div className="w-5 animate-pulse h-5 bg-[#9869b8] rounded-full animate-bounce"></div>
        <div className="w-5 h-5 animate-pulse bg-[#6756cc] rounded-full animate-bounce"></div>
      </div>
    );
};

export default Loading;