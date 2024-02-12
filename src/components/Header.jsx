import React, { useState } from "react";
import ThemeIcon from "./ThemeIcon";
function HeaderComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-[#08111f] text-white shadow-md sticky top-0 z-20">
      <div className="max-w-[1110px] mx-auto">
        <div className="flex justify-between md:justify-around items-center py-5 px-4 md:px-0">
          <div className="flex-shrink-0">
            <img
              src="/public/assets/images/logo-ad.png"
              alt="Logo"
              className="h-12"
            />
          </div>
          <div className="flex">
            <button
              className="bg-[#47bdff] h-10 w-10 text-center rounded-full block md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {/* Menu SVG here */}
            </button>
            <div className="mr-8 ml-4 block md:hidden">
              <ThemeIcon />
            </div>
          </div>

          <nav
            id="menu"
            className={`hidden md:block ${isMenuOpen ? "block" : "hidden"}`}
          >
            <ul class="flex flex-col md:flex-row items-center">
              <ul class="flex items-center">
                <li>
                  <a
                    href="/"
                    class="text-white px-5 py-2 rounded-md text-md font-medium hover:bg-navy-700 hover:text-[#b476e5]"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/the-method"
                    class="text-white px-5 py-2 rounded-md text-md font-medium hover:bg-navy-700 hover:text-[#b476e5]"
                  >
                    The Method
                  </a>
                </li>
                <li>
                  <a
                    href="/offer"
                    class="text-white px-5 py-2 rounded-md text-md font-medium hover:bg-navy-700 hover:text-[#b476e5]"
                  >
                    Offer
                  </a>
                </li>
                <li>
                  <a
                    href="/start"
                    class="text-white px-5 py-2 rounded-md text-md font-medium hover:bg-navy-700 hover:text-[#b476e5]"
                  >
                    Start
                  </a>
                </li>
                <li>
                  <a
                    href="/blog"
                    class="text-white px-5 py-2 rounded-md text-md font-medium hover:bg-navy-700 hover:text-[#b476e5]"
                  >
                    Blog
                  </a>
                </li>
                <div class="mr-8 ml-4 hidden md:block">
                  <ThemeIcon />
                </div>
              </ul>
            </ul>
          </nav>
        </div>

        {/* Responsive menu */}
        <div
          id="menu-responsive"
          className={`hidden absolute right-1 h-[100vh] top-0 w-[300px] bg-white shadow-md z-10 ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          {/* Responsive menu items */}
        </div>
      </div>
    </header>
  );
}

export default HeaderComponent;
