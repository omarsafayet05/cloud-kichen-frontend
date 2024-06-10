import Login from "../Login/Login";
import Main from "../Main/Main";
import Blog from "../Blog/Blog";
import Home from "../Home/Home";

import { createBrowserRouter } from "react-router-dom";
import Register from "../Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Meals from "../Meals/Meals";
import Review from "../Review/Review";
import Modal from "../Review/Modal";
import AddMeals from "../Add Meals/AddMeals";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/all_meals",
        element: <Meals />,
      },
      {
        path: "/review/:id",
        element: <Review />,
        loader: ({ params }) =>
          fetch(
            `https://cloud-kichen-backend.vercel.app/all_meals/${params.id}`
          ),
      },
      {
        path: "/modal/:id",
        element: <Modal />,
        loader: ({ params }) =>
          fetch(`https://cloud-kichen-backend.vercel.app/posts/${params.id}`),
      },
      {
        path: "/add_meals",
        element: (
          <PrivateRoute>
            <AddMeals />
          </PrivateRoute>
        ),
      },

      {
        path: "/blog",
        element: <Blog />,
      },
    ],
  },
]);
export default router;
