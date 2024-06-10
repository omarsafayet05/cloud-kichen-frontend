import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const OurProducts = () => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    fetch("https://cloud-kichen-backend.vercel.app/meals")
      .then((res) => res.json())
      .then((data) => setMeals(data));
  }, []);
  return (
    <section id="component-style">
      <h1 className="header-style">Our Special Meals</h1>
      <div className="container-style">
        <div className="container">
          {meals.map((meal, i) => (
            <div key={i} className="card">
              <div className="imgBx">
                <img
                  src={meal.img}
                  alt="img1"
                  className="image-style drop-shadow"
                />
              </div>
              <div className="content">
                <h2>{meal.title}</h2>
                <p>{meal.description.slice(0, 110) + "..."}</p>
                <button className="btn btn-products">
                  <Link to={`/review/${meal._id}`}>More Info</Link>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="flex justify-between items-center gap-6">
          <hr className="md:w-48 w-20" />
          <Link to="/all_meals">
            <button className="btn btn-primary ">Our Meals</button>
          </Link>
          <hr className="md:w-48 w-20" />
        </div>
      </div>
    </section>
  );
};

export default OurProducts;
