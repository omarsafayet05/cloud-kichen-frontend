import cloudChicken from "../assets/logo-1.png";
import { BiSolidRightArrow } from "react-icons/bi";
const Footer = () => {
  return (
    <div className="p-10 bg-[#090909]  text-gray-200">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
          <div className="mb-5">
            <img src={cloudChicken} alt="img1" className="w-[40%]" />
            Lohagara,Chattogram <br />
            <strong>Phone:</strong>+8801672540212br
            <br />
            <strong>Email:</strong>info@example.com
          </div>
          <div className="mb-5">
            <strong className="text-lg">Useful Links</strong>

            <ul>
              <li className="pb-3 text-gray-500 flex items-center justify-start  gap-1">
                <BiSolidRightArrow />
                Home
              </li>
              <li className="pb-3 text-gray-500 flex items-center justify-start  gap-1">
                <BiSolidRightArrow />
                Menu
              </li>
              <li className="pb-3 text-gray-500 flex items-center justify-start  gap-1">
                <BiSolidRightArrow />
                Add Meals
              </li>
              <li className="pb-3 text-gray-500 flex items-center justify-start  gap-1">
                <BiSolidRightArrow />
                Review
              </li>
              <li className="pb-3 text-gray-500 flex items-center justify-start  gap-1">
                <BiSolidRightArrow />
                Blog
              </li>
            </ul>
          </div>
          <div className="mb-5">
            <strong className="text-lg">Our Services</strong>
            <ul>
              <li className="pb-3 text-gray-500 flex items-center justify-start gap-1 ">
                <BiSolidRightArrow /> Home Delivery
              </li>
              <li className="pb-3 text-gray-500 flex items-center justify-start  gap-1">
                <BiSolidRightArrow />
                Group Orders
              </li>
              <li className="pb-3 text-gray-500 flex items-center justify-start  gap-1">
                <BiSolidRightArrow />
                Advance Token Pay
              </li>
              <li className="pb-3 text-gray-500 flex items-center justify-start  gap-1">
                <BiSolidRightArrow />
                Offers for Regular Customer
              </li>
            </ul>
          </div>
          <div className="mb-5">
            <strong className="text-lg mb-2">Newsletter</strong>

            <form>
              <div className="flex gap-3">
                <input
                  type="email"
                  name=""
                  id=""
                  className="outline-none border-none rounded-md w-52 text-slate-900 "
                />
                <button className="btn btn-warning text-white">Email</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
