import { Link, redirect, useLocation } from "react-router-dom";
import error from "./../../assets/error_404.jpg";

const ErrorPage = () => {
  return (
    <>
      <div className="flex items-center h-screen p-16 bg-gray-100">
        <div className="">
          <div className="w-full">
            <img
              src={error}
              alt=""
              className="w-full rounded-lg object-cover aspect-[21/9]"
            />
            <div className="flex justify-center items-center gap-2 mb-2">
              <Link to={"/"}>
                <button className="btn btn-error w-96  ">Go Back</button>
              </Link>
            </div>
            <p className="text-gray-600 font-semibold">
              OR, Reload this Error Page
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
