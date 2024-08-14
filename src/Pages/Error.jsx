import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div
      style={{ minHeight: "calc(100vh - 115px)" }}
      className="flex items-center justify-center flex-col px-6"
    >
      <div className="flex flex-col gap-4">
        <h2 className="text-6xl font-bold text-rose-500 text-center">404</h2>
        <h3 className="font-semibold text-3xl text-black text-center">
          No Routes Found
        </h3>
        <p className="text-center">
          You might be in the wrong place! <br />
          <span className="text-rose-500 font-bold">
            But Don't Worry, you can jump into our Home to enjoy plenty stuffs
          </span>
        </p>
        <Link
          href={"/"}
          className="px-5 py-4 w-fit mx-auto text-rose-500 hover:bg-rose-500 border border-rose-500 rounded hover:text-white transition-all duration-300 font-semibold"
        >
          Back to Home
        </Link>
      </div>
    </div>
    );
};

export default Error;