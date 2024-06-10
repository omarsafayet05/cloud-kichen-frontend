import { Link, useLoaderData } from "react-router-dom";

import { toast } from "react-hot-toast";
import { useContext, useEffect, useState } from "react";
import FeedbackCard from "./FeedbackCard";
import { AuthContext } from "../Contexts/AuthProvider";
import ModalSecond from "./ModalSecond";
import Rating from "../Rating/Rating";

const Review = () => {
  const [review, setReview] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [warning, setWarning] = useState("");
  const { user } = useContext(AuthContext);
  const details = useLoaderData();
  const { title, price, rating, description, ingredients, img, _id } = details;
  const [stars, setStars] = useState(rating.number);

  const handlePost = (e) => {
    e.preventDefault();
    const form = e.target;
    const message = form.message.value;
    const rating = form.rating.value;
    if (
      message.length > 225 ||
      rating > 5.0 ||
      (message.length > 225 && rating > 5.0)
    ) {
      setWarning(
        "*You exceeded typing word limit and rating should not be greater than five star"
      );
      return false;
    }
    const post = {
      meal_id: _id,
      rating: rating,
      message: message,
      email: user?.email,
      photo: user?.photoURL,
      name: user?.displayName,
      date: new Date(),
    };
    console.log(post);
    fetch(
      "https://cloud-kichen-backend.vercel.app/posts",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${localStorage.getItem("cloud-kichen")}`,
        },
        body: JSON.stringify(post),
      },
      form.reset(),
      toast.success("Your feedback has been posted!")
    ).catch((err) => toast.error(err));
  };

  useEffect(() => {
    fetch("https://cloud-kichen-backend.vercel.app/posts", {
      headers: {
        authorization: `Bearer ${localStorage.getItem("cloud-kichen")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, []);
  console.log(review);

  //show reviews which posted at all meals categories
  const results = review.filter((x) => x.meal_id === _id);

  const noReviews = review.map((item, i) => item.meal_id);
  const Reviews = noReviews.find((x) => x === details._id);

  console.log(Reviews);

  const feedbackMessage = Reviews == undefined ? "No reviews were added" : "";

  const protectedBtn = {
    display: "inline",
  };
  const commonBtn = {
    display: "none",
  };
  const protectedLogin = {
    display: "none",
  };
  const commonLogin = {
    display: "inline",
  };

  const goLogin = () => {
    toast((t) => (
      <span>
        Go to <b>login</b>
        <button
          className="bg-[#FF0000] hover:bg-[#f32323] px-3 py-2 rounded-lg text-white ml-2"
          onClick={() => toast.dismiss(t.id)}
        >
          Dismiss
        </button>
      </span>
    ));
  };

  const protectedPost = user?.email ? protectedBtn : commonBtn;
  const loginBtn = user?.email ? protectedLogin : commonLogin;

  return (
    <div className="">
      <section className="flex flex-col">
        <div className="flex justify-center items-center gap-4 lg:flex-row flex-col-reverse bg-[#1a120b] p-5 rounded-lg relative my-10">
          <div className="lg:w-4/12 w-full">
            <div className="bg-[#f5f5f5] rounded-xl relative z-1 top-[-70] left-20 w-[240px] h-[240px] overflow-hidden">
              <img src={img} alt="" className="drop-shadow " />
            </div>
          </div>
          <div className="md:w-6/12 w-full">
            <h1 className="text-4xl font-bold">{title}</h1>
            <div className="flex justify-between mt-2 mb-1">
              <p className="">
                Price:<span className="text-md font-semibold"> {price} </span>
                BDT
              </p>
              <p className="flex justify-center items-center">
                Rating:
                <span className=" ml-1">
                  <Rating stars={stars} />
                </span>
              </p>
            </div>
            <p className="text-lg text-justify">{description}</p>
          </div>
        </div>
        <div className="mt-2  bg-[#1a120b] flex flex-col p-5 rounded-lg relative">
          <h1 className="text-4xl font-bold mt-2 mb-1">Ingredients:</h1>
          {ingredients.map((ingredient, i) => (
            <ul key={i} className="flex justify-between">
              <li>{ingredient.name}</li>
              <li>{ingredient.quantity}</li>
            </ul>
          ))}
        </div>
      </section>
      <section className=" my-10 grid place-items-center">
        <h1 className="text-4xl font-bold text-center my-10">
          Customer Review
        </h1>
        <div className="bg-[#1a120b] text-[#333] rounded-lg p-5 gap-y-2 w-[60%]">
          <form onSubmit={handlePost}>
            <div className="flex align-center ">
              <div>
                <textarea
                  name="message"
                  className="textarea textarea-bordered h-24 w-[70%] rounded-lg mb-2"
                  placeholder="Your message"
                  required
                />
                <input
                  name="rating"
                  className="input w-[70%] h-10 rounded-lg
            input-bordered"
                  type="float number"
                  placeholder="Give your ratings"
                />
              </div>

              <input
                style={protectedPost}
                className="bg-[#FBA850] hover:bg-[#d18636] w-[30%] h-10 rounded-lg  text-white"
                type="submit"
                value="Post"
              />
              <button
                style={loginBtn}
                className="bg-[#FBA850] hover:bg-[#d18636] h-10 w-[30%] rounded-lg  text-white mt-1"
                onClick={goLogin}
              >
                <Link to={"/login"}>login</Link>
              </button>
            </div>
          </form>
          <p className="text-[red] mt-2">{warning}</p>
        </div>
      </section>
      <div className="grid grid-cols-1 mt-20">
        <p className=" p-7 mb-6 w-[70%] mx-auto">{feedbackMessage}</p>
        {results.map((result, i) => (
          <div
            key={i}
            className="grid grid-row-2 p-7 feedback-style rounded-md mb-6 w-[70%] mx-auto h-min-[50%]"
          >
            <FeedbackCard
              result={result}
              user={user}
              review={review}
              setReview={setReview}
              feedbackMessage={feedbackMessage}
            ></FeedbackCard>
            <ModalSecond visibleTwo={showModal} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Review;
