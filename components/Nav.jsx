import Link from "next/link";

const Nav = ({ activeBurger, closeMenu, setActiveBurger }) => {
  return (
    <nav className=" bg-blur backdrop-blur-sm md:py-4 fixed left-0 right-0 top-0 z-30">
      <div className="layout flex align items-center justify-between px-6 md:px-12">
        <Link href={"/"}>
          {/* <img
            width={162}
            height={33}
            src="/assets/icons/logo.png"
            alt="One for all "
          /> */}
          <div className=" w-162 h-33 font-sans text-2xl font-medium text-blue-200 ">
            Erase Poverty
          </div>
        </Link>
        <div
          onClick={() => setActiveBurger((prev) => !prev)}
          className="hamburger "
        >
          <svg
            className={`ham hamRotate ham8 ${activeBurger && "active"}`}
            viewBox="0 0 100 100"
            width="60"
          >
            <path
              className="line top"
              d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20"
            />
            <path className="line middle" d="m 30,50 h 40" />
            <path
              className="line bottom"
              d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20"
            />
          </svg>
        </div>
        <div className={`wrapper-menu ${activeBurger && "active"} `}>
          <div className="ul_wrapper ">
            <ul
              onClick={closeMenu}
              className="flex items-center gap-5  text-base font-montserrat font-medium text-white md:gap-[45px] flex-col md:flex-row"
            >
              <li>
                <Link href={"/"}>Home</Link>
              </li>
              <li>
                <Link href={"/about"}>About</Link>
              </li>
              <li>
                <Link href={"/about/#gallery"}>Gallery</Link>
              </li>
              <li>
                <Link href={"/faqs#contact"}>Contact</Link>
              </li>
              <li>
                <Link href={"/faqs"}>FAQs</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
