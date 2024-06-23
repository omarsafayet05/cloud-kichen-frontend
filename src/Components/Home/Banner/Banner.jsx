import img1 from "./../../../assets/cloud-kichen-banner.jpg";

const Banner = () => {
  return (
    <div className="carousel-item relative w-full min-h">
      <div className="carousel-image mt-10">
        <img
          src={img1}
          alt=""
          className="w-full rounded-xl object-cover aspect-[21/9]"
        />
      </div>
      <div className="absolute flex justify-end transform-translate-y-1/2 left-20 lg:left-24 top-1/2">
        <h1 className=" text-5xl font-extrabold lg:text-8xl ">Cloud</h1>
        <br />
        <h2 className="text-xl italic lg:text-3xl">Kichen</h2>
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 w-2/5 left-30 top-3/4">
        <p className=" text-md  text-white lg:text-xl">
          " Order your meal on our site & enjoy the meal"
        </p>
      </div>
      <div className="absolute flex justify-start transform -translate-y-1/2 w-2/5 left-[42%] top-3/4">
        <button className="btn btn-warning mr-5">Contact us</button>
      </div>
    </div>
  );
};

export default Banner;
