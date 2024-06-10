import React, { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { AuthContext } from "../Contexts/AuthProvider";
import ModalSecond from "./ModalSecond";

const Modal = ({ visible, onClose, result, review, setReview }) => {
  const [warning, setWarning] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [post, setPost] = useState({});
  const { user } = useContext(AuthContext);

  console.log(post);
  if (!visible) return null;
  const { message, rating, _id } = result;

  const handleUpdate = (_id) => {
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
    fetch(`https://cloud-kichen-backend.vercel.app/posts/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("cloud-kichen")}`,
      },
      body: JSON.stringify(post),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Your feedback has been updated!");
          console.log(data);
          const updatedDoc = review.find((x) => x._id === _id);
          setReview(updatedDoc);
        }
      })
      .catch((err) => toast.error(err));
  };

  const handleInputChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const update = { ...post };
    update[field] = value;
    setPost(update);
  };

  const protectedUpdate = user?.email
    ? (e) => {
        //e.preventDefault();
        handleUpdate(_id);
      }
    : (e) => {
        e.preventDefault();
        setShowModal(true);
      };

  return (
    <div>
      <div className=" inset-24 fixed -top-2 flex justify-center items-center">
        <div className="bg-white rounded shadow-lg w-2/3">
          {/* modal header */}
          <div className="border-b px-4 py-2">
            <h3 className="text-2xl font-bold text-[#333] text-center">
              Edit Post
            </h3>
          </div>
          {/* modal body */}
          <div className="bg-[#f6f6f6] text-[#333]  p-3 gap-y-2 w-full">
            <form onSubmit={protectedUpdate}>
              <textarea
                onChange={handleInputChange}
                type="text"
                name="message"
                className="textarea textarea-bordered h-24 w-[60%] rounded-lg "
                placeholder="Your message"
                defaultValue={message}
                required
              />
              <input
                onChange={handleInputChange}
                name="rating"
                className="input w-[60%] h-10 rounded-lg
            input-bordered mb-2"
                type="float number"
                placeholder="Rate given service"
                defaultValue={rating}
                required
              />
              <div className="flex justify-end items-center w-100 border-t p-3 ">
                <button className=" bg-[#FBA850] hover:bg-[#d18636] px-3 py-1 rounded text-white mr-1">
                  <input type="submit" value="Edit" />
                </button>
                <button
                  className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-white "
                  onClick={onClose}
                >
                  cancel
                </button>
              </div>
            </form>
            <p className="text-[red] mt-2">{warning}</p>
          </div>
        </div>
      </div>
      <ModalSecond visibleTwo={showModal} />
    </div>
  );
};

export default Modal;
