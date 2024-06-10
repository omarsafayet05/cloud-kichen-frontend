import { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { FaUtensils } from "react-icons/fa";
import { toast } from "react-hot-toast";

const image_hosting_key = import.meta.env.VITE_image_hosting_key;
console.log(image_hosting_key);

const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddMeals = () => {
  const { register, handleSubmit, reset } = useForm();
  const [file, setFile] = useState();

  const onSubmit = async (data) => {
    console.log(data);
    const imageFile = { image: data.image[0] };
    console.log(imageFile);
    const res = await axios.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    console.log(res.data.data.display_url);
    if (res.data.success) {
      const mealDetails = {
        title: data.name,
        rating: { number: parseFloat(data.rating) },
        meal_id: data.meal_id,
        price: data.price,
        description: data.recipe,
        img: res.data.data.display_url,
        ingredients: [],
      };
      const mealsRes = await axios.post(
        "https://cloud-kichen-backend.vercel.app/add_meals",
        mealDetails,
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem("cloud-kichen")}`,
          },
        }
      );
      console.log(mealsRes.data);
      if (mealsRes.data.insertedId) {
        reset();
        toast.success("Your new meal has been added!");
      }
    }
  };
  return (
    <div className="">
      <div className="flex items-center justify-center my-18">
        <div className="bg-[#1a120b]  rounded-xl shadow-lg w-6/12 p-5 m-10">
          <h2 className="lg:text-3xl font-bold text-xl text-[#333] text-center">
            Add Meals
          </h2>
          <div className="">
            {/* "handleSubmit" will validate your inputs before invoking
            "onSubmit"  */}
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* register your input into the hook by invoking the "register" function */}

              <div className=" flex flex-col lg:flex-row gap-3">
                {/* Heading */}
                <label className="form-control w-full my-3">
                  <div className="label">
                    <span className="label-text  text-white">
                      Heading Name*
                    </span>
                  </div>
                  <input
                    type="text"
                    placeholder="Heading name"
                    {...register("name", { required: true })}
                    className="input input-bordered w-full text-slate-900"
                  />
                </label>
                {/* rating */}
                <label className="form-control w-full my-3">
                  <div className="label">
                    <span className="label-text  text-white">Rating</span>
                  </div>
                  <input
                    type="float number"
                    placeholder="Rating"
                    {...register("rating", { required: true })}
                    className="input input-bordered w-full text-slate-900"
                  />
                </label>
              </div>

              <div className="flex flex-col lg:flex-row gap-3">
                {/* meal id */}
                <label className="form-control w-full my-3">
                  <div className="label">
                    <span className="label-text  text-white">Meal ID</span>
                  </div>
                  <input
                    type="number"
                    placeholder="Meal ID"
                    {...register("meal_id", { required: true })}
                    className="input input-bordered w-full text-slate-900 "
                  />
                </label>
                {/* price */}
                <label className="form-control w-full my-3">
                  <div className="label">
                    <span className="label-text  text-white">Price</span>
                  </div>
                  <input
                    type="float number"
                    placeholder="Price"
                    {...register("price", { required: true })}
                    className="input input-bordered w-full text-slate-900 "
                  />
                </label>
              </div>
              {/* Meal Details */}
              <label className="form-control w-full my-3">
                <div className="label">
                  <span className="label-text  text-white">Details</span>
                </div>
                <textarea
                  className="textarea  text-slate-900 h-24 min-w-full"
                  {...register("recipe", { required: true })}
                  placeholder="Bio"
                ></textarea>
              </label>
              {/* image upload */}
              <label className="form-control w-full my-3">
                <div className="label">
                  <span className="label-text text-white">Image Upload</span>
                </div>

                <input
                  type="file"
                  {...register("image", { required: true })}
                  className="file-input file-input-bordered file-input-warning w-full max-w-xs"
                />
              </label>
              {/* submit button */}
              <button className="btn btn-warning max-w-xs mx-auto">
                <FaUtensils className="ml-4"></FaUtensils>submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddMeals;
