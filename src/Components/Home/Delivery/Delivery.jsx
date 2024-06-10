const time =
  "https://res.cloudinary.com/di8rfmavc/image/upload/v1691253155/time_jo4eki.jpg";
const hard =
  "https://res.cloudinary.com/di8rfmavc/image/upload/v1691253249/hard_yzxdja.jpg";
const social =
  "https://res.cloudinary.com/di8rfmavc/image/upload/v1691253279/social_dpm5er.jpg";

const Delivery = () => {
  return (
    <div className=" py-10 ">
      <div className="mt-8 text-gray-100 text-center">
        <h3 className="text-4xl font-semibold">Delivery</h3>
        <p className="text-red-500 mt-3 text-lg ">Always on time for you</p>
        <div className="flex items-center justify-center mt-12 gap-10 flex-wrap">
          <div className="border-2 border-[#FBA850] relative min-w-[10rem] max-w-[16rem] p-3 rounded-xl">
            <img src={time} alt="" className="rounded-xl " />
            <p className="text-md mt-3">Our Delivery guy is always on time</p>
          </div>
          <div className="border-2 border-[#FBA850] relative min-w-[10rem] max-w-[16rem] p-3 rounded-xl">
            <img src={hard} alt="" className="rounded-xl h-[230px]" />
            <p className="text-md mt-3">He works very well</p>
          </div>
          <div className="border-2 border-[#FBA850] relative min-w-[10rem] max-w-[16rem] p-3 rounded-xl">
            <img src={social} alt="" className="rounded-xl h-[230px]" />
            <p className="text-md mt-3">He is friendly and social</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
