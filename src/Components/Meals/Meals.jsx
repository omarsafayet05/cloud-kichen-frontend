import { useContext, useEffect, useState } from "react";
import classes from "./Meals.module.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthProvider";
import Loader from "../Loader";

const Meals = () => {
  const [meals, setMeals] = useState([]);
  const { user, loading } = useContext(AuthContext);

  useEffect(() => {
    fetch("https://cloud-kichen-backend.vercel.app/all_meals")
      .then((res) => res.json())
      .then((data) => setMeals(data));
  }, []);

  if (loading) {
    return <Loader />;
  } else {
    meals;
    console.log(meals);
  }

  return (
    <div className={classes.dimention}>
      <div className={classes.component}>
        <h1 className={classes.header}>Our All Meals</h1>
        <div className={classes.main}>
          <div className={classes.container}>
            {meals.map((content, i) => (
              <div key={i} className={classes.card}>
                <div className={classes.imgBx}>
                  <img
                    src={content.img}
                    alt=""
                    className={classes.dropShadow}
                  />
                </div>
                <div className={classes.content}>
                  <h2>{content.title}</h2>
                  <p>{content.description.substring(0, 110) + "..."}</p>
                  <button className={classes.btnProducts}>
                    {user ? (
                      <Link to={`/review/${content._id}`}>More Info</Link>
                    ) : (
                      <Link to={"/login"}>More Info</Link>
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Meals;
