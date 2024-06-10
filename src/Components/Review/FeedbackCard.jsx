import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import Modal from "./Modal";
import Rating from "../Rating/Rating";
import ModalSecond from "./ModalSecond";

const FeedbackCard = ({ result, user, review, setReview, feedbackMessage }) => {
  const { message, rating, _id, name, email, photo } = result;
  const [showModal, setShowModal] = useState(false);
  const [showModalTwo, setShowModalTwo] = useState(false);
  const [stars] = useState(rating);

  const handleDelete = (_id) => {
    const proceed = window.confirm(
      "Are you sure,you want to delete this post?"
    );

    if (proceed) {
      fetch(`https://cloud-kichen-backend.vercel.app/posts/${_id}`, {
        method: "DELETE",
        headers: {
          authorization: `Bearer ${localStorage.getItem("cloud-kichen")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            toast.success("Deleted Post");
            const remaining = review.filter((pst) => pst._id !== _id);
            setReview(remaining);
          }
        });
    }
  };

  useEffect(() => {
    if (showModalTwo) {
      const timer = setTimeout(() => {
        setShowModalTwo(false);
      }, 3500);
      return () => clearTimeout(timer);
    }
  }, [showModalTwo]);

  const handleOnClose = () => setShowModal(false);
  const protectedDelete =
    user?.email === email
      ? () => handleDelete(_id)
      : (e) => {
          e.preventDefault();
          setShowModalTwo(true);
        };

  const protectedUpdate =
    user?.email === email
      ? () => setShowModal(true)
      : (e) => {
          e.preventDefault();
          setShowModalTwo(true);
        };

  console.log(result);

  const profile =
    photo ||
    "https://res.cloudinary.com/di8rfmavc/image/upload/v1673536753/profile_apmnkh.png";

  return (
    <div className="">
      <div className="flex justify-between">
        <p className="flex justify-center items-center">
          Rating:
          <span className=" ml-1">
            <Rating stars={stars} />
          </span>
        </p>
        <div className="flex justify-start gap-2 ">
          <button
            onClick={protectedDelete}
            className="bg-[#FBA850] hover:bg-[#d18636] px-3 py-1 rounded text-white"
          >
            Delete
          </button>
          <button
            onClick={protectedUpdate}
            className="bg-[#FBA850] hover:bg-[#d18636] px-3 py-1 rounded text-white transition"
          >
            Edit
          </button>
        </div>
      </div>
      <div className="flex flex-start items-center gap-2 w-[90%]">
        <div className="flex justify-center flex-shrink-0 items-center gap-3 ">
          <div className=" lg:w-14 w-8 rounded-full  bg-[#fff] overflow-hidden">
            <img src={profile} alt="" className="" />
          </div>
          <p>{name}</p>
        </div>
        <div className="flex flex-wrap ">
          <p className="text-[#fff] text-justify">{message}</p>
        </div>
      </div>
      <Modal
        visible={showModal}
        onClose={handleOnClose}
        result={result}
        review={review}
        setReview={setReview}
      />
      <ModalSecond visibleTwo={showModalTwo} />
    </div>
  );
};

export default FeedbackCard;
