import React, { useState } from "react";
import { Link } from "react-router-dom";
import avatar from "../assets/icons/avatar.png";
import { useAuthContext } from "../context/AuthContext";
import { useMovieContext } from "../context/MovieContext";
import FavComp from "./FavComp";
import Switch from "./Switch";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  // + with custom hook
  const { currentUser, logOut } = useAuthContext();
  // + with useContext
  // const { currentUser } = useContext(authContext);
  // const currentUser = { displayName: "Huseyin Karabas" };
  // const currentUser = false;
  // + with custom hook
  const { favorites } = useMovieContext();

  const fav = favorites.length;

  return (
    <div>
      <nav
        className="flex w-full flex-wrap items-center justify-between bg-neutral-100 dark:bg-gray-900 py-3 dark:text-neutral-200 shadow-lg lg:flex-wrap lg:justify-start fixed top-0 z-20"
        data-te-navbar-ref=""
      >
        <div className="flex flex-col gap-3 sm:gap-0 sm:flex-row w-full flex-wrap items-center justify-between px-6">
          <div className="flex justify-between items-center gap-2">
            <img
              src="images/ehlogo-transparent.png"
              alt="brand logo"
              width="50px"
            />
            <Link
              className="pr-2 text-xl font-semibold text-black dark:text-white"
              to="/"
            >
              Movie App
            </Link>
          </div>

          {/* Collapsible wrapper */}
          {/* Right elements */}
          <div className="relative flex items-center self-end sm:self-auto">
            {currentUser && (
              <h5 className="mr-2 capitalize  text-black dark:text-white">
                {currentUser?.displayName}
              </h5>
            )}
            <Switch darkMode={darkMode} setDarkMode={setDarkMode} />
            <FavComp fav={fav} />
            <div className="relative" data-te-dropdown-ref="">
              <span
                className="hidden-arrow flex items-center whitespace-nowrap transition duration-150 ease-in-out motion-reduce:transition-none"
                id="dropdownMenuButton2"
                role="button"
                data-te-dropdown-toggle-ref=""
                aria-expanded="false"
              >
                <img
                  src={currentUser?.photoURL || avatar}
                  className="rounded-full"
                  style={{ height: 25, width: 25 }}
                  alt=""
                  loading="lazy"
                  referrerPolicy="no-referrer" // ! bu attribute-value ile guvenlik acigina karsi onlem alinmis olur
                  // Bir site, kendisi üzerinden başka bir siteye erişim yapıldığında, Referer headerı ile kendi adresini belirtir. Hedef site de yine Referer headerı ile bu gezinime kaynak teşkil eden siteyi görebilir. Referer headerı sadece site üzerindeki bir link tıklandığında değil, aynı zamanda stil, imaj ve script yüklemelerinde, form gönderimlerinde de yapılan isteğe eklenecektir.
                  // Bir saldırgan, yazdığı bir yoruma eklediği bir linkin tıklanmasını sağlayarak, Referer headerı ile kendisini ulaşan URL'deki JSESSIONID bilgisini, dolayısıyla da kullanıcı oturumunu ele geçirebilir.
                  // GET /free_smart_phone HTTP/1.2
                  // Host: www.attackersite.com
                  // Referer: http://www.victimsite.com/comments.php?USER=1455578
                  // no-referrer
                  // Siteden kaynaklanan hiçbir isteğe, kendisi ile aynı originine sahip bir kaynağa yönlenmiş bile olsa, Referer headerı eklenmemesini sağlar. Bu durumda Referer alanı gönderilmeyecektir. Ozellikle kullanici bilgilerinin tutuldugu tum elementlerde no-referrer kullanilmasi guvenlik acisindan avantajlidir.
                />
              </span>
              <ul
                className="absolute left-auto right-0 z-[1000] float-left m-0 mt-1 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block"
                aria-labelledby="dropdownMenuButton2"
                data-te-dropdown-menu-ref=""
              >
                {!currentUser && (
                  <>
                    <li>
                      <Link
                        className="block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
                        to="/register"
                        data-te-dropdown-item-ref=""
                      >
                        Register
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
                        to="/login"
                        data-te-dropdown-item-ref=""
                      >
                        Login
                      </Link>
                    </li>
                  </>
                )}
                <li>
                  <span
                    className="block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
                    role="button"
                    data-te-dropdown-item-ref=""
                    onClick={() => {
                      logOut();
                    }}
                  >
                    Logout
                  </span>
                </li>
              </ul>
            </div>
          </div>
          {/* Right elements */}
        </div>
      </nav>
      {/* For 100% Correct Auto Margin From Top */}
      <div className="invisible">
        <nav
          className="flex w-full flex-wrap items-center justify-between bg-neutral-100 dark:bg-gray-900 py-3 dark:text-neutral-200 shadow-lg lg:flex-wrap lg:justify-start"
          data-te-navbar-ref=""
        >
          <div className="flex flex-col sm:flex-row w-full flex-wrap items-center justify-between px-6">
            <div className="flex justify-between items-center gap-2">
              <img
                src="images/ehlogo-transparent.png"
                alt="brand logo"
                width="50px"
              />
              <Link
                className="pr-2 text-xl font-semibold text-black dark:text-white"
                to="/"
              >
                Movie App
              </Link>
            </div>

            {/* Collapsible wrapper */}
            {/* Right elements */}
            <div className="relative flex items-center">
              {currentUser && (
                <h5 className="mr-2 capitalize  text-black dark:text-white">
                  {currentUser?.displayName}
                </h5>
              )}
              <Switch />
              <FavComp fav={fav} />
              <div className="relative" data-te-dropdown-ref="">
                <span
                  className="hidden-arrow flex items-center whitespace-nowrap transition duration-150 ease-in-out motion-reduce:transition-none"
                  id="dropdownMenuButton2"
                  role="button"
                  data-te-dropdown-toggle-ref=""
                  aria-expanded="false"
                >
                  <img
                    src={currentUser?.photoURL || avatar}
                    className="rounded-full"
                    style={{ height: 25, width: 25 }}
                    alt=""
                    loading="lazy"
                    referrerPolicy="no-referrer" // ! bu attribute-value ile
                  />
                </span>
                <ul
                  className="absolute left-auto right-0 z-[1000] float-left m-0 mt-1 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block"
                  aria-labelledby="dropdownMenuButton2"
                  data-te-dropdown-menu-ref=""
                >
                  <li>
                    <Link
                      className="block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
                      to="/register"
                      data-te-dropdown-item-ref=""
                    >
                      Register
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
                      to="/login"
                      data-te-dropdown-item-ref=""
                    >
                      Login
                    </Link>
                  </li>
                  <li>
                    <span
                      className="block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
                      role="button"
                      data-te-dropdown-item-ref=""
                      onClick={() => {
                        logOut();
                      }}
                    >
                      Logout
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            {/* Right elements */}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
