import { Link, useLocation, useNavigate } from "react-router-dom";
import cloudKichen from "../../assets/logo-1.png";
import { FcGoogle } from "react-icons/fc";
import { useContext } from "react";
import { AuthContext } from "../Contexts/AuthProvider";
import { toast } from "react-hot-toast";

const Login = () => {
  const newLocal =
    "w-1/2 p-8 md:block hidden bg-orange-500 h-[500px] rounded-2xl ";

  const { login, signInWithGoogle } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const handleLogin = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    login(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        const currentUser = { email: user.email };
        console.log(currentUser);
        //get jwt token
        fetch("https://cloud-kichen-backend.vercel.app/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(currentUser),
        })
          .then((res) => res.json())
          .then((data) => localStorage.setItem("home-kichen", data.token));

        form.reset();
        toast.success("Login Successfully");
        navigate(from, { replace: true });
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        console.log(user);
        const currentUser = { email: user.email };
        //get jwt token
        fetch("https://cloud-kichen-backend.vercel.app/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(currentUser),
        })
          .then((res) => res.json())
          .then((data) => localStorage.setItem("home-kichen", data.token));
        toast.success("Login Successfully");
        navigate(from, { replace: true });
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };
  return (
    <section className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-cyan-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center ">
        <div className="sm:w-1/2 px-16 items-center">
          <h2 className="font-bold text-2xl text-orange-950">Login</h2>
          <p className="text-sm mt-4 text-orange-500">
            If you already a member,easily login
          </p>
          <form
            onSubmit={handleLogin}
            className="flex flex-col gap-4  text-black"
          >
            <input
              type="text"
              name="email"
              placeholder="Email"
              className="p-2 mt-8 rounded-xl border"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="p-2  rounded-xl border w-full"
              required
            />
            <button className="bg-orange-600 rounded-xl text-white py-2 hover:scale-110 duration-300">
              Login
            </button>
          </form>
          <div className="mt-10 grid grid-cols-3 items-center text-gray-500">
            <hr className="border-gray-400" />
            <p className="text-center text-sm">OR</p>
            <hr className="border-gray-400" />
          </div>
          <button
            className="bg-white border py-2 w-full rounded-xl mt-5 text-sm text-gray-600
           font-bold flex items-center justify-center hover:scale-110 duration-300 "
            onClick={handleGoogleSignIn}
          >
            <FcGoogle className="mr-3" fontSize="large" />
            Login with Google
          </button>
          <p className="mt-5 text-xs text-gray-700 py-2 border-b border-gray-600">
            Forget your password?
          </p>
          <div className="flex justify-between items-center text-gray-700 sm:gap-2">
            <p className="text-xs mt-5">If you don&#39;t have an account</p>
            <button className="bg-white py-2 px-5 rounded-xl border mt-3 hover:scale-110 duration-300">
              <Link to={"/register"}>Register</Link>
            </button>
          </div>
        </div>
        <div className={newLocal}>
          <div className="relative top-24">
            <img src={cloudKichen} alt="" className="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
