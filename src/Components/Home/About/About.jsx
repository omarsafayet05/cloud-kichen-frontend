import person from "./../../../assets/tuna_fish_fried.png";
import parts from "./../../../assets/tuna_egg_bricks.png";

const About = () => {
  return (
    <div className=" flex content-center  my-24">
      <div className="flex lg:flex-row flex-col-reverse">
        <div className="md:w-1/2 w-full relative">
          <img
            src={person}
            className="w-3/5 h-full rounded-lg shadow-2xl"
            alt=""
          />
          <img
            src={parts}
            className="absolute right-5 top-1/2 w-1/4 border-8 rounded-lg shadow-2xl"
            alt=""
          />
        </div>
        <div className="md:w-1/2 w-full">
          <p className="md:text-2xl text-5xl font-bold text-orange-600">
            About Us
          </p>
          <h1 className="text-4xl font-bold  my-5 md:text-left text-center">
            Why our food
            <br />
            is
            <br />
            special to our customer.
          </h1>
          <p className="py-6  md:text-lg text-2xl text-justify ">
            A cloud kitchen utilizes a commercial kitchen for the purpose of
            preparing food for delivery or takeout only, with no dine-in
            customers. Cloud kitchens enable restauranteurs to expand an
            existing restaurant or start a virtual brand at minimal cost.
            <p className="py-6 md:text-lg text-2xl text-justify">
              We provides onsite delivery support, cleaning, maintenance,
              security, logistics, and fulfillment to ensure each order is
              delivered on time. We are able to manage each incoming delivery
              order on one single tablet, to streamline efficiency and maximize
              delivery growth.
            </p>
          </p>
          <button className="btn btn-primary">Get More Info</button>
        </div>
      </div>
    </div>
  );
};

export default About;
