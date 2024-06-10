import { Link } from "react-router-dom";

const ModalSecond = ({ visibleTwo }) => {
  if (!visibleTwo) return null;

  return (
    <div className="inset-24 fixed -top-20 flex justify-center items-center">
      <div className="bg-white rounded-2xl shadow-lg w-2/3">
        <div className="bg-[#f6f6f6] text-[#333]  p-3 h-24 w-full flex justify-center items-center">
          <p>
            You need to go &nbsp;
            <Link className="text-blue-500 font-extrabold" to={"/login"}>
              Login
            </Link>
            &nbsp; page
          </p>
        </div>
      </div>
    </div>
  );
};

export default ModalSecond;
