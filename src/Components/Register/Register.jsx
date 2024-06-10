import { Link } from "react-router-dom";
import cloudKichen from "../../assets/logo-1.png";
import { useContext } from "react";
import { AuthContext } from "../Contexts/AuthProvider";
import { toast } from "react-hot-toast";

const Register = () => {
  const newLocal =
    "w-1/2 p-8 md:block hidden bg-orange-500 h-[500px] rounded-2xl ";

  const { createUser, updateUserProfile } = useContext(AuthContext);

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const displayName = form.displayName.value;
    const photoURL = form.photoURL.value;

    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((userCredentials) => {
        const loggedUser = userCredentials.user;
        console.log(loggedUser);
        updateUserProfile(displayName, photoURL);
        form.reset();
        toast.success("You are Registered");
      })
      .then.catch((err) => {
        toast.error(err.message);
      });
  };
  return (
    <section className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-cyan-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center ">
        <div className="sm:w-1/2 px-16 items-center">
          <h2 className="font-bold text-2xl text-orange-950">Login</h2>
          <p className="text-sm mt-4 text-orange-500">
            If you aren&#39;t a member,go to register
          </p>
          <form
            onSubmit={handleSignUp}
            className="flex flex-col gap-3 text-black"
          >
            <input
              type="text"
              name="displayName"
              placeholder="Your Name"
              className="p-2 mt-8 rounded-xl border"
            />
            <input type="url" name="photoURL" placeholder=" Your Image" />
            <input
              type="text"
              name="email"
              placeholder="Email"
              className="p-2 rounded-xl border"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="p-2  rounded-xl border w-full"
            />
            <button className="bg-orange-600 rounded-xl text-white py-2 hover:scale-110 duration-300">
              Register
            </button>
          </form>
          <div className="mt-10 grid grid-cols-3 items-center text-gray-500">
            <hr className="border-gray-400" />
            <p className="text-center text-sm">OR</p>
            <hr className="border-gray-400" />
          </div>

          <div className="flex justify-between items-center text-gray-700 sm:gap-2">
            <p className="text-xs mt-5">Already have an account?</p>
            <button className="bg-white py-2 px-5 rounded-xl border mt-3 hover:scale-110 duration-300">
              <Link to={"/login"}> Login</Link>
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

export default Register;
