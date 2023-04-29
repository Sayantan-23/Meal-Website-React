import { Link } from "react-router-dom";
import searchIcon from "../assets/search.png";

const Header = () => {

  return (
    <>
      <div className="navbar m-auto backdrop-blur-md justify-between fixed top-0 z-50">
        <div className="navbar m-auto justify-between max-w-7xl">
          <div className="navbar-start w-auto">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost btn-circle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h7"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-[#212529] text-white rounded-box w-52"
              >
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/categories">Categories</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="navbar-center">
            <Link
              to="/"
              className="normal-case text-xl sm:text-3xl text-[#f1faee] font-bold"
            >
              Recipe<span className="text-amber-700">Realm</span>
            </Link>
          </div>
          <div
            className="form-control flex-row items-center gap-3"
            onSubmit={(e) => e.preventDefault()}
          >
            {/* <input
              type="text"
              placeholder="Search by name"
              className="input input-bordered rounded-[100vmax] h-10 w-24 sm:w-40 md:w-48"
              onChange={(e) => setInputData(e.target.value)}
              value={inputData}
            /> */}
            <Link to="/search">
              <button className="btn bg-base-100 hover:bg-amber-700 rounded-[100vmax] p-2 w-12">
                <img className="w-5" src={searchIcon} alt="Search Icon" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
