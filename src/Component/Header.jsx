import { useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const [active, setActive] = useState("Home")

  return (
    <>
      <div className="container w-full ">
        <div className="bg-[url('/banner.jpg')] bg-center  bg-cover min-h-[400px] relative">
          <nav className="text-lg  font-pacifico text-gray-200  drop-shadow-md border-b">

            <div className="flex justify-between items-center px-12 py-2  align-center ">

              <img className="h-16 w-16 bg-white p-1 shadow-lg rounded-full" src="/logo_2.png"></img>
              <div className="flex ">

                <div className="flex font-semibold space-x-16">
                  <Link className="hover:text-pink-300" to="/home">Home</Link>
                  <Link className="hover:text-pink-300" to="/product">Product</Link>
                  <Link className="hover:text-pink-300" to="/contact">Contact</Link>
                </div>
                <div className="  ml-12 flex items-center space-x-12 ">

                  <Link className="hover:text-pink-300" to="/liked"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853Z"></path></svg></Link>



                  <Link className="hover:text-pink-300 " to="/card"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M4.00436 6.41686L0.761719 3.17422L2.17593 1.76001L5.41857 5.00265H20.6603C21.2126 5.00265 21.6603 5.45037 21.6603 6.00265C21.6603 6.09997 21.6461 6.19678 21.6182 6.29L19.2182 14.29C19.0913 14.713 18.7019 15.0027 18.2603 15.0027H6.00436V17.0027H17.0044V19.0027H5.00436C4.45207 19.0027 4.00436 18.5549 4.00436 18.0027V6.41686ZM5.50436 23.0027C4.67593 23.0027 4.00436 22.3311 4.00436 21.5027C4.00436 20.6742 4.67593 20.0027 5.50436 20.0027C6.33279 20.0027 7.00436 20.6742 7.00436 21.5027C7.00436 22.3311 6.33279 23.0027 5.50436 23.0027ZM17.5044 23.0027C16.6759 23.0027 16.0044 22.3311 16.0044 21.5027C16.0044 20.6742 16.6759 20.0027 17.5044 20.0027C18.3328 20.0027 19.0044 20.6742 19.0044 21.5027C19.0044 22.3311 18.3328 23.0027 17.5044 23.0027Z"></path></svg></Link>


                  <Link className="hover:text-pink-300" to="/profile"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M3 4.99509C3 3.89323 3.89262 3 4.99509 3H19.0049C20.1068 3 21 3.89262 21 4.99509V19.0049C21 20.1068 20.1074 21 19.0049 21H4.99509C3.89323 21 3 20.1074 3 19.0049V4.99509ZM6.35687 18H17.8475C16.5825 16.1865 14.4809 15 12.1022 15C9.72344 15 7.62182 16.1865 6.35687 18ZM12 13C13.933 13 15.5 11.433 15.5 9.5C15.5 7.567 13.933 6 12 6C10.067 6 8.5 7.567 8.5 9.5C8.5 11.433 10.067 13 12 13Z"></path></svg></Link>
                </div>

              </div>
            </div>
          </nav>

        </div>

      </div>
    </>
  )
}
export default Header;
